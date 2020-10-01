function fetchAppleStatusJson() {
  const appleStatusUrl = 'https://www.apple.com/support/systemstatus/data/developer/system_status_en_US.js';
  const response = UrlFetchApp.fetch(appleStatusUrl);

  // JSONPの関数定義を削除しJSONにする
  const appleStatusJson = JSON
    .parse(JSON.stringify(response.getContentText()))
    .replace(/^jsonCallback\(/g, '')
    .replace(/\);$/g, '');
  
  Logger.log(JSON.parse(appleStatusJson).services);
}