$(document).ready(function() {
  //On load, hide everything but the Home page.
  $('#about').hide();
  $('#products').hide();
  $('#jokes').hide();
  
  //Home page
  $("#navHome").on("click", function(){
    $('#home').hide().fadeIn(1000);
    $('#about').hide();
    $('#products').hide();
    $('#jokes').hide();
  });
  
   //About page
   $("#navAbout").on("click", function(){
    $('#home').hide();
    $('#about').hide().fadeIn(1000);
    $('#products').hide();
    $('#jokes').hide();
  });
  
   //Products page
   $("#navProducts").on("click", function(){
    $('#home').hide();
    $('#about').hide();
    $('#products').hide().fadeIn(1000);
    $('#jokes').hide();
  });
  
  //Jokes page
   $("#navJokes").on("click", function(){
    $('#home').hide();
    $('#about').hide();
    $('#products').hide();
    $('#jokes').hide().fadeIn(1000);
  });
  
  
  });
