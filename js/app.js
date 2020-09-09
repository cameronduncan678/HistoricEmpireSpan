const quoteArray = [
  {
    quote: '“All empires become arrogant. It is their nature.”',
    name: '― Edward Rutherfurd',
  },
  {
    quote:
      '“Up the hill, sheep bleat, oblivious to human empires rising and falling.”',
    name: '― David Mitchell',
  },
  {
    quote: '“Blood was the mortar that cemented the kingdom”',
    name: '― Jocelyn Murray',
  },
  { quote: '“The emperor is just a man, after all.”', name: '― Ken Liu' },
  {
    quote: '“Great empires are not maintained by timidity.”',
    name: '― Tacitus',
  },
];

function randomIndex() {
  return Math.floor(Math.random() * 5);
}

$(document).ready(function () {
  //Navbar code
  var homeVisible = $('#home').is(':visible');
  var aboutVisible = $('#about').is(':visible');
  var contactVisible = $('#contact').is(':visible');

  $('#home-nav').click(function () {
    if (aboutVisible) {
      $('#about-nav').removeClass('item-active').addClass('item-inactive');
      $('#home-nav').removeClass('item-inactive').addClass('item-active');
      $('#about').slideUp();
      $('#home').slideDown();
    }
    if (contactVisible) {
      $('#contact-nav').removeClass('item-active').addClass('item-inactive');
      $('#home-nav').removeClass('item-inactive').addClass('item-active');
      $('#contact').slideUp();
      $('#home').slideDown();
    }

    aboutVisible = false;
    contactVisible = false;
    homeVisible = true;
  });

  $('#about-nav').click(function () {
    if (homeVisible) {
      $('#home-nav').removeClass('item-active').addClass('item-inactive');
      $('#about-nav').removeClass('item-inactive').addClass('item-active');
      $('#home').slideUp();
      $('#about').slideDown();
    }
    if (contactVisible) {
      $('#contact-nav').removeClass('item-active').addClass('item-inactive');
      $('#about-nav').removeClass('item-inactive').addClass('item-active');
      $('#contact').slideUp();
      $('#about').slideDown();
    }

    homeVisible = false;
    contactVisible = false;
    aboutVisible = true;
  });

  $('#contact-nav').click(function () {
    if (homeVisible) {
      $('#home-nav').removeClass('item-active').addClass('item-inactive');
      $('#contact-nav').removeClass('item-inactive').addClass('item-active');
      $('#home').slideUp();
      $('#contact').slideDown();
    }
    if (aboutVisible) {
      $('#about-nav').removeClass('item-active').addClass('item-inactive');
      $('#contact-nav').removeClass('item-inactive').addClass('item-active');
      $('#about').slideUp();
      $('#contact').slideDown();
    }

    homeVisible = false;
    aboutVisible = false;
    contactVisible = true;
  });

  const quoteIndex = randomIndex();

  $('#quote-text-quote').html(quoteArray[quoteIndex].quote);
  $('#quote-text-name').html(quoteArray[quoteIndex].name);
});
