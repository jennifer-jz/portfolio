import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { courseProjects } from 'shared/data';
import { educationNavs } from 'shared/navigation';
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

  const educationNavsGroup = educationNavs.reduce((accu, curr) => {
    if (curr.line > accu.length) {
      accu.push([curr]);
    } else {
      accu[curr.line - 1].push(curr);
    }
    return accu;
  }, []);

  const isNavigable = (keyword) => {
    return !!educationNavs.find(item => item.name === keyword);
  };

  return (
    <DocumentMeta {...meta}>
      <div className={`container-fluid bg-3 works ${props.className}`}>
        <div className="education-history">
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
        
        <div className="courses">
          <div className="subtitle">Courses</div>
          {educationNavsGroup.map((group, groupIndex) => (
            <div key={groupIndex}>
              <i className="fa fa-caret-right"></i>
              {educationNavs.filter(item => item.line === groupIndex + 1).map((item, index) => {
                if (!item.name) {
                  return (<p key={index}>{item.title}</p>);
                }
                return (
                  <p key={index} className={ getActiveClassName(item.name) }>
                    <Link to={`/education/${item.name}`}>{item.title}</Link>
                  </p>
                );
              })}
            </div>
          ))}
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
                      <Badge
                        key={i}
                        to={isNavigable(keyword) ? `/education/${keyword}` : undefined}
                        keyword={keyword}
                      />
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
