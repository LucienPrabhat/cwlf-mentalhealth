// API配置文件
export const API_CONFIG = {
  // API基礎URL
  BASE_URL: import.meta.env.DEV ? '/api' : 'https://www.children.org.tw',
  
  // 捐款相關API端點
  ENDPOINTS: {
    DONATE_VISA: '/donate/usevisa',
  },
  
  // 捐款類型
  DONATE_TYPES: {
    SINGLE: 'A', // 單次捐款
    RECURRING: 'B', // 定期捐款
  },
  
  // 固定參數
  FIXED_PARAMS: {
    DONATE_TYPE: '18',
    DONATE_PROJECT_CODE: '18',
    DONATE_OPTION: '',
    FIX_DONATE_TYPE: 1,
    ENABLE_OFFLINE_PAYMENT: 0,
    DVR_MSG_SOURCE: '03',
    DVR_MSG_SOURCE_TITLE: 'mentalhealth',
  },
  
  // 預設金額
  DEFAULT_AMOUNTS: {
    SINGLE: [1000, 3000],
    RECURRING: [600, 1000],
    MIN_CUSTOM: 100,
  },
  
  // Hashkey設定（從環境變數取得）
  HASHKEY1: import.meta.env.VITE_API_HASHKEY1 || '',
  HASHKEY2: import.meta.env.VITE_API_HASHKEY2 || '',
  
  // 請求超時設定
  TIMEOUT: 30000, // 30秒
}

// 錯誤訊息
export const ERROR_MESSAGES = {
  NETWORK_ERROR: '網路連線錯誤，請檢查網路連線',
  TIMEOUT_ERROR: '請求超時，請稍後再試',
  VALIDATION_ERROR: '請輸入有效的捐款金額',
  MIN_AMOUNT_ERROR: '最低捐款金額為100元',
  SERVER_ERROR: '伺服器錯誤，請稍後再試',
  UNKNOWN_ERROR: '發生未知錯誤，請稍後再試',
}

// 成功訊息
export const SUCCESS_MESSAGES = {
  DONATION_SUCCESS: (amount) => `捐款${amount}元成功！`,
  CUSTOM_DONATION_SUCCESS: (amount) => `自由捐款${amount}元成功！`,
}

