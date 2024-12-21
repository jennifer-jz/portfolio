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
} from 'shared/data';
import { Link, Modal, LoadingIndicator } from '../components';
import { Icon } from 'components/icons';
import styles from './Home.styles';

const CoreExperiences = Loadable({
  loader: () => import('./home/CoreExperiences'),
  loading: () => <LoadingIndicator image />,
});

const CoreAbilities = Loadable({
  loader: () => import('./home/CoreAbilities'),
  loading: () => <LoadingIndicator image />,
});

const ProgrammingLanguages = Loadable({
  loader: () => import('./home/ProgrammingLanguages'),
  loading: () => <LoadingIndicator image />,
});

const Achievement = Loadable({
  loader: () => import('./home/Achievement'),
  loading: () => <LoadingIndicator image />,
});

const HomeDemos = Loadable({
  loader: () => import('./home/HomeDemos'),
  loading: () => <LoadingIndicator image />,
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
          <div className="name"><h4>Juanjuan Zhao (Jennifer)</h4>
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
            <Achievement
              id="Achievement"
              theme="info"
              title="Technical Achievement"
              titleUrl="capability"
            />
            <ProgrammingLanguages
              title="Programming Languages & Tools"
              titleUrl="capability"
            />
          </div>
          <div className="col-md-5">
            <CoreExperiences
              title="Experience"
              titleUrl="experience"
            />
            <CoreAbilities
              theme="info"
              title="As a Development Lead"
              titleUrl="capability"
            />
          </div>
        </div>
        <div ref={demoRef}>
          <HomeDemos
            theme="danger"
            title="Product Demo"
            titleUrl="product"
            className="product-demo"
          />
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