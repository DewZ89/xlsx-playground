const fs = require('node:fs');
const xlsx = require('xlsx');
const { toJson } = require('./to-json');

const path = './excel/sample.xlsx';
const SCHEMA = {
  numero: {
    prop: 'phone',
    type: String,
  },
  nom: {
    prop: 'nom',
    type: String,
  },
  email: {
    prop: 'email',
    type: String,
  },
};

const workbook = xlsx.readFile(path);
console.log(workbook);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const json = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

console.log(toJson(json, SCHEMA));
