import React from 'react';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import {
// selfIntroText,
// contactInfo,
// filePath,
//   homeTitle,
} from '../shared/constants';
import { getMetaData } from '../utils';

const Education = (props) => {
//   const { title, description, keywords } = props;
//   const meta = {
//     title: `${title} - ${homeTitle}`,
//     description,
//     meta: {
//       name: {
//         keywords,
//       }
//     }
//   };
  const meta = getMetaData(props);
  return (
    <DocumentMeta {...meta}>
      <div />
    </DocumentMeta>
    
  );
};

Education.displayName = "Education";
Education.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};
Education.defaultProps = {
  title: "",
  description: "",
  keywords: "",
};

export default Education;
