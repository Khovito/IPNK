(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.owl-our-team').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:0,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  },
			  1600:{
				  items:3
			  }
		  }
	})
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }



	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }


})(window.jQuery);


//faz com que a imagem que esta dentro do circulo ao lado do cabecalho nao apareca ao rolar a barra de rolagem 
/*window.addEventListener("scroll", function () {
  const card = document.querySelector(".card");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    card.style.opacity = "0"
  }
  else{
    card.style.opacity = "1";
  }
})*/

const textos = [
  {
    pequeno: "Seja bem-vindo ao Instituto Politécnico Do Ngola Kiluanje!",
    grande: "Prometemos-te a melhor <em class='enfaseHeader'>solução</em> para o seu <span class='enfaseHeader'>futuro.</span>",
    imagem: "assets/images/banner-img.png"
  },
  {
    pequeno: "Formação de qualidade e inovadora.",
    grande: "Torna-te um profissional de <em class='enfaseHeader'>excelência</em> com o nosso <span class='enfaseHeader'>programa </span>de ensino.",
    imagem: "assets/images/services-left-image.png"
  }
];

let indiceActual = 0;
const botoes = document.querySelectorAll('.botao-circular');

function atualizarConteudo() {
  document.getElementById("titulo-pequeno").innerText = textos[indiceActual].pequeno;
  document.getElementById("titulo-grande").innerHTML = textos[indiceActual].grande;
  document.getElementById("imagem-banner").src = textos[indiceActual].imagem;
}

function trocarConteudoManual(direcao) {
  indice = (indiceActual + direcao + textos.length) % textos.length;
  atualizarConteudo();
}

function alternarBotoes(botao, indiceManual = null) {
	    // Se veio de clique manual, vai actualizar o índice
	    if (indiceManual !== null) {
	      indiceActual = indiceManual;
	    }

	    // Remove 'activo' de todos e adiciona no botão clicado ou indicado
	    botoes.forEach(b => b.classList.remove('activo'));
	    botoes[indiceActual].classList.add('activo');

	    // Aqui você pode chamar trocarConteudoManual, se quiser:
	    trocarConteudoManual(indiceActual === 0 ? -1 : 1);
	  }

	  // Alternância automática a cada 8 segundos
	  setInterval(() => {
	    indiceActual = (indiceActual + 1) % botoes.length;
	    alternarBotoes(botoes[indiceActual]);
	  }, 8000);

// Troca automática a cada 5 segundos
setInterval(() => {
  trocarConteudoManual(1);
}, 8000);

