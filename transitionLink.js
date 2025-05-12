document.querySelectorAll('.transition-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = this.href;
    }, 500);
  });
});