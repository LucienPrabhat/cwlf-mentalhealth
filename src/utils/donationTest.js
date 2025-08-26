// 捐款功能測試工具
import { API_CONFIG } from '../config/api.js'
import MD5 from 'crypto-js/md5.js'

// 測試API配置
export const testApiConfig = () => {
  console.log('=== API配置測試 ===')
  console.log('BASE_URL:', API_CONFIG.BASE_URL)
  console.log('ENDPOINTS:', API_CONFIG.ENDPOINTS)
  console.log('DONATE_TYPES:', API_CONFIG.DONATE_TYPES)
  console.log('FIXED_PARAMS:', API_CONFIG.FIXED_PARAMS)
  console.log('DEFAULT_AMOUNTS:', API_CONFIG.DEFAULT_AMOUNTS)
  console.log('HASHKEY1:', API_CONFIG.HASHKEY1 ? '已設定' : '未設定')
  console.log('HASHKEY2:', API_CONFIG.HASHKEY2 ? '已設定' : '未設定')
  console.log('==================')
}

// 測試donate_check生成
export const testDonateCheck = (params) => {
  // 根據API文檔：md5(strtolower($HashKey1 . $donate_option . $donate_amount . $donate_type. $HashKey2))
  const checkString = `${API_CONFIG.HASHKEY1}${params.donate_kind}${params.donate_amount}${params.donate_type}${API_CONFIG.HASHKEY2}`
  const lowerCaseString = checkString.toLowerCase()
  const check = MD5(lowerCaseString).toString()
  console.log('=== donate_check測試 ===')
  console.log('原始字串:', checkString)
  console.log('小寫字串:', lowerCaseString)
  console.log('MD5檢查碼:', check)
  console.log('=====================')
  return check
}

// 測試API參數
export const testApiParams = (amount, kind) => {
  const params = {
    donate_amount: amount,
    donate_type: API_CONFIG.FIXED_PARAMS.DONATE_TYPE,
    donate_kind: kind,
    dvr_msg_source_title: API_CONFIG.FIXED_PARAMS.DVR_MSG_SOURCE_TITLE,
    fix_donate_type: API_CONFIG.FIXED_PARAMS.FIX_DONATE_TYPE,
    donate_project_code: API_CONFIG.FIXED_PARAMS.DONATE_PROJECT_CODE,
    enable_offline_payment: API_CONFIG.FIXED_PARAMS.ENABLE_OFFLINE_PAYMENT,
    dvr_msg_source: API_CONFIG.FIXED_PARAMS.DVR_MSG_SOURCE,
    donate_check: testDonateCheck({
      donate_amount: amount,
      donate_type: API_CONFIG.FIXED_PARAMS.DONATE_TYPE,
      donate_kind: kind,
      donate_project_code: API_CONFIG.FIXED_PARAMS.DONATE_PROJECT_CODE
    })
  }
  
  console.log('=== API參數測試 ===')
  console.log('金額:', amount)
  console.log('類型:', kind === API_CONFIG.DONATE_TYPES.SINGLE ? '單次' : '定期')
  console.log('完整參數:', params)
  console.log('==================')
  
  return params
}

// 測試所有捐款方案
export const testAllDonationPlans = () => {
  console.log('=== 所有捐款方案測試 ===')
  
  // 單次捐款測試
  console.log('\n--- 單次捐款測試 ---')
  API_CONFIG.DEFAULT_AMOUNTS.SINGLE.forEach(amount => {
    testApiParams(amount, API_CONFIG.DONATE_TYPES.SINGLE)
  })
  
  // 定期捐款測試
  console.log('\n--- 定期捐款測試 ---')
  API_CONFIG.DEFAULT_AMOUNTS.RECURRING.forEach(amount => {
    testApiParams(amount, API_CONFIG.DONATE_TYPES.RECURRING)
  })
  
  // 自由捐款測試
  console.log('\n--- 自由捐款測試 ---')
  testApiParams(500, API_CONFIG.DONATE_TYPES.SINGLE)
  
  console.log('=====================')
}

// 驗證金額
export const validateAmount = (amount) => {
  const numAmount = parseInt(amount)
  const isValid = !isNaN(numAmount) && numAmount >= API_CONFIG.DEFAULT_AMOUNTS.MIN_CUSTOM
  
  console.log('=== 金額驗證測試 ===')
  console.log('輸入金額:', amount)
  console.log('解析金額:', numAmount)
  console.log('最低金額:', API_CONFIG.DEFAULT_AMOUNTS.MIN_CUSTOM)
  console.log('是否有效:', isValid)
  console.log('==================')
  
  return isValid
}

// 在開發環境中自動執行測試
if (process.env.NODE_ENV === 'development') {
  console.log('開發環境檢測到，執行捐款功能測試...')
  testApiConfig()
  testAllDonationPlans()
}
