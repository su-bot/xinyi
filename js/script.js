function navScrollTo(e) {
  var href = $(e).attr('href');
  href = href.replace('/.', '');
  if (href.indexOf("#") >= 0 ) {
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500);
  }
};
