// 捐款API服務
import { API_CONFIG, ERROR_MESSAGES, SUCCESS_MESSAGES } from '../config/api.js'
import MD5 from 'crypto-js/md5.js'

// 生成donate_check參數（根據API文檔說明）
const generateDonateCheck = (params) => {
  // 根據API文檔：md5(strtolower($HashKey1 . $donate_option . $donate_amount . $donate_type. $HashKey2))
  const checkString = `${API_CONFIG.HASHKEY1}${params.donate_option}${params.donate_amount}${params.donate_type}${API_CONFIG.HASHKEY2}`
  const lowerCaseString = checkString.toLowerCase()
  return MD5(lowerCaseString).toString()
}

// 創建並提交表單
const submitForm = (params, targetUrl) => {
  return new Promise((resolve, reject) => {
    try {
      // 創建表單元素
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = targetUrl
      form.target = '_blank' // 在新視窗中打開
      form.style.display = 'none'

      // 添加所有參數到表單
      Object.keys(params).forEach(key => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = key
        input.value = params[key]
        form.appendChild(input)
      })

      // 將表單添加到頁面並提交
      document.body.appendChild(form)
      form.submit()

      // 清理表單
      setTimeout(() => {
        document.body.removeChild(form)
      }, 1000)

      // 返回成功狀態
      resolve({ success: true, message: '表單已提交到新視窗' })
    } catch (error) {
      reject(error)
    }
  })
}

// 捐款API調用
export const submitDonation = async (donationData) => {
  try {
    const {
      donate_amount,
      donate_kind = API_CONFIG.DONATE_TYPES.SINGLE, // A: 單次捐款(預設), B: 定期捐款
      custom_amount = null
    } = donationData

    // 如果是自由捐款，使用自定義金額
    const finalAmount = custom_amount || donate_amount

    const params = {
      donate_amount: finalAmount,
      donate_type: API_CONFIG.FIXED_PARAMS.DONATE_TYPE,
      donate_kind: donate_kind,
      dvr_msg_source_title: API_CONFIG.FIXED_PARAMS.DVR_MSG_SOURCE_TITLE,
      fix_donate_type: API_CONFIG.FIXED_PARAMS.FIX_DONATE_TYPE,
      donate_project_code: API_CONFIG.FIXED_PARAMS.DONATE_PROJECT_CODE,
      enable_offline_payment: API_CONFIG.FIXED_PARAMS.ENABLE_OFFLINE_PAYMENT,
      dvr_msg_source: API_CONFIG.FIXED_PARAMS.DVR_MSG_SOURCE,
      donate_check: generateDonateCheck({
        donate_amount: finalAmount,
        donate_type: API_CONFIG.FIXED_PARAMS.DONATE_TYPE,
        donate_option: API_CONFIG.FIXED_PARAMS.DONATE_OPTION,
      })
    }

    // 使用表單提交到目標URL
    const targetUrl = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DONATE_VISA}`
    console.log('params', params)
    const result = await submitForm(params, targetUrl)
    
    return result
  } catch (error) {
    console.error('捐款提交失敗:', error)
    throw error
  }
}

// 驗證捐款金額
export const validateDonationAmount = (amount) => {
  const numAmount = parseInt(amount)
  if (isNaN(numAmount) || numAmount <= 0) {
    return { valid: false, message: ERROR_MESSAGES.VALIDATION_ERROR }
  }
  if (numAmount < API_CONFIG.DEFAULT_AMOUNTS.MIN_CUSTOM) {
    return { valid: false, message: ERROR_MESSAGES.MIN_AMOUNT_ERROR }
  }
  return { valid: true }
}

// 格式化金額顯示
export const formatAmount = (amount) => {
  return new Intl.NumberFormat('zh-TW').format(amount)
}
