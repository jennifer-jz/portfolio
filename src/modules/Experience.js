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
      <p>2020.02 – Present <InlineTitle>Senior Software Engineer - Front End</InlineTitle>Medallia, Irvine, CA</p>

      <table>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>
              <p><InlineTitle>Rebuild and Scale Reporting Web of Medallia Experience Cloud Platform</InlineTitle></p>
              <ul>
                <li>Work closely with PM, Design and BE teams to implement complex user interfaces, new features and enhancements for Medallia’s experience cloud platform.</li>
                <li>Deliver product features that are compliant with standards in mockups and design specifications, user acceptance testing, web/mobile responsiveness, performance testing and code quality.</li>
                <li>Lead projects by initiating conversations involving multiple teams regarding requirement clarification, feasibility analysis and root cause investigation, to facilitate tickets being delivered as planned.</li>
                <li>Participate in a thriving Front-End Engineering community, help shape mid/long-term technical roadmap and FE architecture patterns for the global Engineering organization.</li>
                <li>Help junior and mid-level engineers improve code quality via mentorship and in code review, encourage best practices, code maintainability and unit test coverage.</li>
              </ul>
              <p><InlineTitle>Tech Stack</InlineTitle> Node, React, Typescript, GraphQL, Java, Styled-Components, D3, ESLint, Git, Jenkins, Jest</p>
            </td>
          </tr>
        </tbody>
      </table>

        <p>2019.02 – 2020.01 <InlineTitle>Senior Software Engineer</InlineTitle>Shape Security, Mountain View, CA</p>

        <table>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>
                <p><InlineTitle>Development and Transformation of Alert System Web Portal</InlineTitle></p>
                <ul>
                  <li>Alerts data visualization by customizing D3 libraries</li>
                  <li>Website usability improvement by innovating features</li>
                  <li>Incrementally refactor legacy code</li>
                  <li>Address tech debts by introducing new technologies: React Hooks & Styled Components</li>
                  <li>Improve API performance by identifying bottlenecks of query building in Django</li>
                  <li>Code review, release deployment, and mentor juniors</li>
                </ul>
                <p><InlineTitle>Tech Stack</InlineTitle> Node, React, Redux, Webpack, Babel, Python Django, MySQL, 
				Scss, Styled-Components, D3, ESLint, Git, Jenkins, Docker, Kubernetes, Google Cloud</p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>2018.08 – 2018.12 <InlineTitle>Senior Lead Software Engineer</InlineTitle>DevelopScripts, Richardson, Texas</p>

        <table>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>
                <p><InlineTitle>Lead Development of Website Features and Tech-Training</InlineTitle></p>
                <ul>
                  <li>Develop e-Commerce website features and online auction functionalities</li>
                  <li>Lead development and recommend best coding practices of the team</li>
                  <li>Root cause analysis and urgent fix of website issues</li>
                  <li>Requirement engineering based on communication with direct clients</li>
                  <li>Refactor code repository progressively</li>
                  <li>Interview, tech-training and knowledge sharing</li>
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

        <p>2018.01 – 2018.07 <InlineTitle>Full-Stack Developer</InlineTitle>VoidRay (now Vega), Richardson, Texas</p>

        <table>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>
                <p>
                  <InlineTitle>
                    Full Stack Development of Medication Dispensing System using 
                    Node, React, Typescript, Less, Postgres, Typeorm and Mongo
                  </InlineTitle>
                </p>
                <ul>
                  <li>Implement website features based on UI mockups</li>
                  <li>Create restful API endpoint; Create database model & repository</li>
                  <li>Create reusable React component</li>
                  <li>Pull request review on GitHub</li>
                  <li>Troubleshooting & Bug fixing in cooperation with testers</li>
                </ul>
                <p>
                  <InlineTitle>Tech Stack</InlineTitle> 
                  Node, React, Typescript, Javascript ES6, Less, Postgres, Typeorm, Mongo, 
                  Docker, Heroku, Git, RabbitMQ, Slack, Gira
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>2017.08 – 2017.12 <InlineTitle>Node.JS Developer & Development Lead</InlineTitle>DevelopScripts, Richardson, Texas</p>

        <table>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>
                <p><InlineTitle>Maintenance of Auction Websites using Node.js</InlineTitle></p>
                <ul>
                  <li>Website issues troubleshooting, urgent bugs fixing, and new features development</li>
                  <li>Customer support with root cause explanation</li>
                  <li>Interview and train new developers</li>
                  <li>Provide comprehensive technical consultation & solution</li>
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
	
	
        <p>2007.04 – 2016.07 <InlineTitle>Founder</InlineTitle> Cross Language Co., Ltd., Beijing, China</p>
    
        <table>
          <tbody>
            <tr>
              <td>2012.06 – 2016.07</td>
              <td>
                <p><InlineTitle>Title: Senior Software Engineer</InlineTitle></p>
                <p>
                  <InlineTitle>
                    Development of an <Link to="/product/erp">Enterprise Resource Planning (ERP) System</Link> 
                    for Translation Automation using .NET C# and MSSQL
                  </InlineTitle>
                </p>
                <p>
					Develop an enterprise management system for translation automation, including subsystems of order 
					management, client management, HR management, translation project management, translation and 
					editing quality monitoring system, and bilingual corpus management. Implement text extraction 
					and generation from/to MS Office Word using C#&nbsp;
                  <Link to="/product/msword">Office Programming</Link>. 
					Develop fully owned NLP algorithms for sentence splitting, Chinese word segmentation, 
                    and phrase chunking, tailored for bilingual text.
                </p>
                <p>
                  <InlineTitle>
                    Development of a <Link to="/product/scidict">Bilingual Dictionary</Link> using .NET Web
                  </InlineTitle>
                </p>
                <p>
					Develop a wholly owned bilingual dictionary, <Link href="http://www.scidict.org/en">SCIdict</Link>, 
					with less than 1 sec. response time to fuzzy string match request among up to 100 million entries. 
					Implement a dictionary server that feeds data for both web UI and desktop client applications. 
					Information retrieval technologies are used to prioritize terminology ranking. Inverted index is 
					used to boost query performance in larger than million entries. Automatic failure check and 
					restart of query server are also implemented.
                </p>
                <p>
                  <InlineTitle>
                    Development of a <Link to="/product/workbench">Computer-Aided Translation Workbench</Link> 
                    using .NET C#
                  </InlineTitle>
                </p>
                <p>
					Develop a computer-aided translation workbench, as a desktop client software that helps translators 
					and editors in the translation workflow. Implement modules of task management, bilingual dictionary 
					desktop client, spell check, grammatical check, terminology extraction and translation suggestion, 
					and phrase translation check, as well as a real-time bilingual sentence alignment toolkit on the 
					editor’s interface to enable full text editing with reference to source.
                </p>
              </td>
            </tr>
            <tr>
              <td>2010.12 – 2012.06</td>
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
              <td>2007.04 – 2010.12</td>
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
