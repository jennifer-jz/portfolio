import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import DemoItem from './common/DemoItem';
import ProjectItem from './common/ProjectItem';
import { getMetaData } from '../utils';
import { Panel } from '../components';
import { nlpProjects, nlpProducts } from 'shared/data';
import styles from './Nlp.styles';

const Nlp = (props) => {
  const meta = getMetaData(props);

  return (
    <DocumentMeta {...meta}>
      <div className={`container-fluid ${props.className}`}>
        <div className="row">
          <div className="col-md-9">
            <Panel
              className="projects"
              theme="info"
              title="Natural Language Processing (NLP) Projects"
            >
              {nlpProjects.map((item, index) => (
                <ProjectItem key={index} data={item} />
              ))}
            </Panel>
            <Panel
              theme="info"
              title="NLP Product Demo"
              className="nlp-product-demo"
            >
              <div className="row demos">
                {nlpProducts.map((item, key) => (
                  <DemoItem
                    key={key}
                    data={item}
                    urlHead="/home"
                    className="col-lg-3 col-md-6 col-sm-12"
                  />
                ))}
              </div>
            </Panel>
          </div>
          <div className="col-md-3">
            <Panel
              theme="info"
              title="NLP Skill Set"
            >
              <ul>
                <li>Information retrieval
                  <ul>
                    <li>index building and compression</li>
                    <li>text classification and clustering</li>
                    <li>query search based on similarity</li>
                    <li>query expansion</li>
                    <li>web crawling</li>
                  </ul>
                </li>
                <li>Natural Language Processing
                  <ul>
                    <li>tokenization</li>
                    <li>stemmatization</li>
                    <li>lemmatization</li>
                    <li>sentence splitting</li>
                    <li>syntactic parsing</li>
                    <li>named entity extraction</li>
                    <li>Chinese word segmentation</li>
                    <li>phrase extraction</li>
                    <li>text chunking</li>
                  </ul>
                </li>
                <li>Computer-Aided Translation
                  <ul>
                    <li>spell check</li>
                    <li>grammatical check</li>
                    <li>phrase translation check</li>
                    <li>real-time alignment of sentence pairs</li>
                  </ul>
                </li>
              </ul>
            </Panel>
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

Nlp.displayName = "Nlp";
Nlp.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
  className: PropTypes.string,
};
Nlp.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
  className: "",
};

const NlpStyled = styled(Nlp)`${styles}`;

export default NlpStyled;
