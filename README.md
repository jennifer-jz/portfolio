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

App version

This app has its version specified in package.json. Bump version at each change. Then don't forget to build before committing code and push.

How to deploy the site?

After building the site, find files under dist, and upload them to be hosted as static site. IIS rewrite is needed for react router if hosting on IIS Manager.

What's the purpose of siteConfig.json?

configure the sub directory of the site, for example use "/2019" if we want the site address to be http://localhost:9000/2019

What is web.config?

IIS configuration file, if hosting site at a subfolder, update the rewrite rule to target the corresponding subfolder, for example: <action type="Rewrite" url="/2019/" appendQueryString="true" />, if hosting at the root, <action type="Rewrite" url="/" appendQueryString="true" />

How to upgrade dependency?

Dependency versions are correlated with each other, when using webpack 4.0, babel-loader, node-sass, css-loader, style-loader, etc. are limited at certain versions. Otherwise npm install gives errors.
