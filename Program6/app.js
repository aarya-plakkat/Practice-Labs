
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('SW registered', reg))
    .catch(err => console.error('SW failed', err));
}


fetch('stocks.json')
  .then(response => response.json())
  .then(data => {
    const stockList = document.getElementById('stock-list');
    stockList.innerHTML = '';

    data.forEach(stock => {
      const div = document.createElement('div');
      div.className = 'stock-card';
      div.innerHTML = `<strong>${stock.name}</strong> (${stock.symbol})<br>💵 Price: $${stock.price}`;
      stockList.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById('stock-list').innerHTML = 'Failed to load data.';
    console.error(err);
  });
