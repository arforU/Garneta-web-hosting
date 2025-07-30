function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');

  const target = document.getElementById(pageId);
  if (target) {
    target.style.display = 'block';
  }
}
