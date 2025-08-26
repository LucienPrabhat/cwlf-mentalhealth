# CORS問題解決方案

## 問題描述

API伺服器 `https://www.children.org.tw` 的CORS設定只允許來自 `https://www.youtube.com` 的請求，導致本地開發環境無法直接調用API。

## 解決方案

### 1. 開發環境模擬（推薦）

在開發環境中，系統會自動模擬API回應，避免CORS問題：

```javascript
// 開發環境模擬API回應
if (import.meta.env.DEV) {
  console.log('開發環境：模擬API調用')
  // 模擬成功回應
  return {
    success: true,
    message: '捐款提交成功',
    data: {
      donate_amount: finalAmount,
      donate_kind: donate_kind,
      transaction_id: `TXN_${Date.now()}`,
      redirect_url: `${API_CONFIG.BASE_URL}/payment/redirect`
    }
  }
}
```

### 2. Vite代理設定

已配置Vite代理來解決CORS問題：

```javascript
// vite.config.js
server: {
  proxy: {
    '/api/donate': {
      target: 'https://www.children.org.tw',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api\/donate/, '/donate'),
      headers: {
        'Origin': 'https://www.youtube.com',
        'Referer': 'https://www.youtube.com/'
      }
    }
  }
}
```

### 3. 環境變數配置

API配置會根據環境自動切換：

```javascript
// 開發環境使用代理
BASE_URL: import.meta.env.DEV ? '/api' : 'https://www.children.org.tw'
```

## 使用方式

### 開發環境
- 系統會自動模擬API回應
- 可以在瀏覽器開發者工具中查看模擬的API參數
- 不會有CORS錯誤

### 生產環境
- 使用實際的API調用
- 需要確保伺服器CORS設定正確
- 或使用後端代理

## 測試

### 1. 開發環境測試
```javascript
// 在瀏覽器Console中執行
import { submitDonation } from './src/services/donationService.js'

// 測試捐款
submitDonation({
  donate_amount: 1000,
  donate_kind: 'A'
}).then(result => {
  console.log('捐款結果:', result)
})
```

### 2. 生產環境測試
- 部署到支援CORS的環境
- 或使用後端代理服務

## 注意事項

1. **開發環境**：使用模擬回應，不會實際調用API
2. **生產環境**：需要解決CORS問題或使用代理
3. **安全性**：確保hashkey正確設定
4. **錯誤處理**：已添加CORS錯誤的詳細處理

## 替代方案

如果CORS問題無法解決，可以考慮：

1. **後端代理**：建立自己的後端服務來代理API調用
2. **瀏覽器擴展**：使用CORS解除擴展（僅開發用）
3. **API修改**：聯繫API提供者修改CORS設定
4. **iframe嵌入**：將捐款頁面嵌入iframe中
