const fs = require('fs');
const path = require('path');
const folderName = require('./folder.js');
const readline = require('readline');

const filePath = path.join(__dirname, folderName, 'index.json');
let targetTemplateName = '';
let componentName = '';

const varible = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

varible.question('Write template name: ', (answer) => {
  targetTemplateName = answer;
  varible.question('Write component name: ', (answer) => {
    componentName = answer;
    if(targetTemplateName && componentName) {
      varible.close(createFile());
    } else {
      varible.close(console.log('You dont write template or component name'));
    }
  });
});

function createFile() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    const jsonFile = JSON.parse(data);
    if (jsonFile[targetTemplateName]) {
      const { path: templatePath, type, styleType } = jsonFile[targetTemplateName];

      fs.readFile(path.join(__dirname, folderName, targetTemplateName, 'main.js'), 'utf8', (err, fileData) => {
        if (err) throw err;
        const tempNameReg = new RegExp(`\\[${targetTemplateName}\\]`, 'gi');
        const fileMain = fileData.replace(tempNameReg, componentName);
        const templatePathArr = templatePath.split('/');
        templatePathArr.push(componentName);

        // создание директории
        fs.mkdirSync(path.join(__dirname, ...templatePathArr), { recursive: true });

        // создание файла main.ts с содержимым
        fs.writeFileSync(
          path.join(__dirname, ...templatePathArr, `${componentName}.${type}`),
          fileMain,
          { encoding: 'utf8' }
        );

        // создание файла style.css с пустым содержимым
        fs.writeFileSync(
          path.join(__dirname, ...templatePathArr, `style.${styleType}`),
          '',
          { encoding: 'utf8' }
        );

        console.log(`Files created successfully.`);
      });
    } else {
      console.log('Template not found in JSON file');
    }
  });
}
