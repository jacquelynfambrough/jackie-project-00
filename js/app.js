console.log("JS is on");
$(document).on("ready", function(){

  var playerOne = $('#p-1');
  var playerTwo = $('#p-2');


  $(window).on("keydown", function eventHandler(event){
    if (event.keyCode === 65){
      console.log("A");
    }
  });

  $(window).on("keydown", function eventHandler(event){
    if (event.keyCode === 76){
      console.log("L");
    }
  });


});
