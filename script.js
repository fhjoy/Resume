$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css('scrollBehavior', 'auto');
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css('scrollBehavior', 'smooth');
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // typing text animation script
  var typed = new Typed('.typing', {
    strings: ['Developer', 'Tester'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // var typed = new Typed(".typing-2", {
  //   strings: ["Student", "Developer", "Designer"],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true,
  // });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// Portfolio new js
const filter_btns = document.querySelectorAll('.filter-btn');
filter_btns.forEach(btn =>
  btn.addEventListener('click', () => {
    filter_btns.forEach(button => button.classList.remove('active'));
    btn.classList.add('active');

    let filterValue = btn.dataset.filter;

    $('.grid').isotope({ filter: filterValue });
  })
);
$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  transitionDuration: '0.6s',
});

// footer new Js
const footer_input = document.querySelector('.footer-input');
footer_input.addEventListener('focus', () => {
  footer_input.classList.add('focus');
});

footer_input.addEventListener('blur', () => {
  if (footer_input.value != '') return;
  footer_input.classList.remove('focus');
});
