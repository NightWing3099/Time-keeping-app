// Time tracking dashboard functionality

// Labels for the previous period based on timeframe
const previousLabels = {
  daily: 'Yesterday',
  weekly: 'Last Week',
  monthly: 'Last Month'
};

// Format hours with correct singular/plural form
function formatHours(hours) {
  return `${hours}hr${hours === 1 ? '' : 's'}`;
}

// Update the dashboard with data for the selected timeframe
function updateDashboard(timeframe, data) {
  // Update timeframe button states
  document.querySelectorAll('.timeframe-btn').forEach(button => {
    const isActive = button.dataset.timeframe === timeframe;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive);
  });

  // Update each activity card
  data.forEach(activity => {
    const card = document.querySelector(`.activity-card[data-activity="${activity.title}"]`);
    if (!card) return;

    const current = activity.timeframes[timeframe].current;
    const previous = activity.timeframes[timeframe].previous;

    const currentElement = card.querySelector('.activity-current');
    const previousElement = card.querySelector('.activity-previous');

    currentElement.textContent = formatHours(current);
    previousElement.textContent = `${previousLabels[timeframe]} - ${formatHours(previous)}`;
  });
}

// Initialize the dashboard
async function initDashboard() {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Set up timeframe button click handlers
    document.querySelectorAll('.timeframe-btn').forEach(button => {
      button.addEventListener('click', () => {
        const timeframe = button.dataset.timeframe;
        updateDashboard(timeframe, data);
      });
    });

    // Load initial weekly data
    updateDashboard('weekly', data);
  } catch (error) {
    console.error('Failed to load activity data:', error);
  }
}

// Start the app when the DOM is ready
document.addEventListener('DOMContentLoaded', initDashboard);
