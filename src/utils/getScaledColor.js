import { scaleLinear } from 'd3';

function getValueRank(value, thresholds) {
  let rank = 0;
  for (let i = 0; i < thresholds.length - 1; i++) {
    if (value >= thresholds[i] && value < thresholds[i+1]) {
      rank = i;
      break;
    }
  }
  return rank;
}

export function getSubScaledColor(minColor, maxColor, minVal, maxVal) {
  return scaleLinear()
    .range([minColor, maxColor])
    .domain([minVal, maxVal]);
}

export function getScaledColor(colors, thresholds, value) {
  if (colors.length !== thresholds.length) return '';
  if (thresholds.length === 0) return '';
  if (value <= thresholds[0]) return colors[0];
  if (value >= thresholds[thresholds.length - 1]) return colors[colors.length - 1];
  const rank = getValueRank(value);
  const minVal = thresholds[rank];
  const maxVal = thresholds[rank + 1];
  const minColor = colors[rank];
  const maxColor = colors[rank + 1];
  const color = getSubScaledColor(minColor, maxColor, minVal, maxVal)(value);
  return color;
}

export function getSingleScaledColor(maxColor, minVal, maxVal) {
  const minColor = 'white';
  const getColorFromVal = getSubScaledColor(minColor, maxColor, minVal, maxVal);
  return function(value) {
    if (value <= minVal) return 'white';
    if (value >= maxVal) return maxColor;
    return getColorFromVal(value);
  };
}