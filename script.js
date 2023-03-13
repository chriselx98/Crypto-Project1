var buttonC = document.getElementsByClassName('collapsible')


for (i = 0; i < buttonC.length; i++) {
    buttonC[i].addEventListener('click', function()  {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
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


var tableBody = document.getElementById('repo-table')
var priceCh24 = document.getElementById('price-change')
function bcoin(){

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C7d%2C30d'
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
    

    for (var i = 0; i < data.length; i++) {
      
      var priceChange24 = document.createElement('p');
      var currentP = document.createElement('p');

      currentP.textContent = data[i].current_price;
      priceChange24.textContent = data[i].price_change_24h;
      
      tableBody.appendChild(currentP);
      priceCh24.appendChild(priceChange24);
    }
  });
}

bcoin();

l

