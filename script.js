var buttonC = document.getElementsByClassName('collapsible')
var i;

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

getBitcoin();
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