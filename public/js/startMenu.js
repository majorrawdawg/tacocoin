document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.querySelector('.start-button');
  const startMenu = document.getElementById('start-menu');
  const taskbar = document.querySelector('.taskbar'); // Reference to the taskbar for adjusting the start menu position
  const footer = document.querySelector('footer'); // Reference to the footer for adjusting the start menu position

  // Toggle Start Menu Display
  startButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the window event listener from immediately hiding the start menu
    const isDisplayed = startMenu.style.display === 'block';
    startMenu.style.display = isDisplayed ? 'none' : 'block';
    if (!isDisplayed) {
      adjustStartMenuPosition(); // Adjust position when opening
      startButton.classList.add('depressed');
    } else {
      startButton.classList.remove('depressed');
    }
    console.log('Toggled Start Menu display');
  });

  // Close Start Menu when clicking outside
  window.addEventListener('click', function(event) {
    if (!startMenu.contains(event.target) && !startButton.contains(event.target) && startMenu.style.display === 'block') {
      startMenu.style.display = 'none';
      startButton.classList.remove('depressed');
      console.log('Closed Start Menu by clicking outside');
    }
  });

  // Adjusts start menu's position to ensure it doesn't overlap the start button and it pops up above the taskbar and footer correctly
  function adjustStartMenuPosition() {
    const taskbarHeight = taskbar.offsetHeight;
    const footerHeight = footer.offsetHeight;
    const startButtonRect = startButton.getBoundingClientRect();
    startMenu.style.bottom = `${taskbarHeight + footerHeight}px`; // Position above the taskbar and footer
    startMenu.style.left = `${startButtonRect.left}px`; // Align with the start button on the left
    console.log(`Adjusted Start Menu position: bottom ${taskbarHeight + footerHeight}px, left ${startButtonRect.left}px`);
  }

  // Initial adjustment on page load
  adjustStartMenuPosition();

  // Adjust the position on window resize
  window.addEventListener('resize', adjustStartMenuPosition);

  // Implement neon glow and tracer effects for Start Menu
  function applyTracerEffect() {
    const tracerEffect = document.createElement('style');
    tracerEffect.innerHTML = `
      @keyframes tracerEffectAnimation {
        0% { box-shadow: 0 0 15px #00ffff; }
        50% { box-shadow: 0 0 30px #ff00ff; }
        100% { box-shadow: 0 0 15px #00ffff; }
      }
      .start-menu {
        animation: tracerEffectAnimation 2s linear infinite;
      }
    `;
    document.head.appendChild(tracerEffect);
    console.log('Applied tracer effect to the Start Menu');
  }

  applyTracerEffect();

  console.log("startMenu.js script updated and executed successfully.");
});
