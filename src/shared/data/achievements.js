import React from 'react';
import { Link } from 'components';

const achievements = [
  {
    title: "Convert a traditional website to Node.js site from scratch",
    keywords: ["node"],
  },
  {
    title: "Create reusable React component excercising best practices",
    keywords: ["node", "react", "es6"],
  },
  {
    title: "Website optimization and Google performance score improvement",
    keywords: ["seo"],
  },
  {
    title: "MySQL connection encryption with API development ",
    keywords: ["node", "mysql", "security"],
  },
  {
    title: "Node modules customization ",
    keywords: ["node"],
  },
  {
    title: "Develop a Bilingual Dictionary using IR technique",
    keywords: ["aspnet", "ir"],
    ref: <Link href="http://www.scidict.org" title="a web dictionary">SCIdict.org</Link>,
  },
  {
    title: "Develop a large-scale ERP system for translation industry",
    keywords: ["csharp", "mssql", "networking"],
  },
  {
    title: "Text extraction from and generation to MS Office document",
    keywords: ["csharp", "office"],
  },
  {
    title: "Text processing: sentence splitting, terminology identification and spell check ",
    keywords: ["csharp", "nlp"],
  },
];

export default achievements;