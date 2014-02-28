

$(document).ready(function(){
  setTimeout(function(){
    $(".hormone").hide();
    $(".card").on("click", function(alert){
      $(this).find(".hormone").fadeIn()
    });
  }, 1000);

  
  
});
