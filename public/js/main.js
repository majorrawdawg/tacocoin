document.addEventListener("DOMContentLoaded", function() {
  const startMenu = document.getElementById('start-menu');
  const windows = document.querySelectorAll('.window');
  const desktopIcons = document.querySelectorAll('.desktop-icon');
  let draggedItem = null;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  function toggleStartMenu() {
    const isDisplayed = startMenu.style.display === 'block';
    startMenu.style.display = isDisplayed ? 'none' : 'block';
    if (!isDisplayed) {
      startMenu.style.bottom = '40px'; // Adjust to ensure Start menu does not overlap the Start button
    }
  }

  function toggleWindow(windowId) {
    const window = document.getElementById(windowId);
    const isDisplayed = window.style.display === 'block';
    windows.forEach(win => win.style.display = 'none'); // Close all windows before opening the new one
    window.style.display = isDisplayed ? 'none' : 'block';
    if (!isDisplayed) {
      window.style.position = 'absolute';
      window.style.top = '50px'; // Ensure windows open at a visible position on the screen
    }
  }

  function setupDesktopIcons() {
    desktopIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        const targetWindow = this.getAttribute('data-target');
        toggleWindow(targetWindow);
      });
      icon.setAttribute('draggable', 'true');
      icon.addEventListener('dragstart', handleDragStart, false);
      icon.addEventListener('dragend', function(e) {
        // Log successful drag and drop of an icon
        console.log(`Icon ${this.getAttribute('data-target')} moved`);
        const newX = e.clientX - dragOffsetX;
        const newY = e.clientY - dragOffsetY;
        this.style.position = 'absolute';
        this.style.left = newX + 'px';
        this.style.top = newY + 'px';
      });
    });
  }

  function setupWindowControls() {
    windows.forEach(window => {
      window.setAttribute('draggable', 'true');
      window.addEventListener('dragstart', handleDragStart, false);
      
      const closeButton = window.querySelector('.title-bar-controls button[aria-label="Close"]');
      if(closeButton) {
        closeButton.addEventListener('click', function() {
          window.style.display = 'none';
          // Log window closure action
          console.log(`Window ${window.id} closed`);
        });
      }
    });
  }

  function applyNeonEffect() {
    const elements = document.querySelectorAll('.neon-effect');
    elements.forEach(el => {
      el.addEventListener('mouseenter', () => el.classList.add('breathing'));
      el.addEventListener('mouseleave', () => el.classList.remove('breathing'));
    });
  }

  document.querySelector('.start-button').addEventListener('click', toggleStartMenu);
  setupDesktopIcons();
  setupWindowControls();
  applyNeonEffect();

  function handleDragStart(e) {
    draggedItem = e.target;
    dragOffsetX = e.clientX - draggedItem.getBoundingClientRect().left;
    dragOffsetY = e.clientY - draggedItem.getBoundingClientRect().top;
    e.dataTransfer.effectAllowed = 'move';
    // Log the beginning of a drag action
    console.log(`Dragging of element ${draggedItem.id || 'unknown'} started`);
  }

  document.body.addEventListener('dragover', function(e) {
    e.preventDefault(); // Necessary for the drop event to fire
  }, false);

  document.body.addEventListener('drop', function(e) {
    e.preventDefault(); // Prevent default action (open as link for some elements)
    if (draggedItem) {
      const newX = e.clientX - dragOffsetX;
      const newY = e.clientY - dragOffsetY;
      draggedItem.style.position = 'absolute';
      draggedItem.style.left = newX + 'px';
      draggedItem.style.top = newY + 'px';
      draggedItem = null;
      // Log successful drop of an element
      console.log("Element dropped successfully");
    }
    e.preventDefault();
  }, false);
});

// Neon breathing effect
const css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = `
  @keyframes breathe {
    0% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #008080, 0 0 40px #008080; }
    50% { text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6; }
    100% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #008080, 0 0 40px #008080; }
  }
  .breathing {
    animation: breathe 3s ease-in-out infinite;
  }
`;
document.getElementsByTagName('head')[0].appendChild(css);

console.log("Main JS script loaded and executed successfully.");