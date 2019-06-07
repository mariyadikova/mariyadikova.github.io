//START OF OVERLAY ANIMATION

$(document).ready(function(){
    
    $('#asset1').hide();
    
    $('#asset2').hide();
    
    $('#asset3').hide();
    
    $('#asset4').hide();

    $('.loading').delay(15000).fadeOut(1000, function () {
        $('.loading').remove();
        $('#asset1').fadeIn(1000);
        $('#asset2').delay(1000).fadeIn(1000);
        $("#asset3").delay(2000).fadeIn(1000);
        $("#asset4").delay(2300).fadeIn(1000);
    });
    
    
    $("#skip").click(function(){
        $('.loading').remove();
        $('#asset1').fadeIn(1000);
        $('#asset2').delay(1000).fadeIn(1000);
        $("#asset3").delay(2000).fadeIn(1000);
        $("#asset4").delay(2300).fadeIn(1000);
        });
    
    $(document).keypress(function() {
  $('.loading').remove();
        $('#asset1').fadeIn(1000);
        $('#asset2').delay(1000).fadeIn(1000);
        $("#asset3").delay(2000).fadeIn(1000);
        $("#asset4").delay(2300).fadeIn(1000);
});
    
//    DISABLES SCROLL ON KEYSPACE
    
    window.onkeydown = function(e) { 
    return !(e.keyCode == 32);
};
    
    });






//MOBILE


if($(window).width() < 451) {
    
    $(document).ready(function(){
        
    $('#asset1').fadeIn(1000);
        $('#asset2').delay(1000).fadeIn(1000);
        $("#asset3").delay(2000).fadeIn(1000);
        $("#asset4").delay(2300).fadeIn(1000);
        
        });
}



//END OF OVERLAY ANIMATION








//START OF NAVBAR IMG BUTTON HOVER

$(function() {
  $('#flexcontainerimage button').hover(function() {
    $('#imagebox img').css('filter', 'brightness(100%)');
  }, function() {
    // on mouseout, reset the background colour
    $('#imagebox img').css('filter', '');
  });
});

//END OF NAVBAR IMG BUTTON HOVER











//START OF MOBILE HAMBURGER MENU

$(document).ready(function() {
  $(".mobile-menu").on('click', function() {
    $(".mobile-dropdown").slideToggle("normal");
  });
});

//END OF MOBILE HAMBURGER MENU













//START OF H2 EFFECT

$( document ).ready( function(){
	$( '.profile h2' ).each( function(){
		$( this ).attr( 'data-buzz' , $( this ).text() );
	});
});

$( document ).ready( function(){
	$( '.categories h2' ).each( function(){
		$( this ).attr( 'data-buzz' , $( this ).text() );
	});
});

$( document ).ready( function(){
	$( '#footerrow3 p' ).each( function(){
		$( this ).attr( 'data-buzz' , $( this ).text() );
	});
});

$( document ).ready( function(){
	$( '#footerrow1 p' ).each( function(){
		$( this ).attr( 'data-buzz' , $( this ).text() );
	});
});

$( document ).ready( function(){
	$( '.puzzlefeed h2' ).each( function(){
		$( this ).attr( 'data-buzz' , $( this ).text() );
	});
});

$( document ).ready( function(){
	$( '#subscription2 p' ).each( function(){
		$( this ).attr( 'data-buzz' , $( this ).text() );
	});
});

$( document ).ready( function(){
	$( '.article h2' ).each( function(){
		$( this ).attr( 'data-buzz' , $( this ).text() );
	});
});

$( document ).ready( function(){
	$( '#sharetext p' ).each( function(){
		$( this ).attr( 'data-buzz' , $( this ).text() );
	});
});

$( document ).ready( function(){
	$( '#commenttext p' ).each( function(){
		$( this ).attr( 'data-buzz' , $( this ).text() );
	});
});


//END OF H2 EFFECT










//START OF PROFILE SHOW WITH BUTTON CLICK

$( document ).ready( function(){
    $('#profilecloud1').hide();
    $('#profilecloud3').hide();
    $('#profiletextpart2').hide();
    $('#profiletextpart3').hide();
    $('#buzz3').hide();
    $('#tree').hide();
    
    
    $('#profilebutton').on('click', function(){
        
        $('.profile').css( "height", "1300px" );
        
        $(this).fadeOut(500);
        $('#profilecloud1').fadeIn(1500);
        $('#profilecloud3').fadeIn(1500);
    $('#profiletextpart2').fadeIn(1500);
    $('#profiletextpart3').fadeIn(1500);
    $('#buzz3').fadeIn(1500);
    $('#tree').fadeIn(1500);
           
    });
});




