import { getSingleScaledColor, getControlledColor } from 'utils';

const coreExperiences = [
  {
    content: "Node + React",
    strength: "5 years",
    value: 5,
  },
  {
    content: "Code Refactor",
    strength: "4 years",
    value: 4,
  },
  {
    content: "Webpack + Babel + ESlint",
    strength: "3 year",
    value: 3,
  },
  {
    content: "Sass + CSS-in-JS",
    strength: "5 year",
    value: 5,
  },
  {
    content: "Website Performance Improvement",
    strength: "7 years",
    value: 7,
  },
  {
    content: "ERP System Development",
    strength: "4 years",
    value: 4,
  },
  {
    content: "Git",
    strength: "7 year",
    value: 7,
  },
  {
    content: "MSSQL/MYSQL",
    strength: "5 years",
    value: 5,
  },
  {
    content: "Website Building",
    strength: "5 years",
    value: 5,
  },
  {
    content: "Web Server Deployment",
    strength: "6 years",
    value: 6,
  },
  {
    content: "C# Server + ASP.NET Web",
    strength: "4 years",
    value: 4,
  },
  {
    content: "C# Office Programming",
    strength: "2 years",
    value: 2,
  },
];

const initialVal = [coreExperiences[0].value, coreExperiences[0].value];
const experienceRange = coreExperiences.reduce((accu, curr) => {
  if (curr.value < accu[0]) {
    accu[0] = curr.value;
  }
  if (curr.value > accu[1]) {
    accu[1] = curr.value;
  }
  return accu;
}, initialVal);

const themeColor = getControlledColor();

const getColorByExperience = getSingleScaledColor(themeColor, experienceRange[0], experienceRange[1]);

export default coreExperiences;

export { getColorByExperience };
  