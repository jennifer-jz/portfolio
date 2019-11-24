import { RANDOM_BACKGROUND_COLORS } from 'shared/styles';

export function getRandomColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`;
}

export function getControlledColor() {
  const num = RANDOM_BACKGROUND_COLORS.length;
  const index = Math.floor(Math.random() * 1000) % num;
  return RANDOM_BACKGROUND_COLORS[index];
}