//MOBILE

$(document).ready(function () {
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 451) {
            $('#profilebutton').on('click', function(){
        
        $('.profile').css( "height", "1400px" );
        
        $(this).fadeOut(500);
        $('#profilecloud1').hide();
        $('#profilecloud3').fadeIn(1500);
    $('#profiletextpart2').fadeIn(1500);
    $('#profiletextpart3').fadeIn(1500);
    $('#buzz3').fadeIn(1500);
    $('#tree').fadeIn(1500);
           
    });
        }
    }
});



//END OF PROFILE SHOW WITH BUTTON CLICK










//START OF OUTSIDE POPUP CLICK

$( document ).ready( function(){
var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

});

//END OF OUTSIDE POPUP CLICK













//START OF SCROLLMAGIC


$( document ).ready( function(){

    
    var controller = new ScrollMagic.Controller();


    
    
    
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////left door
    blockTween = new TweenMax.to('#door1', 1.5, {
        left: -250,
//        width: 600
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.beehive',
            offset: 200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////left door
    blockTween = new TweenMax.to('#door1', 1.5, {
        left: -40,
//        width: 600
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '#drop4',
            offset: 250,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    

    
    
    
    
    
    
    
    
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////right door
    blockTween = new TweenMax.to('#door2', 1.5, {


        right: -250,
//        zIndex: -1,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.beehive',
            offset: 200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////right door
    blockTween = new TweenMax.to('#door2', 1.5, {


        right: -40,
//        zIndex: -1,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '#drop4',
            offset: 250,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////beehive button
    blockTween = new TweenMax.to('#subscription4', 1.5, {
        zIndex: 11
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.beehive',
            offset: 250,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////beehive button
    blockTween = new TweenMax.to('#subscription4', 1.5, {
        zIndex: 11
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '#drop4',
            offset: 400,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
    ////////////beehive container
    blockTween = new TweenMax.to('#subscription', 1.5, {
        paddingLeft: 0,
        paddingRight: 0,

    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '#drop4',
            offset: 250,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
    ////////////beehive container
    blockTween = new TweenMax.to('#subscription', 1.5, {
        paddingLeft: 150,
        paddingRight: 150,

    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '#drop4',
            offset: 250,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
////////////beehive bee
    blockTween = new TweenMax.to('#beehivebee', 1.5, {
        left: 450,
        top: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.beehive',
            offset: 200,
//            duration: 500
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
////////////beehive bee
    blockTween = new TweenMax.to('#beehivebee', 1.5, {
        left: 1050,
        top: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '#drop4',
            offset: 250,
            duration: 800
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
    //////////////////drop1
    blockTween = new TweenMax.to('#drop1', 2.5, {
        top: 350,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.categories',
            offset: 350,
            duration: 1500
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
    //////////////////drop1
    blockTween = new TweenMax.to('#drop1', 2.5, {
        top: 60,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.categories',
            offset: 400,
            duration: 500
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    
 
    
    
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
    //////////////////drop1
    blockTween = new TweenMax.to('#drop2', 2.5, {
        top: 400,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.categories',
            offset: 650,
            duration: 1100
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
 ///////////////drop2
    blockTween = new TweenMax.to('#drop2', 2.5, {
        top: 30,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.categories',
            offset: 400,
            duration: 800
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
    //////////////////drop1
    blockTween = new TweenMax.to('#drop3', 2.5, {
        top: 420,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.categories',
            offset: 1380,
            duration: 500
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
///////////////drop3
    blockTween = new TweenMax.to('#drop3', 2.5, {
        top: 50,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.categories',
            offset: 500,
            duration: 200
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
///////////drop4
    blockTween = new TweenMax.to('#drop4', 1.5, {
        scale: 1.1,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.categories',
            offset: 1750,
//            duration: 500
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
///////////drop4
    blockTween = new TweenMax.to('#drop4', 1.5, {
        scale: 1,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.categories',
            offset: 700,
//            duration: 500
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
    /////////////pf drop1
    blockTween = new TweenMax.to('#pfe9', 1.5, {
        top: 360,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '#pfe14',
            offset: 100,
//            duration: 500
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
    /////////////pf drop1
    blockTween = new TweenMax.to('#pfe9', 1.5, {
        top: 350,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '#pfe3',
            offset: 500,
//            duration: 500
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
////////////pf drop2
    blockTween = new TweenMax.to('#pfe10', 1.5, {
        top: 200,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '#pfe5',
            offset: 300,
//            duration: 500
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
////////////pf drop2
    blockTween = new TweenMax.to('#pfe10', 1.5, {
        top: 350,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '#pfe3',
            offset: 700,
//            duration: 500
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    

    
    
    
    
    
    
    
    
    
    
/////////////////left grass
    blockTween = new TweenMax.to('#grassleft', 1.5, {
        left: 0,
//        width: 600
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: 'footer',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
               var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////right grass
    blockTween = new TweenMax.to('#grassright', 1.5, {
        right: 0,
//        width: 600
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: 'footer',
            offset: 0,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////right grass
    blockTween = new TweenMax.to('#grassright', 1.5, {
        right: 0,
//        width: 600
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: 'footer',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////bear
    blockTween = new TweenMax.to('#bear', 1.5, {
        left: -250,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '#sharebuttons',
            offset: 0,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////bear
    blockTween = new TweenMax.to('#bear', 1.5, {
        left: -150,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '#sharebuttons',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    
    
//    IMG1
    
    
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////img1
    blockTween = new TweenMax.to('.article12 #img1', 1.5, {
        left: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img1',
            offset: 0,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////img1
    blockTween = new TweenMax.to('.article12 #img1', 1.5, {
        left: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img1',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////img1
    blockTween = new TweenMax.to('.article12 #img1text', 1.5, {
        left: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img1',
            offset: 150,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////img1
    blockTween = new TweenMax.to('.article12 #img1text', 1.5, {
        left: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img1text',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    IMG2
    
    
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////img2
    blockTween = new TweenMax.to('.article12 #img2', 1.5, {
        right: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img2',
            offset: 0,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////img2
    blockTween = new TweenMax.to('.article12 #img2', 1.5, {
        right: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img2',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////img2
    blockTween = new TweenMax.to('.article12 #img2text', 1.5, {
        right: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img2',
            offset: 150,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////img2
    blockTween = new TweenMax.to('.article12 #img2text', 1.5, {
        right: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img2text',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
//    IMG3
    
    
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////img3
    blockTween = new TweenMax.to('.article12 #img3', 1.5, {
        left: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img3',
            offset: 0,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////img3
    blockTween = new TweenMax.to('.article12 #img3', 1.5, {
        left: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img3',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
               var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////img3
    blockTween = new TweenMax.to('.article12 #img3text', 1.5, {
        left: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img3',
            offset: 150,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////img3
    blockTween = new TweenMax.to('.article12 #img3text', 1.5, {
        left: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img3text',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    IMG4
    
    
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////img4
    blockTween = new TweenMax.to('.article12 #img4', 1.5, {
        right: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img4',
            offset: 0,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////img4
    blockTween = new TweenMax.to('.article12 #img4', 1.5, {
        right: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img4',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////img4
    blockTween = new TweenMax.to('.article12 #img4text', 1.5, {
        right: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img4',
            offset: 150,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////img4
    blockTween = new TweenMax.to('.article12 #img4text', 1.5, {
        right: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img4text',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    IMG5
    
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////img5
    blockTween = new TweenMax.to('.article12 #img5', 1.5, {
        left: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img5',
            offset: 0,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////img5
    blockTween = new TweenMax.to('.article12 #img5', 1.5, {
        left: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img5',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////img5
    blockTween = new TweenMax.to('.article12 #img5text', 1.5, {
        left: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img5',
            offset: 150,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////img5
    blockTween = new TweenMax.to('.article12 #img5text', 1.5, {
        left: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img5text',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    IMG6
    
    
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////img6
    blockTween = new TweenMax.to('.article12 #img6', 1.5, {
        right: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img6',
            offset: 0,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////img6
    blockTween = new TweenMax.to('.article12 #img6', 1.5, {
        right: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img6',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width)
  
  var tween;
  if(width < 451) {
/////////////////img6
    blockTween = new TweenMax.to('.article12 #img6text', 1.5, {
        right: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img6',
            offset: 150,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  } else {
/////////////////img6
    blockTween = new TweenMax.to('.article12 #img6text', 1.5, {
        right: 0,
    });


    containerScene = new ScrollMagic.Scene({
            triggerElement: '.article12 #img6text',
            offset: -200,
//            duration: 300
        })
        .setTween(blockTween)
//        .addIndicators()
        .addTo(controller);
  }
    
    
    
    
    
    
    
    
    
});



//END OF SCROLLMAGIC
















//START OF CATEGORIES FILTERING


$(document).ready(function(){
    // Function to change URL string (allows bookmarking of page)
    function changeURL(title, url) {
        var baseURL = "categories.html?cat=";
        var obj = {Title: title, Url: url};
        history.pushState(obj, obj.Title, obj.Url);
    };
    
    // Get category from URL https://www.codexworld.com/how-to/get-query-string-from-url-javascript/
    var urlParams = new URLSearchParams(location.search);
    
    
    // Variable to store selected category
    var $el = urlParams.get('cat');
    
    
    // Apply category filter on page-load
    $('#parent > div').not('.' + $el).hide();
    
    // Apply class to hexagon current cat
    $("#" + $el).addClass("hexagonstyleSelected");
    
var $btns = $('.btn').click(function() {
   
    $("#all").css("color", "#3d3d3d"); $(".hexagonstyleSelected").removeClass("hexagonstyleSelected");
    $(this).addClass("hexagonstyleSelected");
    
    if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
  } else {
    $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).hide();
  
    // Change URL
    changeURL();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})


//Show all colour change on active
var $btns = $('#all').click(function() {
    
    $(".hexagonstyleSelected").removeClass("hexagonstyleSelected");
    $("#all").css("color", "orange");
    
    
})


});


//END OF CATEGORIES FILTERING















//START OF ARTICLES LIST HOVERING


$(function() {
  $('.box img').hover(function() {
    $(this).closest('.box').find('img').css('filter', 'brightness(100%)').css('transform', 'scale(1.05)');
	  $(this).closest('.box').find('#boxgif').css('display', 'block').css('transform', 'scale(1.18)');
  }, function() {
    // on mouseout, reset the background colour
    $("img").css('filter', '').css('transform', 'scale(1)');
	  $(this).closest('.box').find('#boxgif').css('display', 'none').css('transform', 'scale(1)');
  });
});



$(function() {
  $('.box h3').hover(function() {
    $(this).closest('.box').find('img').css('filter', 'brightness(100%)').css('transform', 'scale(1.05)');
	  $(this).closest('.box').find('#boxgif').css('display', 'block').css('transform', 'scale(1.18)');
  }, function() {
    // on mouseout, reset the background colour
    $("img").css('filter', '').css('transform', 'scale(1)');
	  $(this).closest('.box').find('#boxgif').css('display', 'none').css('transform', 'scale(1)');
  });
});



//END OF ARTICLES LIST HOVERING












//START OF BACK TO TOP SCROLL


$(function() {
    
$('.totop img').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:180}, '300');
	$(this).animate({scrollTop:180}, '300');
});
    
    $('.totop p').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:180}, '300');
});

});


//END OF BACK TO TOP SCROLL













//START OF COMMENTING BOX


$(document).ready(function(){
  $(".editor-header a").click(function(e){
    e.preventDefault();

    var _val = $(this).data("role"),
        _sizeValIn = parseInt($(this).data("size-val") + 1),
        _sizeValRe = parseInt($(this).data("size-val") - 1),
        _size = $(this).data("size");
    if(_size == "in-size"){
      document.execCommand(_val, false, _sizeValIn + "px");
    } else{
      document.execCommand(_val, false, _sizeValRe + "px");
    }
  });
});

$(document).ready(function(){
  var $text = $("#text"),
      $submit = $("input[type='submit']"),
      $listComment = $(".list-comments"),
      $loading = $(".loading"),
      _data,
      $totalCom = $(".total-comment");

  $totalCom.text($(".list-comments > div").length);

  $($submit).click(function(){
    if($text.html() == ""){
      alert("Comment here...");
      $text.focus();
    } else{
      _data = $text.html();
      $.ajax({
        type: "POST",
        url: window.local,
        data: _data,
        cache: false,
        success: function(html){
          $loading.show().fadeOut(300);
          $listComment.append("<div>"+_data+"</div>");
          $text.html("");
          $totalCom.text($(".list-comments > div").length);
        }
      });
      return false;
    }
  });
});



//END OF COMMENTING BOX












// START OF TOP PAGE POSITION WHEN RELOADED

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// END OF TOP PAGE POSITION WHEN RELOADED















//START OF ARTICLE SCROLLING FADE-INS

$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1500);
                    }
        });
    });  
});

//END OF ARTICLE SCROLLING FADE-INS











