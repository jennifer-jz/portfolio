import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DocumentMeta from 'react-document-meta';
import { getMetaData } from '../utils';
import {
  contactInfo,
  filePath,
} from '../shared/constants';
import { Link } from '../components';
import { Icon } from 'components/icons';
import styles from './AboutMe.styles';

const AboutMe = (props) => {
  const meta = getMetaData(props);
  const { email, linkedIn, phone, gitHub } = contactInfo;
  const { resumeDocPath, resumePdfPath } = filePath;
  return (
    <DocumentMeta {...meta}>
      <div className={`container-fluid ${props.className}`}>
        <div className="row">
          <div className="col-lg-12">
            <div className="row intro">
              <h4>About Me</h4>
              <Link href={resumePdfPath} title="Resume">
                <Icon id="fa-file-pdf-o" />
              </Link>
              <Link href={resumeDocPath} title="Resume">
                <Icon id="fa-file-word-o" />
              </Link>
              <Link href={gitHub} title="GitHub">
                <Icon id="fab fa-github" />
              </Link>
            </div>

            <div className="about">
              <p>Hi, I’m Jennifer, a seasoned software engineer with a passion for crafting exceptional web 
                experiences and scalable software solutions. 
                With expert-level skills in React and TypeScript, combined with backend expertise in C# .NET, Python, and Java, 
                I excel in creating dynamic, high-performance web applications and REST APIs.</p>

              <p>Over the past six years, I have honed my skills while working with leading platforms such as Medallia 
                (a large-scale experience cloud platform) and Shape Security (a cutting-edge security platform). 
                My contributions include building intuitive web-based visualization dashboards and implementing a wide 
                range of features such as:</p>
              <ul>
                <li>Notification side panels and watchlist subscriptions</li>

                <li>Routing, navigation, and hierarchical multiselect components</li>

                <li>Collapsible breadcrumbs and interactive modals</li>

                <li>Search control panels and chat applications</li>

                <li>Email editors and internationalization support</li>

                <li>Accessibility, responsiveness, and performance optimizations</li>
              </ul>
              <p>In addition, I have significant experience developing e-commerce websites using modern JavaScript frameworks. 
                My work has encompassed delivering essential features like:
              </p>
              <ul>
                <li>Product listing pages</li>
                <li>Order checkout flows and payment processor integrations</li>

                <li>Online bidding and auction systems
                </li>
                <li>User authentication and notification systems
                </li>
              </ul>
              <p>My expertise extends to enhancing user experience, boosting website performance, 
                and architecting scalable features for millions of users. 
                I leverage advanced techniques such as lazy loading, code splitting, pagination, caching, 
                and comprehensive code refactoring and migration strategies.
              </p>
              <p>As a leader in frontend development, I thrive in team environments, driving engineering goals 
                through accurate estimations, technical communication, and mentorship.
                 My ability to effectively share knowledge with stakeholders and mentor junior engineers has 
                 been pivotal in delivering successful projects.
              </p>
              <p>I am proficient in managing the complete lifecycle of web applications, from feature 
                development to deployment and launch, across cloud platforms such as Azure, AWS, and Google Cloud.
              </p>
              <p>Beyond web development, my background includes significant achievements in the language and information 
                retrieval industries. 
                I developed <Link href="https://www.scidict.org">SCIDICT</Link>, 
                a bilingual terminology dictionary capable of delivering full-text search results for millions 
                of phrase pairs in under a second. This was accomplished through the design and implementation 
                of a bespoke search engine using information retrieval techniques, inverted indexing, and
                 Memcached for optimization.
              </p>
              <p>I am driven by innovation, collaboration, and a relentless commitment to delivering exceptional 
                user experiences. Let’s build something amazing together!
              </p>

            </div>

            <div className="contactme">
              <p>
                <i className="fa fa-envelope-square"></i>
                <Link href={`mailto:${email}?Subject=Work Info`} target="_top">
                  {email}
                </Link>
              </p>
              <p>
                <i className="fa fa-linkedin-square"></i>
                <Link href={linkedIn}>{linkedIn}</Link>
              </p>
              <p>
                <i className="fa fa-phone-square"></i>
                {phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

AboutMe.displayName = "AboutMe";
AboutMe.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
  className: PropTypes.string,
};
AboutMe.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
  className: "",
};

const AboutMeStyled = styled(AboutMe)`${styles}`;

export default AboutMeStyled;
