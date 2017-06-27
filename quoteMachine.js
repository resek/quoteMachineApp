var newQuoteButton = document.getElementById("newQuoteButton");
var author = document.getElementById("author");
var quote = document.getElementById("quote");
var twitterButton = document.querySelector("a");
var newQuote;
var newAuthor;

newQuoteRequest();
newQuoteButton.addEventListener("click", newQuoteRequest, false);

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
        twitterButton.setAttribute("href", "https://twitter.com/intent/tweet?text=" + "\"" + newQuote + "\"" + " (" + newAuthor + ")&hashtags=life,wisdom,happy");                            
    }    
    xhr.open ("GET", "https://favqs.com/api/qotd", true);
    xhr.send(null);           
}













