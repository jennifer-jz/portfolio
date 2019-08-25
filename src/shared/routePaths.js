import { rootDirectory } from 'src/siteConfig.json';

const getFullPath = (path) => {
  return rootDirectory + path;
};

export const ROOT = getFullPath('/');
export const HOME = getFullPath('/home');
export const CAPABILITY = getFullPath('/capability');
export const EDUCATION = getFullPath('/education');
export const EXPERIENCE = getFullPath('/experience');
export const SOLUTION = getFullPath('/solution');
export const NLP = getFullPath('/nlp');
export const ABOUTME = getFullPath('/aboutme');
export const PRODUCT = getFullPath('/product');

const Paths = {
  ROOT,
  HOME,
  CAPABILITY,
  EDUCATION,
  EXPERIENCE,
  SOLUTION,
  NLP,
  ABOUTME,
  PRODUCT,
};

export default Paths;
