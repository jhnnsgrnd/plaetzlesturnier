// Year-picker navigation
document.getElementById('year-select').addEventListener('change', function() {
  window.location.href = this.value;
});

// Tab-switching for each phase
document.querySelectorAll('.phase').forEach(section => {
  const tabs     = section.querySelectorAll('.phase-tab');
  const contents = section.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // deactivate all
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // activate clicked
      tab.classList.add('active');
      section.querySelector(`#${tab.dataset.target}`).classList.add('active');
    });
  });
});
