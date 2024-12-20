import { getSingleScaledColor, getControlledColor } from 'utils';

// const coreExperiences = [
//   {
//     content: "Node + React",
//     strength: "5 years",
//     value: 5,
//   },
//   {
//     content: "Code Refactor",
//     strength: "4 years",
//     value: 4,
//   },
//   {
//     content: "Webpack + Babel + ESlint",
//     strength: "3 year",
//     value: 3,
//   },
//   {
//     content: "Sass + CSS-in-JS",
//     strength: "5 year",
//     value: 5,
//   },
//   {
//     content: "Website Performance Improvement",
//     strength: "7 years",
//     value: 7,
//   },
//   {
//     content: "ERP System Development",
//     strength: "4 years",
//     value: 4,
//   },
//   {
//     content: "Git",
//     strength: "7 year",
//     value: 7,
//   },
//   {
//     content: "MSSQL/MYSQL",
//     strength: "5 years",
//     value: 5,
//   },
//   {
//     content: "Website Building",
//     strength: "5 years",
//     value: 5,
//   },
//   {
//     content: "Web Server Deployment",
//     strength: "6 years",
//     value: 6,
//   },
//   {
//     content: "C# Server + ASP.NET Web",
//     strength: "4 years",
//     value: 4,
//   },
//   {
//     content: "C# Office Programming",
//     strength: "2 years",
//     value: 2,
//   },
// ];

const coreExperiences = [
  { 
    content: 'Notification side panel',
    value: 5,
    types: ['fe']
  },
  { 
    content: 'Watchlist subscription',
    value: 5,
    types: ['fe']
  },
  { 
    content: 'Routing and navigation',
    value: 5,
    types: ['fe']
  },
  {
    content: 'Hierarchical multiselect component',
    value: 5,
    types: ['fe']
  },
  {
    content: 'Collapsible breadcrumbs',
    value: 5,
    types: ['fe']
  },
  {
    content: 'Interactive modal',
    value: 5,
    types: ['fe']
  },
  {
    content: 'Search control panels',
    value: 5,
    types: ['fe']
  },
  {
    content: 'Chat application',
    value: 5,
    types: ['fe']
  },
  {
    content: 'Email editor',
    value: 5,
    types: ['fe']
  },
  {
    content: 'Internationalization',
    value: 5,
    types: ['fe']
  },
  {
    content: 'Accessibility',
    value: 2,
    types: ['fe']
  },
  {
    content: 'Responsiveness',
    value: 5,
    types: ['fe']
  },
  {
    content: 'Performance optimization',
    value: 8,
    types: ['fe', 'be']
  },
  {
    content: 'Product listing',
    value: 5,
    types: ['fe']
  },
  {
    content: 'Order checkout flow',
    value: 5,
    types: ['fe', 'be']
  },
  {
    content: 'Payment processor integration',
    value: 2,
    types: ['fe', 'be']
  },
  {
    content: 'Online bidding and auction',
    value: 5,
    types: ['fe', 'be']
  },
  {
    content: 'User authentication and authorization',
    value: 5,
    types: ['fe', 'be']
  },
  {
    content: 'Notification system',
    value: 5,
    types: ['fe', 'be']
  },
  {
    content: 'In-house search engine',
    value: 5,
    types: ['fe', 'be']
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
  