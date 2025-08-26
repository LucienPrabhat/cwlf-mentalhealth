# 捐款功能說明

## 功能概述

這個捐款功能包含5張捐款卡片，用戶可以選擇不同的捐款方案：

### 捐款卡片類型

1. **單次捐款卡片** (2張)
   - 1000元：資助孩子一次心理諮商費
   - 3000元：支持社工長期訪視陪伴，多接住一位受創兒少

2. **定期捐款卡片** (2張)
   - 600元：支持兒少心理健康與陪伴服務
   - 1000元：支持兒少心理健康與陪伴服務

3. **自由捐款卡片** (1張)
   - 用戶可自定義金額（最低100元）

## 技術實現

### 文件結構

```
src/
├── components/
│   └── E.vue                 # 主要捐款頁面組件
├── services/
│   └── donationService.js    # 捐款API服務
├── config/
│   └── api.js               # API配置文件
└── README_DONATION.md       # 本說明文件
```

### API配置

所有API相關的設定都在 `src/config/api.js` 中：

```javascript
export const API_CONFIG = {
  BASE_URL: 'https://www.children.org.tw',
  ENDPOINTS: {
    DONATE_VISA: '/donate/usevisa',
  },
  DONATE_TYPES: {
    SINGLE: 'A',    // 單次捐款
    RECURRING: 'B', // 定期捐款
  },
  FIXED_PARAMS: {
    DONATE_TYPE: '18',
    DONATE_PROJECT_CODE: '18',
    FIX_DONATE_TYPE: '1',
    ENABLE_OFFLINE_PAYMENT: '0',
    DVR_MSG_SOURCE: '03',
    DVR_MSG_SOURCE_TITLE: 'mentalhealth',
  },
  DEFAULT_AMOUNTS: {
    SINGLE: [1000, 3000],
    RECURRING: [600, 1000],
    MIN_CUSTOM: 100,
  },
  HASHKEY1: '',
  HASHKEY2: '',
}
```

### API參數說明

根據兒盟官網捐款頁面介接文件，API調用包含以下參數：

| 參數名稱 | 值 | 說明 |
|---------|----|------|
| donate_amount | 動態 | 捐款金額 |
| donate_type | 18 | 捐款用途代碼 |
| donate_kind | A/B | 捐款類別 (A:單次/B:定期) |
| dvr_msg_source_title | mentalhealth | 本次捐款訊息來源標題 |
| fix_donate_type | 1 | 鎖定捐款用途和金額 |
| donate_project_code | 18 | 捐款專案代碼 |
| enable_offline_payment | 0 | 單次付款可使用非即時付款方式 |
| dvr_msg_source | 03 | 訊息來源代碼 |
| donate_check | 動態 | 安全檢查碼 |

### 安全注意事項

1. **Hashkey安全性**：請將 `src/config/api.js` 中的 `HASHKEY1` 和 `HASHKEY2` 替換為實際的hashkey，或使用環境變數設定
2. **donate_check算法**：使用MD5算法，格式為 `md5(strtolower($HashKey1 . $donate_kind . $donate_amount . $donate_type . $HashKey2))`
3. **環境變數**：建議將敏感資訊（如hashkey）移到環境變數中

## 使用方式

### 1. 固定金額捐款

用戶點擊任意一張固定金額卡片即可進行捐款：

```javascript
// 單次捐款 1000元
handleDonation(1000, 'A')

// 定期捐款 600元
handleDonation(600, 'B')
```

### 2. 自由捐款

用戶在自由捐款區域輸入金額，點擊「立即捐款」按鈕：

```javascript
// 自定義金額捐款
handleCustomDonation()
```

### 3. 驗證機制

- 金額驗證：最低100元
- 輸入驗證：只允許數字
- 按鈕狀態：根據驗證結果啟用/禁用

## 樣式特點

### 互動效果

- **懸停效果**：卡片懸停時會輕微上移並增加陰影
- **點擊效果**：點擊時有視覺反饋
- **載入狀態**：按鈕顯示「處理中...」狀態

### 響應式設計

- **桌面版**：完整佈局
- **平板版**：適中尺寸
- **手機版**：緊湊佈局

## 錯誤處理

### 錯誤類型

1. **驗證錯誤**：金額格式不正確
2. **網路錯誤**：API調用失敗
3. **伺服器錯誤**：API返回錯誤

### 錯誤顯示

- 錯誤訊息顯示在自由捐款區域
- 使用紅色文字顯示錯誤
- 自動清除：用戶重新輸入時清除錯誤訊息

## 部署注意事項

1. **API地址**：確認 `API_CONFIG.BASE_URL` 為正確的API地址
2. **Hashkey**：替換為實際的hashkey
3. **CORS設定**：確保API允許跨域請求
4. **HTTPS**：生產環境建議使用HTTPS

## 未來改進

1. **支付流程**：整合完整的支付流程
2. **成功頁面**：添加捐款成功頁面
3. **收據功能**：添加電子收據功能
4. **捐款記錄**：添加用戶捐款記錄
5. **社交分享**：添加社交媒體分享功能
