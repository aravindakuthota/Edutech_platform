
  // Get today's date
  const today = new Date();

  // Format: Monday, September 15, 2025
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };

  document.getElementById('today-date').textContent =
      today.toLocaleDateString('en-US', options);


  const closedIcon = "https://cdn-icons-png.flaticon.com/512/5994/5994710.png"; // closed
  const openIcon   = "https://cdn-icons-png.flaticon.com/512/5994/5994699.png"; // open

  document.querySelectorAll('.has-children').forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation(); // stop bubbling
      this.classList.toggle('active');
      const icon = this.querySelector('.folder-icon');
      if (this.classList.contains('active')) {
        icon.src = openIcon;
      } else {
        icon.src = closedIcon;
      }
    });
  });

  // Prevent toggling when clicking links
  document.querySelectorAll('.folder-item a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.stopPropagation(); // allow link to open without toggling
    });
  });


