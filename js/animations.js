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
  const scrollToPosition = viewportHeight * 1.1;

  // Scroll to the position with smooth animation
  setTimeout(() => {
    window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
  }, 100);
  
  // Add the 'clicked' class to the button
  document.querySelector('.button').classList.add('clicked');

  // Remove the 'clicked' class from the button after 300 milliseconds
  setTimeout(() => {
    document.querySelector('.button').classList.remove('clicked');
  }, 300);
}