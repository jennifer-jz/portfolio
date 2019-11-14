import { getSingleScaledColor, getControlledColor } from 'utils';

const techLangs = [
  {
    content: "React",
    strength: "100,000+ lines",
    value: 100000,
  },
  {
    content: "Typescript",
    strength: "10,000+ lines",
    value: 10000,
  },
  {
    content: "Css",
    strength: "100,000+ lines",
    value: 100000,
  },
  {
    content: "Sass",
    strength: "50,000+ lines",
    value: 50000,
  },
  {
    content: "Less",
    strength: "10,000+ lines",
    value: 10000,
  },
  {
    content: "Typeorm",
    strength: "5,000+ lines",
    value: 50000,
  },
  {
    content: "Node + Express",
    strength: "50,000+ lines",
    value: 50000,
  },
  {
    content: "Html",
    strength: "300,000+ lines",
    value: 300000,
  },
  {
    content: "Material UI",
    strength: "5,000+ lines",
    value: 5000,
  },
  {
    content: "Bootstrap",
    strength: "10,000+ lines",
    value: 10000,
  },
  {
    content: "C#",
    strength: "500,000+ lines",
    value: 500000,
  },
  {
    content: "MsSQL",
    strength: "100,000+ lines",
    value: 100000,
  },
  {
    content: "Asp.Net Web",
    strength: "80,000+ lines",
    value: 80000,
  },
  {
    content: "Java",
    strength: "20,000+ lines",
    value: 20000,
  },
  {
    content: "MySQL",
    strength: "5,000+ lines",
    value: 5000,
  },
  {
    content: "Angular JS",
    strength: "1,000+ lines",
    value: 1000,
  },
  {
    content: "Android",
    strength: "2,000+ lines",
    value: 2000,
  },
  {
    content: "Javascript",
    strength: "200,000+ lines",
    value: 200000,
  },
  {
    content: "jQuery / jQueryUI",
    strength: "20,000+ lines",
    value: 20000,
  },
  {
    content: "Ajax + XML",
    strength: "5,000+ lines",
    value: 5000,
  },
  {
    content: "Restful API",
    strength: "2,000+ lines",
    value: 2000,
  },
  {
    content: "Heroku",
    strength: "",
  },
  {
    content: "RabbitMQ",
    strength: "2,000+ lines",
    value: 2000,
  },
  {
    content: "Docker",
    strength: "",
  },
  {
    content: "Gira",
    strength: "",
  },
  {
    content: "Stanford CoreNLP",
    strength: "3,000+ lines",
    value: 3000,
  },
];

const initialVal = [techLangs[0].value, techLangs[0].value];
const strengthRange = techLangs.reduce((accu, curr) => {
  if (curr.value < accu[0]) {
    accu[0] = curr.value;
  }
  if (curr.value > accu[1]) {
    accu[1] = curr.value;
  }
  return accu;
}, initialVal);

// One abnormally high value streches out the whole distribution
// Hacky treatment to make visualization better without statistical tools
strengthRange[1] = strengthRange[1] * 0.3;

const minCodeStrength = strengthRange[0];

const themeColor = getControlledColor();

const getColorByCodeStrength = getSingleScaledColor(themeColor, strengthRange[0], strengthRange[1]);

export default techLangs;

export { getColorByCodeStrength, minCodeStrength };
