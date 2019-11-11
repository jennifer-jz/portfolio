import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { Breadcrumbs } from '@material-ui/core';
import { courseProjects } from 'shared/data';
import ProjectItem from './common/ProjectItem';
import { educationNavs, getCourseNameByKey } from 'shared/navigation';
import { getMetaData, getRandomColor } from '../utils';
import { Link, Panel, InlineTitle } from '../components';
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

  return (
    <DocumentMeta {...meta}>
      <div className={`container-fluid ${props.className}`}>
        <div className="education-history">
          <h5 className="headline">Education</h5>
          <p>2016.08 - 2018.12 
            <InlineTitle>MS in Computer Science</InlineTitle>
            The University of Texas at Dallas, Richardson, Texas
          </p>
          <p>2001.09 - 2005.07 
            <InlineTitle>BS in Chemistry</InlineTitle> 
            Peking University, Beijing, China
          </p>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Panel
              theme="info"
              title="Courses"
              className="courses"
            >
              {educationNavsGroup.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <i className="fa fa-circle" style={{ color: getRandomColor()}}></i>
                  {educationNavs.filter(item => item.line === groupIndex + 1).map((item, index) => {
                    if (!item.name) {
                      return (<span key={index}>{item.title}</span>);
                    }
                    return (
                      <span key={index} className={ getActiveClassName(item.name) }>
                        <Link to={`/education/${item.name}`}>{item.title}</Link>
                      </span>
                    );
                  })}
                </div>
              ))}
            </Panel>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Panel
              theme="info"
              titleComponent={(
                <Breadcrumbs
                  separator={<i className="fa fa-angle-right" aria-hidden="true"></i>}
                  aria-label="breadcrumb"
                >
                  <Link color="inherit" to="/education">
                  Course Projects
                  </Link>
                  {subject && <Link color="inherit" to={`/education/${subject}`}>
                    {getCourseNameByKey(subject)}
                  </Link>}
                </Breadcrumbs>
              )}
            >
              {matchedCourseProjects.map((item, index) =>
                <ProjectItem key={index} data={item} />
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

const EducationStyled = styled(Education)`${styles}`;

export default EducationStyled;
