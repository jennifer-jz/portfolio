import fs from 'fs';
import ini from 'ini';

const settings = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));

const { common } = settings['section'];
const { version = '' } = common;
common.path = __dirname;

const rootSubPath = version ? '/' + version : '';

export const URL_HEAD = common.url+":"+common.port + rootSubPath;

export default settings;