console.log("JS is on");
$(document).on("ready", function(){

  var playerOne = $('#p-1');
  var playerTwo = $('#p-2');
  var pOneKey = 97;
  var pTwoKey = 108;


  $(window).on("keypress" , function eventHandler(e){
    if (e.which === pOneKey){
      console.log("A");
    }
  });

  $(window).on("keypress" , function eventHandler(e){
    // console.log(e);
    if (e.which === pTwoKey){
      console.log("L");
    }
  });


});
