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

# Other Highlights
Integration of SEO using react-document-meta 
