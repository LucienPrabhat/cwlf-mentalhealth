# 捐款功能安全設定指南

## Hashkey安全設定

### 1. 環境變數設定（推薦）

在專案根目錄創建 `.env` 文件：

```env
# Hashkey設定（請替換為實際的hashkey）
VITE_API_HASHKEY1=your_actual_hashkey1_here
VITE_API_HASHKEY2=your_actual_hashkey2_here
```

**注意**：實際的hashkey已經設定在專案的 `.env` 文件中：
- `VITE_API_HASHKEY1=`
- `VITE_API_HASHKEY2=`

### 2. 安全注意事項

⚠️ **重要警告**：
- 不要將 `.env` 文件提交到版本控制系統
- 不要在前端代碼中直接寫入hashkey
- 生產環境中應使用不同的hashkey

### 3. 部署建議

1. **開發環境**：使用 `.env` 文件
2. **測試環境**：使用環境變數
3. **生產環境**：使用後端代理或環境變數

## donate_check算法說明

### 算法格式
```javascript
md5(strtolower($HashKey1 . $donate_kind . $donate_amount . $donate_type . $HashKey2))
```

### 參數說明
- `$HashKey1`: 從環境變數 VITE_API_HASHKEY1 取得
- `$donate_kind`: 'A' (單次) 或 'B' (定期)
- `$donate_amount`: 捐款金額
- `$donate_type`: '18'
- `$HashKey2`: 從環境變數 VITE_API_HASHKEY2 取得

### 實作範例
```javascript
import MD5 from 'crypto-js/md5'

const generateDonateCheck = (params) => {
  const checkString = `${API_CONFIG.HASHKEY1}${params.donate_kind}${params.donate_amount}${params.donate_type}${API_CONFIG.HASHKEY2}`
  const lowerCaseString = checkString.toLowerCase()
  return MD5(lowerCaseString).toString()
}
```

## 測試驗證

### 1. 測試donate_check生成
```javascript
// 測試參數
const testParams = {
  donate_kind: 'A',
  donate_amount: '1000',
  donate_type: '18'
}

// 預期結果
// 原始字串: [HashKey1]A100018[HashKey2]
// 小寫字串: [hashkey1]a100018[hashkey2]
// MD5結果: [32位MD5雜湊值]
```

### 2. 驗證步驟
1. 確認hashkey正確
2. 驗證參數順序
3. 檢查MD5算法
4. 測試API調用

## 安全檢查清單

- [ ] Hashkey使用環境變數
- [ ] 不將敏感資訊提交到版本控制
- [ ] 使用正確的MD5算法
- [ ] 參數順序正確
- [ ] 測試API調用成功
- [ ] 錯誤處理完善

## 常見問題

### Q: 為什麼要使用兩個hashkey？
A: 這是API設計的安全機制，使用兩個hashkey可以增加安全性。

### Q: donate_check生成失敗怎麼辦？
A: 檢查以下項目：
1. Hashkey是否正確
2. 參數順序是否正確
3. MD5算法是否正確
4. 字串轉小寫是否正確

### Q: 如何驗證donate_check是否正確？
A: 使用測試工具或與後端API文檔對照驗證。
