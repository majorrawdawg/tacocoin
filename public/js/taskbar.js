document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.querySelector('.start-button');
  const startMenu = document.getElementById('start-menu');
  const taskbar = document.querySelector('.taskbar');
  const timeDisplay = document.createElement('div');

  // Ensure taskbarAppsContainer is correctly targeted or created if not existing
  let taskbarAppsContainer = document.querySelector('.taskbar-apps');
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
  taskbar.appendChild(timeDisplay);

  function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
  }
  setInterval(updateTime, 1000);
  updateTime(); // Initialize time immediately

  // Adjust taskbar position and visibility
  taskbar.style.position = 'fixed';
  taskbar.style.bottom = '0';
  taskbar.style.width = '100%';
  taskbar.style.zIndex = '1000'; // Make sure taskbar is always on top

  // Close Start Menu by clicking outside
  window.addEventListener('click', (event) => {
    if (!startMenu.contains(event.target) && !startButton.contains(event.target)) {
      startMenu.style.display = 'none';
      console.log('Closed Start Menu by clicking outside');
    }
  });

  // Dynamic application windows handling
  const windows = document.querySelectorAll('.window');
  windows.forEach(window => {
    const appId = window.id;
    const appName = window.querySelector('.title-bar-text').textContent;
    const appButton = document.createElement('button');
    appButton.className = 'taskbar-app';
    appButton.textContent = appName;
    appButton.onclick = function() {
      const targetWindow = document.getElementById(appId);
      const isDisplayed = targetWindow.style.display === 'block';
      targetWindow.style.display = isDisplayed ? 'none' : 'block';
      targetWindow.style.zIndex = '100'; // Ensuring the window comes to the front
      console.log(`Toggled display of window: ${appId}`);
    };

    taskbarAppsContainer.appendChild(appButton);

    window.addEventListener('click', function() {
      // Bring the window to the front by adjusting z-index
      windows.forEach(win => win.style.zIndex = '10'); // Lower the z-index for other windows
      window.style.zIndex = '100'; // Increase z-index to bring the current window to front
      console.log(`Brought window: ${appId} to front`);
    });

    window.querySelector('.title-bar-controls button[aria-label="Close"]').addEventListener('click', function() {
      // Remove the corresponding application button from the taskbar when the window is closed
      taskbarAppsContainer.removeChild(appButton);
      console.log(`Removed application button for window: ${appId}`);
    });
  });
});