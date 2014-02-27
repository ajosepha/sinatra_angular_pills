$(document).ready(function(){
  setTimeout(function(){
    $(".hormone").hide();
  }, 1000);
  
  $(".col6").on("click", function(){
    $(this).find(".hormone").show()
  })


});