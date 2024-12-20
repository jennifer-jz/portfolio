import { getSingleScaledColor, getControlledColor } from 'utils';

// const TechLangType = { FE: "fe", MB: "mb", BE: "be", AI: "ai", TL: "tl" };
export const TechLangTypes = [{ key: "al", label: "All" }, { key: "fe", label: "FE" }, 
  // { key: "mb", label: "Mobile" }, 
  {key: "be", label: "BE" }, { key: "ai", label: "AI" }, {key: "tl", label: "Tool"}];

const techLangs = [
  {
    content: "React",
    // value: 100000,
    value: 7,
    type: "fe"
  },
  {
    content: "React Hooks",
    // value: 100000,
    value: 5,
    type: "fe"
  },
  {
    content: "Redux",
    // value: 10000,
    value: 3,
    type: "fe"
  },
  {
    content: "GraphQL",
    // value: 100000,
    value: 3,
    type: "fe"
  },
  {
    content: "Jest",
    // value: 10000,
    value: 5,
    type: "fe"
  },
  {
    content: "React Testing Library",
    // value: 10000,
    value: 5,
    type: "fe"
  },
  {
    content: "Typescript",
    // value: 10000,
    value: 6,
    type: "fe"
  },
  {
    content: "Node.js",
    // value: 10000,
    value: 7,
    type: "fe"
  },
  {
    content: "Express",
    // value: 10000,
    value: 3,
    type: "fe"
  },
  {
    content: "Websocket",
    // value: 10000,
    value: 3,
    type: "fe"
  },
  {
    content: "Webpack",
    // value: 10000,
    value: 5,
    type: "fe"
  },
  {
    content: "Jenkins",
    // value: 10000,
    value: 5,
    type: "fe"
  },
  {
    content: "Babel",
    // value: 10000,
    value: 5,
    type: "fe"
  },
  {
    content: "ESLint",
    // value: 10000,
    value: 5,
    type: "fe"
  },
  {
    content: "Css",
    // value: 100000,
    value: 11,
    type: "fe"
  },
  {
    content: "Sass",
    // value: 50000,
    value: 3,
    type: "fe"
  },
  {
    content: "Less",
    // value: 10000,
    value: 1,
    type: "fe"
  },
  {
    content: "Styled-Components",
    // value: 20000,
    value: 4,
    type: "fe"
  },
  {
    content: "D3",
    strength: "10,000+ lines",
    // value: 10000,
    value: 1,
    type: "fe"
  },
  {
    content: "Typeorm",
    // value: 50000,
    value: 1,
    type: "fe"
  },
  {
    content: "Node + Express",
    // value: 50000,
    value: 7,
    type: "fe"
  },
  {
    content: "Html",
    // value: 300000,
    value: 11,
    type: "fe"
  },
  {
    content: "Html5",
    // value: 300000,
    value: 5,
    type: "fe"
  },
  {
    content: "Material UI",
    // value: 5000,
    value: 3,
    type: "fe"
  },
  {
    content: "Bootstrap",
    // value: 10000,
    value: 2,
    type: "fe"
  },
  // {
  //   content: "Angular JS",
  //   value: 1000,
  // },
  {
    content: "Android",
    // value: 2000,
    value: 1,
    type: "fe"
  },
  {
    content: "Javascript",
    // value: 200000,
    value: 11,
    type: "fe"
  },
  {
    content: "jQuery",
    // value: 20000,
    value: 3,
    type: "fe"
  },
  {
    content: "Ajax + XML",
    // value: 5000,
    value: 2,
    type: "fe"
  },
  {
    content: "C#",
    // value: 500000,
    value: 5,
    type: "be"
  },
  {
    content: ".Net Core",
    // value: 500000,
    value: 2,
    type: "be"
  },
  {
    content: "Asp.Net Web",
    // value: 80000,
    value: 3,
    type: "fe"
  },
  {
    content: "Java",
    // value: 20000,
    value: 2,
    type: "be"
  },
  {
    content: "Groovy",
    // value: 20000,
    value: 1,
    type: "be"
  },
  {
    content: "MySQL",
    // value: 50000,
    value: 5,
    type: "be"
  },
  {
    content: "MSSQL",
    // value: 100000,
    value: 5,
    type: "be"
  },
  {
    content: "PostgreSQL",
    // value: 100000,
    value: 1,
    type: "be"
  },
  {
    content: "MongoDB",
    // value: 100000,
    value: 1,
    type: "be"
  },
  {
    content: "Memcached",
    // value: 100000,
    value: 1,
    type: "be"
  },
  {
    content: "Microsoft Offic Programming",
    // value: 100000,
    value: 3,
    type: "be"
  },
  {
    content: "Python Django",
    // value: 10000,
    value: 1,
    type: "be"
  },
  {
    content: "Restful API",
    // value: 20000,
    value: 5,
    type: "be"
  },
  // {
  //   content: "Heroku",
  //   strength: "",
  // },
  {
    content: "RabbitMQ",
    // value: 2000,
    value: 1,
    type: "be"
  },
  {
    content: "Docker",
    value: 3,
    type: "be"
  },
  {
    content: "Jira",
    value: 6,
    type: "tl"
  },
  {
    content: "Git",
    value: 7,
    type: "tl"
  },
  {
    content: "AWS",
    value: 3,
    type: "tl"
  },
  {
    content: "Azure",
    value: 3,
    type: "tl"
  },
  {
    content: "Google Cloud",
    value: 1,
    type: "tl"
  },
  {
    content: "Stanford CoreNLP",
    // value: 3000,
    value: 1,
    type: "ai"
  },
  {
    content: "Information Retrieval",
    // value: 3000,
    value: 5,
    type: "ai"
  },
  {
    content: "Natural Language Processing",
    // value: 3000,
    value: 5,
    type: "ai"
  },
  {
    content: "Speech Recognition",
    // value: 3000,
    value: 1,
    type: "ai"
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
// strengthRange[1] = strengthRange[1] * 0.1;

const minCodeStrength = strengthRange[0];

const themeColor = getControlledColor();

const getColorByCodeStrength = getSingleScaledColor(themeColor, strengthRange[0], strengthRange[1]);

export default techLangs;

export { getColorByCodeStrength, minCodeStrength };
