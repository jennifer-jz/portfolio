var fs = require('fs');
var ini = require('ini'); 
var constants = require('./shared/constants');

var conf = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));

var { common } = conf['section'];
var { version = '' } = common;

var rootSubPath = version ? '/' + version : '';
var rootpath = common.url+":"+common.port + rootSubPath;

var html = {
  rootpath,
  rootSubPath,
  ...constants,
};

var global = {
  ...conf['section'],
  common: { ...common, path: __dirname },
  html,
}

$arr = global;

module.exports = global;