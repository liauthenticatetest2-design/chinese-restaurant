// 画面が読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {
  // menu.json からデータを取得
  fetch('menu.json')
    .then(response => response.json())
    .then(menuData => {
      const menuContainer = document.getElementById('menu-container');
      menuContainer.innerHTML = ''; // 「読み込み中...」を消去

      // 提供可能なメニュー（isAvailable: true）のみをループ処理
      menuData.forEach(item => {
        if (item.isAvailable) {
          const li = document.createElement('li');
          li.innerHTML = `
                        <span class="menu-name">${item.name}</span>
                        <span class="menu-price">￥${item.price.toLocaleString()}</span>
                    `;
          menuContainer.appendChild(li);
        }
      });
    })
    .catch(error => {
      console.error('メニューデータの読み込みに失敗しました:', error);
      document.getElementById('menu-container').innerHTML = '<li>メニューの読み込みに失敗しました。</li>';
    });
});
