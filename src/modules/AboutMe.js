import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DocumentMeta from 'react-document-meta';
import { getMetaData } from '../utils';
import {
  selfIntroText,
  contactInfo,
  filePath,
} from '../shared/constants';
import { Link } from '../components';
import { Icon } from 'components/icons';
import styles from './AboutMe.styles';

const AboutMe = (props) => {
  const meta = getMetaData(props);
  const { email, linkedIn, phone, futureLocation, location, gitHub } = contactInfo;
  const { resumeDocPath, resumePdfPath } = filePath;
  return (
    <DocumentMeta {...meta}>
      <div className={`container-fluid bg-3 works ${props.className}`}>
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
          <p>
            My official name is Juanjuan Zhao. In workplace, people also call me Jennifer which is my English name.
          </p>
          <p>
            I am an {selfIntroText}
          </p>
          <p>
            I basically spent 10 years in China working in translation industry, out of which 7 years were 
            technology focused, including 3 years as a web development manager and 4 years as a senior software engineer. 
            All my efforts in the period were to build an automated system to help innovate traditional translation 
            workflow and enhance core competitiveness of Cross Language.
          </p>
          <p>
            In 2016, I decided to pursue a master&apos;s degree in computer science at University of Texas at Dallas, 
            and graduated in December 2018.
          </p>
          <p>
            Starting from August 2017, I resumed work as a web developer using modern Javascript frameworks, Node, React, 
            Typescript, etc. While being fond of the elegancy and possibilities of modern Javascript frameworks, 
            I quickly grew into a senior software engineer with extensive exposure to web technologies.
          </p>
          <p>
            Also I found myself well adapted to the work environment in US, in particular for communication in workplace, 
            time management, and team leading, based on my previous management experience in Cross Language.
          </p>
          <p>
            I&apos;ve learned tremendous values by getting involved in agile development tools such as Jira; 
            CICD tools and technologies such as Heroku, Docker, Wercker, and Assembla; version management tools 
            such as Git and SVN; Scaling tools and platforms such AWS autoscaling, GCP, and Kubernetes. 
            Also I highly appreciate modern Javascript libraries which make possible efficient development and 
            clean code: React, ESLint, Webpack, Babel, Styled Components, React Hooks, ES6, etc.
          </p>
          <p>
            I’m currently open for permanent positions (no contract) in {futureLocation} as a senior software engineer, 
            senior full-stack engineer, or technical lead. My current location is {location}.
          </p>
          <p>If you are impressed with my portfolio, please feel free to contact me.</p>
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
