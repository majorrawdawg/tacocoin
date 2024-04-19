// shellBreaker.js
document.addEventListener("DOMContentLoaded", function() {
    const shellBreakerButton = document.getElementById('shell-breaker-window-toggle');
  
    if(shellBreakerButton) {
      shellBreakerButton.addEventListener('click', function() {
        const window = document.getElementById('shell-breaker-window');
        if (window.style.display === 'none' || !window.style.display) {
          window.style.display = 'block';
        } else {
          window.style.display = 'none';
        }
      });
    }
  });
  