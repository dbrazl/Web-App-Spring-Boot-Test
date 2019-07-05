$(document).ready(function(){

  $(".close-img-button").hover(function(){
    $(".close-img-button").attr("src", "../../img/times-red.png");
  },
  function(){
    $(".close-img-button").attr("src", "../../img/times.png");
  });

  $(".modal-tech").hover(function(){
    $(".close-img-button").attr("src", "../../img/times.png");
  },
  function(){
    $(".close-img-button").attr("src", "../../img/times-red.png");
  });

  $(".modal-register").hover(function(){
    $(".close-img-button").attr("src", "../../img/times.png");
  },
  function(){
    $(".close-img-button").attr("src", "../../img/times-red.png");
  });

  $("#tech-button").click(function(){
    $(".modal-container").addClass("open-modal");
    $(".modal-container").attr("id", "modal-container-tech");
    $(".modal-tech").addClass("open-modal");
    $(".modal-tech").animate({
      top: '0px',
      opacity: 1
    }, 350);
  });

  $(".button-menu-mobile").click(function(){
    $(".modal-container").addClass("open-modal");
    $(".modal-container").attr("id", "modal-container-menu-mobile");
    $(".modal-menu-mobile").addClass("open-modal");
    /*Não consegui colocar a animação toggle! Está dando erro! Tentar outras formas*/
  });

  $(".register-button").click(function(){
    $(".modal-container").addClass("open-modal");
    $(".modal-container").attr("id", "modal-container-register");
    $(".modal-menu-mobile").removeClass("open-modal");
    $(".modal-register").addClass("open-modal");
    $(".modal-register").animate({
      top: '0px',
      opacity: 1
    }, 350);
  });

  $(".modal-container").click(function(event){

    if(event.target.id == 'modal-container-tech' ||
        event.target.id == 'close-button') {

      $(".modal-tech").animate({
        top: '60px',
        opacity: 0
      }, 350, function(){
        $(".modal-container").removeClass("open-modal");
        $(this).removeClass("open-modal");
        $(this).css({top: '-120px'});
        $(".modal-container").attr("id", "");
      });
    }

    if(event.target.id == 'modal-container-register' ||
      event.target.id == 'close-button') {

      $(".modal-register").animate({
        top: '60px',
        opacity: 0
      }, 350, function(){
        $(".modal-container").removeClass("open-modal");
        $(this).removeClass("open-modal");
        $(this).css({top: '-120px'});
        $(".modal-container").attr("id", "");
      });
    }


    if(event.target.id == 'modal-container-menu-mobile' ||
      event.target.id == 'return-menu-mobile'){

      /*Não consegui colocar a animação toggle! Está dando erro! Tentar outras formas*/
      $(".modal-container").removeClass("open-modal");
      $(".modal-menu-mobile").removeClass("open-modal");
      $("modal-container").attr("id", "");

    }

  });

  $("#left-hand-checkbox").change(function(){
    if( $(this).is(":checked") ){

      $(".modal-menu-mobile").css({
        left: '0',
        right: ''
      });
      $(".return-menu-mobile").css({
        left: '20px',
        right: ''
      });
      $(".nav-bar").css({
        left: '20px',
        right: ''
      });
      $(".button-img-menu").attr("src", "../../img/modern-left.png");

    }else{

      $(".modal-menu-mobile").css({
        right: '0',
        left: ''
      });
      $(".return-menu-mobile").css({
        right: '20px',
        left: ''
      });
      $(".nav-bar").css({
        right: '20px',
        left: ''
      });
      $(".button-img-menu").attr("src", "../../img/modern-menu.png");

    }
  });

  $("#return-to-main-page").click(function(){
    window.location.assign("index.html");
  });

  $("#search-button").click(function(){
    window.location.assign("search.html");
  });

});