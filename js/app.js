
  $('.carrusel').slick({
	arrows: true,
  	dots: true,
  	autoplay:true,
  	infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 3
  });


  $('.banner').slick({
	arrows: true,
  	dots: false,
  	autoplay:true,
  	
  });

header__burger.addEventListener("click", () => {
    hnav.classList.toggle('header__menu--visible');
});