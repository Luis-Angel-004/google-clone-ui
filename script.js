const form = document.getElementById('search-form');
const input = document.getElementById('search');
const luckyBtn = document.getElementById('lucky');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const query = input.value.trim();
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});

luckyBtn.addEventListener('click', function() {
  const query = input.value.trim();
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
  }
});
