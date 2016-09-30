function navScrollTo(href) {
  var href = href.replace('.', '').replace('/', '');
  if (href.indexOf("#") >= 0 ) {
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500);
  }
};
