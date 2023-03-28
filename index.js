const fs = require('fs');
const path = require('path');

const folderName = '.template';
const targetPath = process.argv[2]; // Получаем путь из аргумента командной строки

if (!targetPath) {
  console.log('Вы не указали путь для создания папки');
  process.exit(1); // Выходим с ошибкой
}

const folderPath = path.join(targetPath, folderName);

// Проверяем, существует ли папка уже
if (!fs.existsSync(folderPath)) {
  // Создаем папку, если ее нет
  fs.mkdirSync(folderPath);
  console.log(`Папка ${folderName} успешно создана по пути ${targetPath}`);
} else {
  console.log(`Папка ${folderName} уже существует по пути ${targetPath}`);
}
