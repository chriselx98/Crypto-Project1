//this is the start of the con gecko section
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  .then(response => response.json())
  .then(data => {
    //creating first elements
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // table header section
    const headers = ['Rank', 'Name', 'Price', '24h Change', 'Market Cap'];
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // table row section, cons for each row
    data.forEach((coin, index) => {
      const tr = document.createElement('tr');
      const rank = document.createElement('td');
      rank.textContent = index + 1;
      tr.appendChild(rank);
      
      //for the name section

      const name = document.createElement('td');
      name.textContent = coin.name;
      tr.appendChild(name);

      //for te price section

      const price = document.createElement('td');
      price.textContent = coin.current_price;
      tr.appendChild(price);

      //for the change section

      const change = document.createElement('td');
      const colorValue = coin.price_change_percentage_24h;
      change.textContent = `${colorValue.toFixed(2)}%`;
      if (colorValue > 0) {
        change.classList.add('positive');
      } else if (colorValue < 0) {
        change.classList.add('negative');
      }
      tr.appendChild(change);

      //for the market cap section

      const marketCap = document.createElement('td');
      marketCap.textContent = coin.market_cap;
      tr.appendChild(marketCap);

      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    document.body.appendChild(table);
  })
  .catch(error => {
    console.error(error);
  });
