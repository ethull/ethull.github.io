document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('#category-tabs li');
  const sections = document.querySelectorAll('.category-section');

  // Handle tab clicks
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const filter = this.dataset.filter;
      setActiveFilter(filter);
      updateURL(filter);
    });
  });

  // Handle URL hash on load and hash changes
  function handleHashChange() {
    const hash = window.location.hash.replace('#category-', '').replace('#', '');
    if (hash && hash !== '') {
      setActiveFilter(hash);
    } else {
      setActiveFilter('all');
    }
  }

  // Set active filter
  function setActiveFilter(filter) {
    // Update tabs
    tabs.forEach(tab => {
      tab.classList.remove('is-active');
      if (tab.dataset.filter === filter) {
        tab.classList.add('is-active');
      }
    });

    // Show/hide sections
    sections.forEach(section => {
      if (filter === 'all') {
        section.style.display = 'block';
      } else {
        section.style.display = section.dataset.category === filter ? 'block' : 'none';
      }
    });
  }

  // Update URL without page reload
  function updateURL(filter) {
    const newHash = filter === 'all' ? '' : '#category-' + filter;
    history.pushState(null, null, newHash);
  }

  // Listen for hash changes (back/forward buttons)
  window.addEventListener('hashchange', handleHashChange);

  // Initialize on page load
  handleHashChange();
});