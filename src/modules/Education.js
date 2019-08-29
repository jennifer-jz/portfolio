import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { courseProjects } from 'shared/data';
import { getMetaData } from '../utils';
import { Link, Panel, Badge } from '../components';
import styles from './Education.styles';


const Education = (props) => {
  const meta = getMetaData(props);
  const { subject } = props.match.params;

  const matchedCourseProjects = subject ?
    courseProjects.filter(item => item.keywords.includes(subject)) :
    courseProjects;
  const getActiveClassName = (key) => {
    return key === subject ? "active" : "";
  };

  return (
    <DocumentMeta {...meta}>
      <div className={`container-fluid bg-3 works ${props.className}`}>
        <div className="list">
          <div className="subtitle">Education</div>
          <p>2016.08 - 2018.12 
            <span>MS in Computer Science</span>
            The University of Texas at Dallas, Richardson, Texas
          </p>
          <p>2001.09 - 2005.07 
            <span>BS in Chemistry</span> 
            Peking University, Beijing, China
          </p>
        </div>
        
        <div className="inlinelist courses">
          <div className="subtitle">Courses</div>
          <div>
            <i className="fa fa-caret-right"></i>
            <p>Artificial Intelligence</p>
            <p className={ getActiveClassName("nlp") }>
              <Link to="/education/nlp">Natural Language Processing</Link>
            </p>
            <p className={ getActiveClassName("ir") }>
              <Link to="/education/ir">Information Retrieval</Link>
            </p>
            <p className={ getActiveClassName("ml") }>
              <Link to="/education/ml">Machine Learning</Link>
            </p>
            <p>Computer Vision</p>
          </div>
          <div>
            <i className="fa fa-caret-right"></i>
            <p className={ getActiveClassName("algorithm") }>
              <Link to="/education/algorithm">Algorithm Analysis and Data Structures</Link>
            </p>
            <p>Database Design</p>
            <p className={ getActiveClassName("os") }>
              <Link to="/education/os">Operating Systems Concepts</Link>
            </p>
            <p>Discrete Structure</p>
            <p>Computer Architecture</p>
          </div>
          <div>
            <i className="fa fa-caret-right"></i>
            <p>Cloud Computing</p>
            <p className={ getActiveClassName("web") }>
              <Link to="/education/web">Web Programming Languages</Link>
            </p>
            <p className={ getActiveClassName("hci") }>
              <Link to="/education/hci">Human Computer Interaction</Link>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Panel
              theme="info"
              title="Course Projects"
              titleUrl="/education"
            >
              {matchedCourseProjects.map((item, key) =>
                <p
                  key={key}
                  className={item.keywords.join(' ')}
                >
                  {item.period}
                  <span>
                    {item.title}
                    {item.url && <Link href={item.url} icon />}
                    {item.keywords && item.keywords.map((keyword, i) =>
                      <Badge key={i} to={`/education/${keyword}`} keyword={keyword} />
                    )}
                  </span>
                </p>
              )}
            </Panel>
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

Education.displayName = "Education";
Education.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
  className: PropTypes.string,
  match: PropTypes.object,
};
Education.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
  className: "",
  match: {},
};

export default styled(Education)`${styles}`;
