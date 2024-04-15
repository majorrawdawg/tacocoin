document.addEventListener("DOMContentLoaded", function() {
  const mainContent = document.querySelector('.main-content');
  const draggableElements = mainContent.querySelectorAll('.desktop-icon');
  let draggedElement = null;
  let dragOffsetX = 0;
  let dragOffsetY = 0;
  let isDragging = false;  // State to determine if dragging occurred

  draggableElements.forEach(element => {
    element.setAttribute('draggable', 'true');

    element.addEventListener('mousedown', function(event) {
      // Reset dragging state on mouse down
      isDragging = false;
    });

    element.addEventListener('dragstart', function(event) {
      draggedElement = event.target.closest('.desktop-icon');
      dragOffsetX = event.clientX - draggedElement.getBoundingClientRect().left;
      dragOffsetY = event.clientY - draggedElement.getBoundingClientRect().top;
      event.dataTransfer.effectAllowed = 'move';
      isDragging = true;  // Set dragging state as true on drag start
      console.log("Drag start: ", draggedElement);
    });

    element.addEventListener('click', function(event) {
      if (!isDragging) {  // Check if there was significant mouse movement
        const targetWindow = this.getAttribute('data-target');
        console.log(`Opening window for: ${targetWindow}`);
        toggleWindow(targetWindow);
      }
    });

    element.addEventListener('dragend', function(event) {
      // Apply position adjustments only if dragging occurred
      if (isDragging) {
        const newX = event.clientX - dragOffsetX;
        const newY = event.clientY - dragOffsetY;
        this.style.position = 'absolute';
        this.style.left = `${newX}px`;
        this.style.top = `${newY}px`;
        console.log(`Icon moved to: ${newX}, ${newY}`);
      }
      isDragging = false;  // Reset dragging state after dropping
    });
  });

  function toggleWindow(targetId) {
    const target = document.getElementById(targetId);
    target.style.display = (target.style.display === 'none' || !target.style.display) ? 'block' : 'none';
  }

  // Apply draggable setup to both icons and windows
  setupDraggableItems([...icons, ...windows]);

  // Neon effect application
  const neonElements = document.querySelectorAll('.neon-effect');
  neonElements.forEach(element => {
    element.addEventListener('mouseenter', () => element.classList.add('breathing'));
    element.addEventListener('mouseleave', () => element.classList.remove('breathing'));
  });

  console.log("Drag and Drop functionalities integrated and loaded.");
});

// Neon breathing effect styling
const css = document.createElement('style');
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
document.head.appendChild(css);


console.log("Main JS script loaded and executed successfully.");