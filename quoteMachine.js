var newQuoteButton = document.getElementById("newQuoteButton");
var author = document.getElementById("author");
var quote = document.getElementById("quote");

newQuoteRequest();

newQuoteButton.addEventListener("click", newQuoteRequest, false);
newQuoteButton.addEventListener("click", addAnimatedClass, false);

function newQuoteRequest() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var newQuote;
        var newAuthor;
        if(xhr.status === 200) {
            responseObject = JSON.parse(xhr.responseText);        
            newQuote = responseObject.quote.body;
            newAuthor = responseObject.quote.author;                              
        }
        quote.innerHTML = "\"" + newQuote + "\"";
        author.innerHTML = newAuthor;        
    }
    xhr.open ("GET", "https://favqs.com/api/qotd", true);
    xhr.send(null);
}

function addAnimatedClass() {
    quote.classList.add("animated", "fadeInLeft");
    author.classList.add("animated", "fadeInRight"); 
}





