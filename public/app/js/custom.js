// $(document).ready(function(){
//   setTimeout(function(){
//     $(".hormone").hide();
//   }, 1000);
//   $(".col6").on("click", function(){
//     $(this).children().show("slow", function(){

//     });
//     // $(this).find(".hormone").show()
//   });


// });

// // $(".col6").on("click", function(){alert("hi")})
// $(".col6").on("click", function(){$(this).find(".hormone").show()})

$(document).ready(function(){
  setTimeout(function(){
    $(".hormone").hide();
  }, 1000);
  $(".card").on("click", function(alert){
    $(this).find(".hormone").fadeIn()
  });
  
});
