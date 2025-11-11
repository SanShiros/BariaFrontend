// Simple theme toggle with localStorage
const toggle = document.getElementById('themeToggle');
const KEY = 'baria-theme';

function setTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  localStorage.setItem(KEY, mode);
}

// apply saved theme on load
const saved = localStorage.getItem(KEY);
if (saved) setTheme(saved);

// toggle on click
if (toggle) {
  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem(KEY, isDark ? 'dark' : 'light');
  });
}

