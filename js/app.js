console.log("JS is on");
$(document).on("ready", function(){

  var playerOne = $('#p-1');
  var playerTwo = $('#p-2');
  var pOneKey = 97;
  var pTwoKey = 108;



  $(window).on("keypress" , function eventHandler(e){
    if (e.which === pOneKey){
      playerOne.stop().animate({
                'left': '+=5px'
      },0 );
      if(playerOne.css('left') === '830px'){
        alert("player one wins!!");
      }
    }
  });

  $(window).on("keypress" , function eventHandler(e){
    if (e.which === pTwoKey){
      playerTwo.stop().animate({
                'left': '+=5px'
      } ,0 );
      if(playerTwo.css('left') === '830px'){
        alert("player two wins!!");
      }
    }
  });



});
