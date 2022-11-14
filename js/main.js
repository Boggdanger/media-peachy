  // path mobile
  $('.mobile-path-inner').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
  });

  // rewiews mobile
  $('.rewiev-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1296,
        settings: {
          infinite: true,
          centerMode: true,
        }
      },
    ]
  });

// faq
var acc = document.getElementsByClassName("accordion-item__btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


  //  custom cursor
  var cursorinner = document.querySelector('.cursor2');
  var ab = document.querySelectorAll('a, button');

  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
  });

  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
  });

  document.addEventListener('mousedown', function(){
    cursorinner.classList.add('cursorinnerhover')
  });

  document.addEventListener('mouseup', function(){
    cursorinner.classList.remove('cursorinnerhover')
  });



// плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


 //modal contact
 $('.btn_contact').on('click', function(){
  $('.popup_contact').toggleClass('popup_active');
  $('body').addClass('no-scroll');
});

$('.popup-form__close').on('click', function(){
  $('.popup_contact').removeClass('popup_active');
  $('body').removeClass('no-scroll');
});

$('.popup__bg').on('click', function(){
  $('.popup_contact').removeClass('popup_active');
  $('body').removeClass('no-scroll');
});

//path 1
$('.btn-puth_one').on('click', function(){
  $('.popup_prod-one').toggleClass('popup_active');
  $('body').addClass('no-scroll');
});

$('.popup-form__close').on('click', function(){
  $('.popup_prod-one').removeClass('popup_active');
  $('body').removeClass('no-scroll');
});

$('.popup__bg').on('click', function(){
  $('.popup_prod-one').removeClass('popup_active');
  $('body').removeClass('no-scroll');
});

//path 2
$('.btn-puth_two').on('click', function(){
  $('.popup_prod-two').toggleClass('popup_active');
  $('body').addClass('no-scroll');
});

$('.popup-form__close').on('click', function(){
  $('.popup_prod-two').removeClass('popup_active');
  $('body').removeClass('no-scroll');
});

$('.popup__bg').on('click', function(){
  $('.popup_prod-two').removeClass('popup_active');
  $('body').removeClass('no-scroll');
});

//path 3
$('.btn-puth_three').on('click', function(){
  $('.popup_prod-three').toggleClass('popup_active');
  $('body').addClass('no-scroll');
});

$('.popup-form__close').on('click', function(){
  $('.popup_prod-three').removeClass('popup_active');
  $('body').removeClass('no-scroll');
});

$('.popup__bg').on('click', function(){
  $('.popup_prod-three').removeClass('popup_active');
  $('body').removeClass('no-scroll');
});