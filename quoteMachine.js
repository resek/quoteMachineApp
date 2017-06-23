var newQuoteButton = document.getElementById("newQuoteButton");

newQuoteRequest();
newQuoteButton.addEventListener("click", newQuoteRequest, false);

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
        document.getElementById("quote").innerHTML = "\"" + newQuote + "\"";
        document.getElementById("author").innerHTML = newAuthor;
    }
    xhr.open ("GET", "https://favqs.com/api/qotd", true);
    xhr.send(null);
}





