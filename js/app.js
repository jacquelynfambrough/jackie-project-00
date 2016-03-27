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
        alert("Ilana wins Abbi's love!");
      }
    }
  });

  $(window).on("keypress" , function eventHandler(e){
    if (e.which === pTwoKey){
      playerTwo.stop().animate({
        'left': '+=5px'
        } ,0 );
      if(playerTwo.css('left') === '830px'){
        alert("Abbi wins a 20% off coupon for Bed Bath and Beyond!");
      }
    }
  });

  if(playerTwo.css('left')&& playerOne.css('left')==='830px'){
    alert("Everybody Wins!");
  }

  $('button').on("click" , function resetTracks(e){
    playerOne.stop().animate({
      'left': '0px'
      } ,0 );
    playerTwo.stop().animate({
      'left': '0px'
      } ,0 );
  });

}); //very end
