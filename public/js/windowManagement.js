document.addEventListener("DOMContentLoaded", function() {
  let originalWindowState = {};
  let minimizedWindows = {};

  function closeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'none';
    if (minimizedWindows[windowId]) {
      taskbarAppsContainer.removeChild(minimizedWindows[windowId]);
      delete minimizedWindows[windowId];
    }
    originalWindowState[windowId] = {}; // Clear memory of the window state when closed
  }

  function minimizeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    if (!minimizedWindows[windowId]) {
      const appButton = createTaskbarButton(windowElement, windowId);
      taskbarAppsContainer.appendChild(appButton);
      minimizedWindows[windowId] = appButton;
    }
    windowElement.style.display = 'none';
  }

  function maximizeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    if (!windowElement.classList.contains('maximized')) {
      if (!originalWindowState[windowId]) {
        originalWindowState[windowId] = {
          width: windowElement.style.width,
          height: windowElement.style.height,
          top: windowElement.style.top,
          left: windowElement.style.left,
          transform: windowElement.style.transform,
          display: windowElement.querySelector('.window-body').style.display
        };
      }
      windowElement.style.width = '100vw';
      windowElement.style.height = '100vh';
      windowElement.style.top = '0';
      windowElement.style.left = '0';
      windowElement.style.transform = 'none';
      windowElement.classList.add('maximized');
    } else {
      windowElement.style.width = originalWindowState[windowId].width;
      windowElement.style.height = originalWindowState[windowId].height;
      windowElement.style.top = originalWindowState[windowId].top;
      windowElement.style.left = originalWindowState[windowId].left;
      windowElement.style.transform = originalWindowState[windowId].transform;
      windowElement.querySelector('.window-body').style.display = originalWindowState[windowId].display;
      windowElement.classList.remove('maximized');
    }
  }

  function createTaskbarButton(windowElement, windowId) {
    const appName = windowElement.querySelector('.title-bar-text').textContent || 'App';
    const appButton = document.createElement('button');
    appButton.className = 'taskbar-app';
    appButton.textContent = appName;
    appButton.onclick = function() {
      const targetWindow = document.getElementById(windowId);
      const isDisplayed = targetWindow.style.display === 'block';
      targetWindow.style.display = isDisplayed ? 'none' : 'block';
      if (!isDisplayed) {
        targetWindow.style.zIndex = '100'; // Bring to front
      }
    };
    return appButton;
  }

  window.closeWindow = closeWindow;
  window.minimizeWindow = minimizeWindow;
  window.maximizeWindow = maximizeWindow;
});
