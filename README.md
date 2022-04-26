# Portfolio
An example of a personal site developed in React, deployed at http://zhao.scientrans.com/2019/

# Overview
This is a portfolio site developed in React (16.9.0) + Material UI + Styled Components + Webpack, etc.

As a comparison, https://github.com/jennifer-jz/portfolio-legacy is a legacy code repository of the same site developed in Node + Express + NSmarty (template engine) + Bootstrap + jQuery

Both sites are hosted in IIS. To make node app running in IIS, iisnode is used for latter.

This repo shows an example of how to revamp a site and how refactoring can improve site quality with reasonable code structure and enhanced code reusability. 

# Visible Benefits of Refactoring
1. Time to load the main page is reduced to less than 1 sec after removing jQuery script and Bootstrap jQuery library.
2. Technical debts are resolved. Duplicated code chunks are replaced by reusable components and utilities. 
3. Better html organization and style reusability thanks to Styled Components

# Other Highlights
1. Integration of SEO using react-document-meta
2. Semantic version control

# How to run the app
npm run dev -- local testing
npm run build -- build site
siteConfig.json -- configure the sub directory of the site, for example use "/2019" if we want the site address to be http://localhost:9000/2019