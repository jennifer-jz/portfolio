import { getRootUrl } from 'utils';

export const ROOT = getRootUrl('/');
export const HOME = getRootUrl('/home');
export const EDUCATION = getRootUrl('/education');
export const EXPERIENCE = getRootUrl('/experience');
export const NLP = getRootUrl('/nlp');
export const ABOUTME = getRootUrl('/aboutme');
export const PRODUCT = getRootUrl('/product');

const Paths = {
  ROOT,
  HOME,
  EXPERIENCE,
  PRODUCT,
  EDUCATION,
  NLP,
  ABOUTME,
};

export const navPathArr = Object.entries(Paths).slice(1);

export default Paths;
