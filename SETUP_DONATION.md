# 捐款功能設定說明

## 快速開始

### 1. 環境變數設定

在專案根目錄創建 `.env` 文件，並填入以下內容：

```env
# API基礎URL
VITE_API_BASE_URL=https://www.children.org.tw

# API端點
VITE_API_DONATE_VISA=/donate/usevisa

# 捐款類型
VITE_DONATE_TYPE_SINGLE=A
VITE_DONATE_TYPE_RECURRING=B

# 固定參數
VITE_DONATE_TYPE=18
VITE_DONATE_PROJECT_CODE=81
VITE_FIX_DONATE_TYPE=1
VITE_ENABLE_OFFLINE_PAYMENT=0
VITE_DVR_MSG_SOURCE=03
VITE_DVR_MSG_SOURCE_TITLE=mentalhealth

# 預設金額
VITE_MIN_CUSTOM_AMOUNT=100

# 安全設定（請替換為實際值）
VITE_API_HASHKEY1=
VITE_API_HASHKEY2=

# 請求超時設定（毫秒）
VITE_API_TIMEOUT=30000
```

### 2. 更新API配置

修改 `src/config/api.js` 文件，使用環境變數：

```javascript
// API配置文件
export const API_CONFIG = {
  // API基礎URL
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://www.children.org.tw',
  
  // 捐款相關API端點
  ENDPOINTS: {
    DONATE_VISA: import.meta.env.VITE_API_DONATE_VISA || '/donate/usevisa',
  },
  
  // 捐款類型
  DONATE_TYPES: {
    SINGLE: import.meta.env.VITE_DONATE_TYPE_SINGLE || 'A',
    RECURRING: import.meta.env.VITE_DONATE_TYPE_RECURRING || 'B',
  },
  
  // 固定參數
  FIXED_PARAMS: {
    DONATE_TYPE: import.meta.env.VITE_DONATE_TYPE || '18',
    DONATE_PROJECT_CODE: import.meta.env.VITE_DONATE_PROJECT_CODE || '81',
    FIX_DONATE_TYPE: import.meta.env.VITE_FIX_DONATE_TYPE || '1',
    ENABLE_OFFLINE_PAYMENT: import.meta.env.VITE_ENABLE_OFFLINE_PAYMENT || '0',
    DVR_MSG_SOURCE: import.meta.env.VITE_DVR_MSG_SOURCE || '03',
    DVR_MSG_SOURCE_TITLE: import.meta.env.VITE_DVR_MSG_SOURCE_TITLE || 'mentalhealth',
  },
  
  // 預設金額
  DEFAULT_AMOUNTS: {
    SINGLE: [1000, 3000],
    RECURRING: [600, 1000],
    MIN_CUSTOM: parseInt(import.meta.env.VITE_MIN_CUSTOM_AMOUNT) || 100,
  },
  
  // Hashkey設定
  HASHKEY1: import.meta.env.VITE_API_HASHKEY1 || '',
  HASHKEY2: import.meta.env.VITE_API_HASHKEY2 || '',
  
  // 請求超時設定
  TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT) || 30000,
}
```

### 3. 安全注意事項

1. **不要將 `.env` 文件提交到版本控制**
   - 將 `.env` 添加到 `.gitignore`
   - 只提交 `.env.example` 作為範例

2. **Hashkey保護**
   - 確保hashkey不會暴露在前端代碼中
   - 考慮使用後端代理來處理敏感資訊

3. **CORS設定**
   - 確保API允許跨域請求
   - 設定適當的CORS策略

## 功能測試

### 1. 開發環境測試

在開發環境中，系統會自動執行測試：

```javascript
// 在 src/utils/donationTest.js 中
if (process.env.NODE_ENV === 'development') {
  console.log('開發環境檢測到，執行捐款功能測試...')
  testApiConfig()
  testAllDonationPlans()
}
```

### 2. 手動測試

```javascript
import { testApiConfig, testAllDonationPlans } from '../utils/donationTest'

// 測試API配置
testApiConfig()

// 測試所有捐款方案
testAllDonationPlans()
```

## 部署檢查清單

- [ ] 設定正確的API基礎URL
- [ ] 替換為實際的hashkey
- [ ] 確認CORS設定
- [ ] 測試所有捐款方案
- [ ] 驗證錯誤處理
- [ ] 檢查響應式設計
- [ ] 確認安全性設定

## 常見問題

### Q: Hashkey在哪裡設定？
A: 在 `.env` 文件中設定 `VITE_API_HASHKEY`，或直接在 `src/config/api.js` 中修改 `HASHKEY` 值。

### Q: API調用失敗怎麼辦？
A: 檢查以下項目：
1. API基礎URL是否正確
2. CORS設定是否允許跨域請求
3. Hashkey是否正確
4. 網路連線是否正常

### Q: 如何修改捐款金額？
A: 在 `src/config/api.js` 中修改 `DEFAULT_AMOUNTS` 物件。

### Q: 如何自定義錯誤訊息？
A: 在 `src/config/api.js` 中修改 `ERROR_MESSAGES` 物件。

## 技術支援

如有問題，請檢查：
1. 瀏覽器開發者工具的Console
2. 網路請求的Network標籤
3. API文檔中的參數說明
4. 環境變數設定
