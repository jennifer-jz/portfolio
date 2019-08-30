import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
import { Button, ButtonGroup, Link, Modal, Panel, Badge } from '../components';
import { Img } from 'components/imgs';

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
  
  const homeProjects = products.filter(item => item.home);

  return (
    <DocumentMeta {...meta}>
      <div className="container-fluid bg-3 works">
        <div className="intro">
          <div className="name"><h4>Juanjuan Zhao (also Jennifer)</h4>
            <Link href={resumePdfPath} title="Resume">
              <i className="fa fa-file-pdf-o"></i>
            </Link>
            <Link href={resumeDocPath} title="Resume">
              <i className="fa fa-file-word-o"></i>
            </Link>
            <Link href={linkedIn} title="LinkedIn">
              <i className="fa fa-linkedin-square" style={{fontSize: "26px"}}></i>
            </Link>
            <Link href={gitHub} title="GitHub">
              <i className="fa fab fa-github" style={{fontSize: "26px"}}></i>
            </Link>
          </div>
          <p>
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
                    {item.ref && <Badge keyword={item.ref} href={item.ref} />}
                  </li>
                ))}
              </ul>
            </Panel>
            
            <Panel
              theme="danger"
              title="Programming Languages & Tool"
              titleUrl="capability"
            >
              <ButtonGroup>
                {techLangs.map((item, index) => (
                  <Button key={index} theme={item.theme} title={item.strength}>{item.content}</Button>
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
                  <Button key={index} theme={item.theme} title={item.strength}>
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

        <div className="headline"><h4 className=" text-left" ><Link to="product">Product Demo</Link></h4></div>
        <div className="row text-center demos">
          {homeProjects.map((item, key) => {
            const id = item.demo ? item.id : "";
            const demoLink = item.demo ? `/home/${id}` : undefined;
            const showDemoIcon = item.demo || !!item.url;
            const url = item.url || undefined;
            const caption = item.caption || item.title;
            const imgUrl = item.img;
            const imgFullUrl = item.imgFull || item.img;
            const demoIconUrl = showDemoIcon ? imgFullUrl : undefined;
            const externalUrl = !item.demo ? url || imgFullUrl : undefined ;

            return (
              <div key={key} className={`col-sm-3 ${item.keywords.join(' ')}`}>
                <div className="content">
                  {showDemoIcon && <p className="title">{item.title}</p>}
                  <Link className={id} href={demoIconUrl} title={item.title}>
                    {showDemoIcon && <p className="demo"><i className="material-icons">image</i></p>}
                    {!showDemoIcon && <p className="title">{item.title}</p>}
                  </Link>
                  {item.demo && <Link id={id} to={demoLink} title={caption}>
                    <Img src={imgUrl} />
                  </Link>}
                  {!item.demo && <Link href={externalUrl} title={caption}>
                    <Img src={imgUrl} />
                  </Link>}
                </div>
              </div>
            );
          })}
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
  match: PropTypes.object,
};
Home.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
  match: {},
};

export default Home;