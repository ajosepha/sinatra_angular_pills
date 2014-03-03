'use strict'
$(document).ready(function(){
  setTimeout(function(){
    $(".col6").on("click", function(alert){
      $(this).find(".hormone").toggleClass("hidden");
    });
   
  }, 1600);  
});





