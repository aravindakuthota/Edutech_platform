
  // Get today's date
  const today = new Date();

  // Format: Monday, September 15, 2025
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };

  document.getElementById('today-date').textContent =
      today.toLocaleDateString('en-US', options);

