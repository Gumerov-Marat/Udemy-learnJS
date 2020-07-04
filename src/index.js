import './index.css';

// ВАЖНАЯ СТРОКА ДЛЯ ИМПОРТА ФАЙЛОВ В БИЛД НЕ УДАЛЯТь
require.context('./', true, /\.(png|svg|jpg|gif)$/);

