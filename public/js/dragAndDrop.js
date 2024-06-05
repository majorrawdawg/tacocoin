document.addEventListener("DOMContentLoaded", function() {
  const draggableElements = document.querySelectorAll('.desktop-icon, .window');
  let draggedElement = null;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  draggableElements.forEach(element => {
    element.setAttribute('draggable', 'true');
    element.addEventListener('dragstart', function(event) {
      draggedElement = event.target;
      dragOffsetX = event.clientX - draggedElement.getBoundingClientRect().left;
      dragOffsetY = event.clientY - draggedElement.getBoundingClientRect().top;
      event.dataTransfer.effectAllowed = 'move';
      console.log("Drag start: ", draggedElement.id || draggedElement.className);
    });
  });

  document.body.addEventListener('dragover', function(event) {
    event.preventDefault(); // Necessary for the drop event to fire
  });

  document.body.addEventListener('drop', function(event) {
    if (draggedElement) {
      const newX = event.clientX - dragOffsetX;
      const newY = event.clientY - dragOffsetY;
      draggedElement.style.position = 'absolute';
      draggedElement.style.left = newX + 'px';
      draggedElement.style.top = newY + 'px';
      draggedElement = null;
      console.log("Element dropped");
    }
    event.preventDefault();
  }, false);

  // Neon and tracer effects
  const startMenu = document.getElementById('start-menu');
  startMenu.style.animation = "tracer 2s linear infinite";

  // Neon effect for special elements
  const neonElements = document.querySelectorAll('.neon-effect');
  neonElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('breathing');
      console.log("Neon effect activated");
    });
    element.addEventListener('mouseleave', () => {
      element.classList.remove('breathing');
      console.log("Neon effect deactivated");
    });
  });

  // Logging for debugging
  console.log("Drag and Drop script loaded successfully.");
});