import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DocumentMeta from 'react-document-meta';
import { getMetaData } from '../utils';
import { Link, InlineTitle } from '../components';
import styles from './Experience.styles';

const Experience = (props) => {
  const meta = getMetaData(props);
  return (
    <DocumentMeta {...meta}>
      <div className={`container-fluid ${props.className}`}>
        <p>02/2020 – 12/2024 <InlineTitle>Senior Software Engineer - Front End</InlineTitle>Medallia, Irvine, CA</p>

        <table>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>
                <p><InlineTitle>Rebuilding and Scaling Reporting Web of Medallia Experience Cloud Platform</InlineTitle></p>
                <ul>
                  <li>Collaborated with PM, Design, and Backend teams to implement complex user interfaces, new 
                    features, and enhancements for Medallia&#39;s Experience Cloud platform.</li>
                  <li>Led cross-team initiatives by clarifying requirements, conducting feasibility analyses, 
                    and resolving root causes to ensure timely and successful delivery of tickets.</li>
                  <li>Delivered high-quality product features that align with design standards, ensuring 
                    responsiveness, performance optimization, user acceptance, and compliance with code quality standards.</li>
                  <li>Contributed to the Front-End Engineering community by shaping the technical roadmap and 
                    defining architecture patterns for the global engineering organization.</li>
                  <li>Mentored junior and mid-level engineers to improve code quality, promote best practices, 
                    ensure maintainable code, and enhance test coverage through code reviews.</li>
                </ul>
                <p><InlineTitle>Tech Stack</InlineTitle> Node, React, Typescript, GraphQL, Java, 
                Styled-Components, D3, ESLint, Git, Jenkins, Jest</p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>02/2019 – 01/2020 <InlineTitle>Senior Software Engineer</InlineTitle>Shape Security, Mountain View, CA</p>

        <table>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>
                <p><InlineTitle>Development and Migration of Security Alert System Web Portal</InlineTitle></p>
                <ul>
                  <li>Led the development of a dynamic security alert system web portal, customizing D3
                     libraries to create intuitive and interactive data visualizations for real-time security alerts.</li>
                  <li>Overhauled and incrementally refactored a legacy codebase, modernizing the platform while 
                    enhancing functionality and user experience.</li>
                  <li>Innovated and implemented new features to significantly improve website usability and performance.</li>
                  <li>Addressed technical debt by introducing cutting-edge technologies like React Hooks and 
                    Styled Components, streamlining development and improving maintainability.</li>
                  <li>Optimized API performance by identifying and resolving query handling bottlenecks in the
                     Django Rest Framework.</li>
                  <li>Conducted thorough code reviews, managed release deployments, and provided mentorship to
                     junior developers, fostering a culture of continuous improvement and technical excellence.</li>
                </ul>
                <p><InlineTitle>Tech Stack</InlineTitle> Node, React, Redux, Webpack, Babel, Python Django, MySQL, 
				Scss, Styled-Components, D3, ESLint, Git, Jenkins, Docker, Kubernetes, Google Cloud</p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>08-12/2017, 08-12/2018 <InlineTitle>Senior Lead Software Engineer</InlineTitle>DevelopScripts, Richardson, Texas</p>

        <table>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>
                <p><InlineTitle>Lead Development of E-Commerce Website and Tech-Training</InlineTitle></p>
                <ul>
                  <li>Spearheaded the development of key e-Commerce website features and online auction 
                    functionalities, enhancing user experience and streamlining operations.</li>
                  <li>Led the development team, providing guidance on best coding practices, design patterns, and
                     performance optimization.</li>
                  <li>Conducted root cause analysis and implemented urgent fixes for critical website issues,
                     ensuring minimal downtime and a seamless user experience.</li>
                  <li>Collaborated with direct clients to gather and analyze requirements, translating them into 
                    actionable development tasks.</li>
                  <li>Continuously refactored the codebase to improve maintainability, scalability, and performance.</li>
                  <li>Led technical interviews, provided ongoing training, and fostered a culture of knowledge 
                    sharing within the team to enhance collective expertise and drive innovation.</li>
                </ul>
                <p>
                  <InlineTitle>Tech Stack</InlineTitle>
                  Node, Express, MySQL, Bootstrap, Javascript, JSON, Html5, CSS3, jQuery, 
                  Ajax, PHP, GIT version control and SVN, AWS, Assembla, Ubuntu Linux
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>01/2018 – 07/2018 <InlineTitle>Full-Stack Developer</InlineTitle>VoidRay (now Vega), Richardson, Texas</p>

        <table>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>
                <p>
                  <InlineTitle>
                    Full Stack Development of Medication Dispensing System
                  </InlineTitle>
                </p>
                <ul>
                  <li>Implemented features of a medication dispensing system based on UI mockups, ensuring a 
                    seamless user experience.</li>
                  <li>Developed robust RESTful API endpoints to support front-end functionalities.</li>
                  <li>Conducted thorough code reviews with peers, ensuring adherence to best practices for clean,
                     maintainable, and scalable code.</li>
                  <li>Actively participated in code refactoring initiatives to enhance system performance and 
                    optimize efficiency.</li>
                  <li>Collaborated closely with test engineers to troubleshoot, identify, and resolve pain 
                    points, ensuring high-quality, bug-free releases and continuous system improvement.</li>
                </ul>
                <p>
                  <InlineTitle>Tech Stack</InlineTitle> 
                  Node, React, Typescript, Javascript ES6, Less, Postgres, Typeorm, Mongo, 
                  Docker, Heroku, Git, RabbitMQ, Slack, Jira
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>04/2007 – Now <InlineTitle>Founder</InlineTitle> BCL Translations, Beijing, China</p>
    
        <table>
          <tbody>
            <tr>
              <td>06/2012 – 07/2016</td>
              <td>
                <p><InlineTitle>Title: Senior Software Engineer</InlineTitle></p>
                <p>
                  <InlineTitle>
                    Development of an <Link to="/product/erp">Enterprise Resource Planning (ERP) System</Link> 
                    Tailored to Automate Translation Workflow using .NET C# and MSSQL
                  </InlineTitle>
                </p>
                <p>
                Developed an enterprise resource planning system tailored to automate translation workflow, 
                delivered subsystems including order management, client management, HR management, 
                project management, translation quality assurance, and corpus management. Implemented &nbsp;
                  <Link to="/product/msword">text extraction and generation from/into Microsoft Office documents</Link> . 
                Developed proprietary NLP algorithms for sentence splitting, Chinese word segmentation, and phrase chunking, 
                optimized for bilingual text.
                </p>
                <p>
                  <InlineTitle>
                    Development of a <Link to="/product/scidict">Bilingual Dictionary</Link> using .NET Web
                  </InlineTitle>
                </p>
                <p>
                Designed and developed <Link href="http://www.scidict.org/en">SCIDICT</Link>, an in-house bilingual dictionary leveraging information 
                retrieval technologies including inverted indexing and ranking to achieve around 100 
                milliseconds query response time for full-text searches across millions of documents. 
                Architected a robust, multi-threaded dictionary server supporting seamless queries 
                for both web and desktop applications.
                </p>
                <p>
                  <InlineTitle>
                    Development of a <Link to="/product/workbench">Computer-Aided Translation Workbench</Link> 
                    using .NET C#
                  </InlineTitle>
                </p>
                <p>
                Developed a computer-aided translation workbench as desktop client software to assist 
                translators and editors in the translation workflow. Implemented modules for task management, 
                bilingual dictionary, spell check, grammatical check, terminology extraction, translation 
                suggestions, and phrase translation verification. Integrated a real-time bilingual sentence 
                alignment toolkit in the editor’s interface to enable full-text editing with reference to 
                the source.
                </p>
              </td>
            </tr>
            <tr>
              <td>12/2010 – 06/2012</td>
              <td>
                <p><InlineTitle>Title: General Manager</InlineTitle></p>
                <p><InlineTitle>General Management</InlineTitle></p>
                <p>
                  Establish internal quality standards for translation workflow; 
                  Produce manuals of working standards for translators; 
                  Recruit and train translators and editors; 
                  Maintain client relationship; 
                  Assign duties for accountant; 
                  Manage daily order processing; 
                  Solve problems in communication with client
                </p>
              </td>
            </tr>
            <tr>
              <td>04/2007 – 12/2010</td>
              <td>
                <p><InlineTitle>Title: Web Development Manager</InlineTitle></p>
                <p><InlineTitle>Website Development, Optimization and Promotion</InlineTitle></p>
                <p>Development and maintenance of a medium-scale corporate website <Link href="http://www.scientrans.com">Scientrans</Link></p>
                <p>
                  Website strategic planning and decision making; 
                  Lead a team of web designers and developers to build and innovate websites with marketing purpose; 
                  Initiate business cooperation with other sites; Initiate search engine optimization projects. 
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>
                <p>
                  <InlineTitle>Tech Stack</InlineTitle> 
                  C#, ASP.NET, .NET Framework, Html, CSS, Javascript, Ajax, MSSQL, Windows Server, IIS, Microsoft Office Interop
                </p>
              </td>
            </tr>
          </tfoot>
        </table>
        
      </div>
    </DocumentMeta>
  );
};

Experience.displayName = "Experience";
Experience.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
  className: PropTypes.string,
};
Experience.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
  className: "",
};

const ExperienceStyled = styled(Experience)`${styles}`;

export default ExperienceStyled;
