document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.querySelector('.start-button');
  const startMenu = document.getElementById('start-menu');
  const taskbar = document.querySelector('.taskbar'); // Reference to the taskbar for adjusting the start menu position
  
  // Toggle Start Menu Display
  startButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the window event listener from immediately hiding the start menu
    const isDisplayed = startMenu.style.display === 'block';
    startMenu.style.display = isDisplayed ? 'none' : 'block';
    console.log('Toggled Start Menu display');
  });

  // Close Start Menu when clicking outside
  window.addEventListener('click', function(event) {
    if (!startMenu.contains(event.target) && !startButton.contains(event.target) && startMenu.style.display === 'block') {
      startMenu.style.display = 'none';
      console.log('Closed Start Menu by clicking outside');
    }
  });

  // Adjusts start menu's position to ensure it doesn't overlap the start button and it pops up above the taskbar correctly
  function adjustStartMenuPosition() {
    const taskbarHeight = taskbar.offsetHeight;
    startMenu.style.bottom = `${taskbarHeight + startButton.offsetHeight}px`;
    startMenu.style.left = '0px'; // Ensures the start menu aligns with the start button on the left
    console.log('Adjusted Start Menu position based on taskbar height and aligned to the start button');
  }

  adjustStartMenuPosition();

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
