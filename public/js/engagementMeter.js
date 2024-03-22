const engagementMeter = document.getElementById('engagementMeterVisualization');
const spicinessLevel = document.getElementById('spicinessLevel');

// INPUT_REQUIRED {Replace 'ws://localhost:8080' with your actual WebSocket server URL if different}
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = function() {
  console.log('WebSocket Client Connected');
};

ws.onmessage = function(e) {
  try {
    const data = JSON.parse(e.data);
    if(data.type === 'UPDATE_ENGAGEMENT_SCORE') {
      spicinessLevel.textContent = data.engagementScore;
      // Update the engagement meter visualization based on the new score
      console.log(`Received updated engagement score: ${data.engagementScore}`);
    }
  } catch (error) {
    console.error('Error processing message from WebSocket server:', error.message);
    console.error(error.stack);
  }
};

ws.onclose = function() {
  console.log('WebSocket Client Disconnected');
};

ws.onerror = function(error) {
  console.error('WebSocket encountered error:', error.message);
  console.error(error.stack);
};

function fetchInitialSpicinessLevel() {
  fetch('/api/user/spiciness-level') // INPUT_REQUIRED {Adjust this URL to match your backend API for fetching the initial spiciness level}
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch initial spiciness level. Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      spicinessLevel.textContent = data.level;
      console.log(`Initial spiciness level fetched: ${data.level}`);
    })
    .catch(error => {
      console.error('Error fetching initial spiciness level:', error.message);
      console.error(error.stack);
      spicinessLevel.textContent = 'Error loading spiciness level';
    });
}

fetchInitialSpicinessLevel();