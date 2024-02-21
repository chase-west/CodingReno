window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.animate');
  var windowHeight = window.innerHeight;

  elements.forEach(function(element) {
    var position = element.getBoundingClientRect().top;

    if (position < windowHeight) {
      element.classList.add('slideInFromLeft');
    }
  });
});