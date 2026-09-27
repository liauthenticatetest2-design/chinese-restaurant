// 画面が読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {
  // menu.json からデータを取得
// menu.json を取得して画面に表示する関数
  fetch('menu.json')
    .then(response => response.json())
    .then(data => {
      const menuContainer = document.getElementById('menu-container');

      // HTMLの生成
      const html = data.map(item => `
      <div class="menu-card">
        <!-- 左側：メニュー画像 -->
        <div class="menu-image-wrapper">
          <img src="${item.image || 'images/default.jpg'}" alt="${item.name}" class="menu-image">
        </div>

        <!-- 右側：メニューの詳細情報 -->
        <div class="menu-content">
          <div class="menu-header">
            <h3 class="menu-title">${item.name}</h3>
            <span class="menu-price">¥${item.price.toLocaleString()}</span>
          </div>
          <p class="menu-description">${item.description || ''}</p>
        </div>
      </div>
    `).join('');

      menuContainer.innerHTML = html;
    })
    .catch(error => {
      console.error('エラー:', error);
      document.getElementById('menu-container').innerText = 'データの読み込みに失敗しました。';
    });
});
