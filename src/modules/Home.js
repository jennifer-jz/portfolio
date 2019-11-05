import React, { useState, useEffect } from 'react';
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
  products,
  achievements,
  techLangs,
  coreExperiences,
  coreAbilities,
} from 'shared/data';
import DemoItem from './common/DemoItem';
import { Button, ButtonGroup, Link, Modal, Panel, Badge } from '../components';
import { Icon } from 'components/icons';
import styles from './Home.styles';

const Home = (props) => {
  const meta = getMetaData(props);
  const { linkedIn, gitHub } = contactInfo;
  const { resumeDocPath, resumePdfPath } = filePath;
  const { activedemo = '' } = props.match.params;
  const [modelData, setModelData] = useState(null);

  useEffect(() => {
    if (activedemo) {
      const foundProduct = products.find(product => product.id === activedemo);
      if (foundProduct) {
        const url = getVideoURL(foundProduct.id) || undefined;
        const modalData = {url};
        setModelData(modalData);
      }
    }
  }, [activedemo]);
  
  const homeProjects = products.filter(item => item.home).map(item => {
    const index = item.img.lastIndexOf('.');
    const minImg = `${item.img.substring(0, index)}-min${item.img.substring(index)}`;
    return { ...item, img: minImg };
  });

  return (
    <DocumentMeta {...meta}>
      <div className={`container-fluid bg-3 works ${props.className}`}>
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
            
            <Panel
              theme="danger"
              title="Programming Languages & Tools"
              titleUrl="capability"
            >
              <ButtonGroup>
                {techLangs.map((item, index) => (
                  <Button key={index} theme={item.theme} data-tip={item.strength}>{item.content}</Button>
                ))}
              </ButtonGroup>
            </Panel>
          </div>
          <div className="col-md-5">
            <Panel
              theme="danger"
              title="Experience"
              titleUrl="experience"
            >
              <ButtonGroup>
                {coreExperiences && coreExperiences.map((item, index) => (
                  <Button key={index} data-tip={item.strength} theme={item.theme}>
                    {item.content}
                  </Button>
                ))}
              </ButtonGroup>
            </Panel>

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

        <div><h4 className=" text-left" ><Link to="product">Product Demo</Link></h4></div>
        <div className="row text-center demos">
          {homeProjects.map((item, key) => (
            <DemoItem
              key={key}
              data={item}
              urlHead="/home"
            />
          ))}
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