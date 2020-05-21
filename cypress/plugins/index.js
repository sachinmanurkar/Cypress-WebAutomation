/// <reference types="cypress" />

const fs = require('fs-extra');
const path = require('path');


function getCongByFile(file) {
  const pathToCongFile = path.resolve('cypress/', 'config', `${file}.json`);
  return fs.readJson(pathToCongFile)
}

module.exports = (on, config) => {

  const file = 'qa'
  return getCongByFile(file);
}
