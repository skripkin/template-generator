const fs = require('fs');
const path = require('path');
const folderName = require('./folder.js');

const JsonFile = path.join(__dirname, folderName, 'index.json');
const jsonContent = {
  templateName: {
    name: 'templateName',
    path: 'src/components',
    styleType: 'scss',
    type: 'tsx'
  }
};

const TemplateFileImport = path.join(__dirname, folderName, 'templateName', 'import.js');
const TemplateFileImportContent = ``;

const TemplateFileExport = path.join(__dirname, folderName, 'templateName', 'export.js');
const TemplateFileExportContent = `export { default } from './templateName'`;

const TemplateFileMain = path.join(__dirname, folderName, 'templateName', 'main.js');
const TemplateFileMainContent = `\
import React from 'react';

const [TemplateName] = () => {
  return (
    <div>Template</div>
  )
};

export default [TemplateName];
`;

const TemplateFileStyle = path.join(__dirname, folderName, 'templateName', 'style.js');

fs.mkdir(path.join(__dirname, folderName), { recursive: true }, (err) => {
  if (err) throw err;
  console.log(`Folder ${folderName} created successfully.`);
  fs.writeFile(JsonFile, JSON.stringify(jsonContent), 'utf8', (err) => {
    if (err) throw err;
    console.log(`File ${JsonFile} created successfully.`);
  });
});

fs.mkdir(path.join(__dirname, folderName, 'templateName'), { recursive: true }, (err) => {
  if (err) throw err;
  fs.writeFile(TemplateFileExport, TemplateFileExportContent, (err) => {
    if (err) throw err;
    console.log(`File ${TemplateFileExport} created successfully.`);
  });
});

fs.mkdir(path.join(__dirname, folderName, 'templateName'), { recursive: true }, (err) => {
  if (err) throw err;
  fs.writeFile(TemplateFileImport, TemplateFileImportContent, (err) => {
    if (err) throw err;
    console.log(`File ${TemplateFileImport} created successfully.`);
  });
});

fs.mkdir(path.join(__dirname, folderName, 'templateName'), { recursive: true }, (err) => {
  if (err) throw err;
  fs.writeFile(TemplateFileMain, TemplateFileMainContent, (err) => {
    if (err) throw err;
    console.log(`File ${TemplateFileMain} created successfully.`);
  });
});

fs.mkdir(path.join(__dirname, folderName, 'templateName'), { recursive: true }, (err) => {
  if (err) throw err;
  fs.writeFile(TemplateFileStyle, '', (err) => {
    if (err) throw err;
    console.log(`File ${TemplateFileStyle} created successfully.`);
  });
});