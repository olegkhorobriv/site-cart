
// Отримання посилань на CSS-файли
var lightThemeLink = document.getElementById('light-theme');
var darkThemeLink = document.getElementById('dark-theme');

// Отримання кнопки переключення теми
var themeToggleBtn = document.getElementById('theme-toggle');
var moonIcon = document.querySelector('.moon-icon');

// Отримання збереженої теми з локального сховища
var savedTheme = localStorage.getItem('selectedTheme');

// Функція для зміни теми
function toggleTheme() {
    if (lightThemeLink.disabled) {
        lightThemeLink.disabled = false; // Включити світлу тему
        darkThemeLink.disabled = true;  // Вимкнути темну тему
        moonIcon.classList.remove('glow'); // Вимкнути світіння для іконки темної теми
        localStorage.setItem('selectedTheme', 'light'); // Зберегти тему в локальному сховищі
    } else {
        lightThemeLink.disabled = true;  // Вимкнути світлу тему
        darkThemeLink.disabled = false; // Включити темну тему
        moonIcon.classList.add('glow'); // Увімкнути світіння для іконки темної теми
        localStorage.setItem('selectedTheme', 'dark'); // Зберегти тему в локальному сховищі
    }
}

// Обробник події для кнопки переключення теми
themeToggleBtn.addEventListener('click', toggleTheme);

// Застосування збереженої теми при завантаженні сторінки
if (savedTheme === 'dark') {
    lightThemeLink.disabled = true;
    darkThemeLink.disabled = false;

} else {
    lightThemeLink.disabled = false;
    darkThemeLink.disabled = true;

}

