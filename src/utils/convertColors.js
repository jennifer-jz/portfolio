const brightnessThreshold = 160;
const colorLightGray = 'rgb(255, 255, 255)';
const colorDarkGray = 'rgb(10, 10, 10)';

const parseRGBStr = (rgbStr) => {
  const str = rgbStr.replace(/^.*\(/, '').replace(/\).*$/, '').replace(/\s/g, '');
  return str.split(',');
};

const getBrightness = (r, g, b) => (r * 299 + g * 587 + b * 114) / 1000;

const getGrayedColor = (r, g, b) => {
  const brightness = getBrightness(r, g, b);
  const fontColor = brightness > brightnessThreshold ? colorLightGray : colorDarkGray;
  return fontColor;
};

const getContrastGrayedColor = (r, g, b) => {
  const brightness = getBrightness(r, g, b);
  const fontColor = brightness < brightnessThreshold ? colorLightGray : colorDarkGray;
  return fontColor;
};

export function getFontColorInBackground(rgbStr) {
  const rgb = parseRGBStr(rgbStr);
  return getContrastGrayedColor(...rgb);
}

export function getGrayedColorFromBackground(rgbStr) {
  const rgb = parseRGBStr(rgbStr);
  return getGrayedColor(...rgb);
}