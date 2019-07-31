$(document).ready(function() {
  
  let quote;
  let author;
  function getNewQuote() {
      $.getJSON('https://api.quotable.io/random', function(data) {
        quote = data.content;
        author = data.author;
        $('#text').text(quote);
        if(author) {
          $('#author').text("- " + author);
        } else {
          $('#author').text("- unknown");
        }   
    })    
  }
  getNewQuote();
  $('#new-quote').on('click', function(e) {
    e.preventDefault();
    getNewQuote();
  })
  
  $('#tweet-quote').on('click', function(e) {
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote +  ' -- ' + author));
  })
})