const capabilitiesList = document.getElementById('capabilities');
const descriptionContainer = document.getElementById('description-container');
const descriptionText = document.getElementById('description');
const metricFilter = document.getElementById('metric-filter');
const scoresList = document.getElementById('scores');

// Sample RTOM capabilities data (replace with your actual data source)
const rtomCapabilities = [
  { name: 'Applicatieontwikkeling', description: 'Beschrijf applicatieontwikkeling' },
  { name: 'Infrastructuurbeheer', description: 'Beschrijf infrastructuurbeheer' },
  { name: 'Servicemanagement', description: 'Beschrijf servicemanagement' },
];

// Function to populate the capabilities list
function populateCapabilities() {
  rtomCapabilities.forEach(capability => {
    const listItem = document.createElement('li');
    listItem.textContent = capability.name;
    listItem.addEventListener('click', () => {
      updateDescription(capability.description);
    });
    capabilitiesList.appendChild(listItem);
  });
}

// Function to update the capability description
function updateDescription(description) {
  descriptionText.textContent = description;
}

// Function to handle metric filter change
function handleMetricFilterChange() {
  const selectedMetric = metricFilter.value;
  // Update scores list based on selected metric (implementation required)
  // This example just clears the list for now
  scoresList.innerHTML = '';
  // Add logic to filter and display scores based on selected metric
}

// Call functions to populate and handle initial interactions
populateCapabilities();
metricFilter.addEventListener('change', handleMetricFilterChange);
