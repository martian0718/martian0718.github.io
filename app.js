


  var $document = $(document);
  var $aboutMe = $(".aboutMe");



  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight()-100;

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(333,1);}
        } /*else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }*/
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

  $(window).on("load", function(){
    if($(window).width() < 500 ){
        $("h4.introAbout").removeClass("w-50").addClass("w-75");

    }


  });

  //$(".bootstrapimg").css("width","70px");



 $document.ready(function(){

    $("#brand").click(function(){
        $("html, body").animate({
            scrollTop: $("#scroll-section1").offset().top
        },1000);
    });


    $("#aboutLink").click(function(){
        $("html, body").animate({
            scrollTop: $("#scroll-section2").offset().top-40
        },1000);
    });

    $("#resumeLink").click(function(){
        $("html, body").animate({
            scrollTop: $("#scroll-section3").offset().top-70
        },2000);
    });

    $("#projectsLink").click(function(){
        $("html, body").animate({
            scrollTop: $("#scroll-section4").offset().top+20
        },1000);
    });

    $(".sideIcons").hover(function(){
        $(this).append("<h6> </h6>");
    }, function(){
        $(this).find("h6").last().remove();
    });



 });

 const instance = new TypeIt('#simple', {
    strings: 'More projects to come soon!',
    speed: 50,
    waitUntilVisible: true
  }).go();

  const instance1 = new TypeIt('#name', {
    strings: 'MARTIN WU',
    speed: 200,
    waitUntilVisible: true
  }).go();

  const instance2 = new TypeIt('#hobbiecoming', {
    strings: 'Hobbies page coming soon...',
    speed: 75,
    waitUntilVisible: true
  }).go();





  $(".fa-github.sideIcons").hover(function(){
      $(".one").css("opacity",1);

  }, function(){
      $(".one").css("opacity",0);
  });


  $(".fa-linkedin-in.sideIcons").hover(function(){
    $(".two").css("opacity",1);

}, function(){
    $(".two").css("opacity",0);
});


$(".fa-instagram.sideIcons").hover(function(){
    $(".three").css("opacity",1);

}, function(){
    $(".three").css("opacity",0);
});


$(".fa-twitter.sideIcons").hover(function(){
    $(".four").css("opacity",1);

}, function(){
    $(".four").css("opacity",0);
});


$(".fa-youtube.sideIcons").hover(function(){
    $(".five").css("opacity",1);

}, function(){
    $(".five").css("opacity",0);
});
