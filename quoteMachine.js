var quoteButton = document.getElementById("quoteButton");
var author = document.getElementById("author");
var quote = document.getElementById("quote");
var body = document.querySelector("body");
var quoteAuthor = document.getElementById("quoteAuthor");
var buttons = document.getElementById("buttons");
var newQuote;
var newAuthor;
var random;

var colors = ["#2ecc71", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#c0392b", "#7f8c8d", "#1abc9c", "#3498db", "#9b59b6", "#34495e", "#f1c40f", "#e74c3c", "#95a5a6"];

newQuoteRequest();
quoteButton.addEventListener("click", newQuoteRequest, false);

function newQuoteRequest() {              
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {        
        if(xhr.status === 200) {
            responseObject = JSON.parse(xhr.responseText);        
            newQuote = responseObject.quote.body;
            newAuthor = responseObject.quote.author;                              
        }
        quote.innerHTML = "\"" + newQuote + "\"";
        author.innerHTML = newAuthor;
        quote.classList.toggle("fadeInLeft");
        quote.classList.toggle("fadeInRight");
        author.classList.toggle("fadeInLeft");
        author.classList.toggle("fadeInRight");
        changeColor();                      
        twitterButton.setAttribute("href", "https://twitter.com/intent/tweet?text=" + "\"" + newQuote + "\"" + " (" + newAuthor + ")&hashtags=life,wisdom,happy");                            
    }    
    xhr.open ("GET", "https://favqs.com/api/qotd", true);
    xhr.send(null);           
}

function changeColor () {
    random = Math.floor(Math.random() * colors.length);
    body.style.background = colors[random];
    quoteAuthor.style.background = colors[random];
    buttons.style.background = colors[random];
}