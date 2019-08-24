import React from 'react';
import { version } from 'root/package.json'; 

console.log('version', version);

const Footer = () => {
  return (
    <footer className="container-fluid text-center">
      <p>Portfolio of Juanjuan Zhao, Version {version}</p>
      <p>2017 &copy; All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
