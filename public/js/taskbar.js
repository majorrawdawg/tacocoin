document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.querySelector('.start-button');
  const startMenu = document.getElementById('start-menu');
  const taskbar = document.querySelector('.taskbar');
  const timeDisplay = document.createElement('div');
  let taskbarAppsContainer = document.querySelector('.taskbar-apps');
  const windows = document.querySelectorAll('.window, .window-gameshow');
  let minimizedWindows = {};

  if (!taskbarAppsContainer) {
    taskbarAppsContainer = document.createElement('div');
    taskbarAppsContainer.className = 'taskbar-apps';
    taskbar.insertBefore(taskbarAppsContainer, taskbar.firstChild);
  }

  // Start button functionality
  startButton.addEventListener('click', () => {
    const isDisplayed = startMenu.style.display === 'block';
    startMenu.style.display = isDisplayed ? 'none' : 'block';
    console.log('Toggled Start Menu display');
  });

  // Time display on the taskbar
  timeDisplay.className = 'time-display';
  timeDisplay.style.float = 'right';
  taskbar.appendChild(timeDisplay);

  function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
  }
  setInterval(updateTime, 1000);
  updateTime(); // Initialize time immediately

  // Close Start Menu by clicking outside
  window.addEventListener('click', (event) => {
    if (!startMenu.contains(event.target) && !startButton.contains(event.target)) {
      startMenu.style.display = 'none';
      console.log('Closed Start Menu by clicking outside');
    }
  });

  function createTaskbarButton(window, appName) {
    const appId = window.id;
    const appButton = document.createElement('button');
    appButton.className = 'taskbar-app';
    appButton.textContent = appName;
    appButton.onclick = function() {
      const targetWindow = document.getElementById(appId);
      const isDisplayed = targetWindow.style.display === 'block';
      targetWindow.style.display = isDisplayed ? 'none' : 'block';
      if (!isDisplayed) {
        targetWindow.style.zIndex = '100'; // Bring to front
      }
      console.log(`Toggled display of window: ${appId}`);
    };

    taskbarAppsContainer.appendChild(appButton);
    minimizedWindows[appId] = appButton;
  }

  function setupWindowControls(window) {
    const appId = window.id;
    const appName = window.querySelector('.title-bar-text') ? window.querySelector('.title-bar-text').textContent : 'App';

    createTaskbarButton(window, appName);

    window.querySelector('.title-bar-controls button[aria-label="Minimize"]').addEventListener('click', function() {
      window.style.display = 'none';
      console.log(`Minimized window: ${appId}`);
    });

    window.querySelector('.title-bar-controls button[aria-label="Close"]').addEventListener('click', function() {
      window.style.display = 'none';
      const appButton = minimizedWindows[appId];
      if (appButton) {
        taskbarAppsContainer.removeChild(appButton);
        delete minimizedWindows[appId];
      }
      console.log(`Closed window: ${appId}`);
    });

    window.querySelector('.title-bar-controls button[aria-label="Maximize"]').addEventListener('click', function() {
      if (!window.classList.contains('maximized')) {
        window.style.width = '100vw';
        window.style.height = '100vh';
        window.style.top = '0';
        window.style.left = '0';
        window.style.transform = 'none';
        window.classList.add('maximized');
      } else {
        window.style.width = '';
        window.style.height = '';
        window.style.top = '';
        window.style.left = '';
        window.style.transform = '';
        window.classList.remove('maximized');
      }
      console.log(`Maximized/Restored window: ${appId}`);
    });
  }

  // Iterate through each window and set up controls and taskbar buttons
  windows.forEach(window => {
    const appName = window.querySelector('.title-bar-text') ? window.querySelector('.title-bar-text').textContent : 'App';
    setupWindowControls(window);

    window.addEventListener('click', function() {
      windows.forEach(win => win.style.zIndex = '10'); // Lower the z-index for other windows
      window.style.zIndex = '100'; // Increase z-index to bring the current window to front
      console.log(`Brought window: ${window.id} to front`);
    });
  });
});
