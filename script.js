var coll = document.getElementsByClassName("collapsible");
var i;


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

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
  
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function getBitcoin() {
var bitcoinC = ' http://api.bitcoincharts.com/v1/markets.json'

fetch(bitcoinC)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

    }
    
    
    ) 
} 



// Nav bar link declarations
const aboutLink = document.getElementById("about-link");
const faqLink = document.getElementById("faq-link");
const contactLink = document.getElementById("contact-link");
// Event listener for each link
aboutLink.addEventListener("click", () => {
  // For when the about link is clicked
  console.log("About link clicked");
});
faqLink.addEventListener("click", () => {
  // For when the FAQ link is clicked
  console.log("FAQ link clicked");
});
contactLink.addEventListener("click", () => {
  // For when the contact link is clicked
  console.log("Contact link clicked");
});
