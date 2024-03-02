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
function scrollToMiddleBottom() {
  // Get the height of the viewport
  const viewportHeight = window.innerHeight;

  // Calculate the position to scroll to (middle of the bottom of the screen)
  const scrollToPosition = viewportHeight * 1;

  // Scroll to the position with smooth animation
  $('html, body').animate({
    scrollTop: scrollToPosition
  }, 150); // 800 milliseconds for smooth scrolling

  // Add the 'clicked' class to the button
  $('#scroll-button').addClass('clicked');

  // Remove the 'clicked' class from the button after 300 milliseconds
  setTimeout(() => {
    $('#scroll-button').removeClass('clicked');
  }, 500);
}