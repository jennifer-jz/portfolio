/* eslint-disable react/display-name */
import React, { useState, useEffect, useRef } from 'react';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DocumentMeta from 'react-document-meta';
import { getMetaData, getVideoURL } from '../utils';
import {
  selfIntroText,
  contactInfo,
  filePath,
} from '../shared/constants';
import {
  homeProducts,
  achievements,
  coreAbilities,
} from 'shared/data';
import { Link, Modal, Panel, Badge, LoadingPlacehHolder } from '../components';
import { Icon } from 'components/icons';
import styles from './Home.styles';

const DemoItem = Loadable({
  loader: () => import('./common/DemoItem'),
  loading: () => <LoadingPlacehHolder />,
});

const CoreExperiences = new Loadable({
  loader: () => import('./common/CoreExperiences'),
  loading: () => <LoadingPlacehHolder />,
});

const ProgrammingLanguages = Loadable({
  loader: () => import('./common/ProgrammingLanguages'),
  loading: () => <LoadingPlacehHolder />,
});

const Home = (props) => {
  const meta = getMetaData(props);
  const { linkedIn, gitHub } = contactInfo;
  const { resumeDocPath, resumePdfPath } = filePath;
  const { activedemo = '' } = props.match.params;
  const [modelData, setModelData] = useState(null);
  const demoRef = useRef();

  useEffect(() => {
    if (activedemo) {
      const foundProduct = homeProducts.find(product => product.id === activedemo);
      if (foundProduct) {
        const url = getVideoURL(foundProduct.id) || undefined;
        const modalData = {url};
        setModelData(modalData);
        scrollToRef(demoRef);
      }
    }
  }, [activedemo]);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <DocumentMeta {...meta}>
      <div className={`container-fluid ${props.className}`}>
        <div className="intro">
          <div className="name"><h4>Juanjuan Zhao (also Jennifer)</h4>
            <Link href={resumePdfPath} title="Resume">
              <Icon id="fa-file-pdf-o" />
            </Link>
            <Link href={resumeDocPath} title="Resume">
              <Icon id="fa-file-word-o" />
            </Link>
            <Link href={linkedIn} title="LinkedIn">
              <Icon id="fa-linkedin-square" />
            </Link>
            <Link href={gitHub} title="GitHub">
              <Icon id="fab fa-github" />
            </Link>
          </div>
          <p className="description">
            {selfIntroText}
          </p>
        </div>

        <div className="row">
          <div className="col-md-7">
            <Panel
              id="Achievement"
              theme="info"
              title="Technical Achievement"
              titleUrl="capability"
            >
              <ul className="list-group">
                {achievements.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item.title}
                    {item.keywords && item.keywords.reverse().map((keyword, i) =>
                      <Badge key={i} keyword={keyword} />
                    )}
                    {item.ref && <Badge keyword={item.ref.title} href={item.ref.url} />}
                  </li>
                ))}
              </ul>
            </Panel>
            <ProgrammingLanguages
              title="Programming Languages & Tools"
              titleUrl="capability"
            />
          </div>
          <div className="col-md-5">
            <CoreExperiences />
            <Panel
              theme="info"
              title="As a Development Lead"
              titleUrl="capability"
            >
              <ul className="list-group">
                {coreAbilities && coreAbilities.map((item, index) => (
                  <li key={index} className="list-group-item">{item.content}</li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
        <div ref={demoRef}>
          <Panel
            theme="danger"
            title="Product Demo"
            titleUrl="product"
            className="product-demo"
          >
            <div className="container-fluid row demos">
              {homeProducts.map((item, key) => (
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
      </div>
      {modelData && <Modal
        visible={!!modelData}
        onClose={() => setModelData(null)}
        url={modelData && modelData.url}
      />}
    </DocumentMeta>
  );
};

Home.displayName = "Home";
Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
  className: PropTypes.string,
  match: PropTypes.object,
};
Home.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
  className: "",
  match: {},
};

const HomeStyled = styled(Home)`${styles}`;

export default HomeStyled;