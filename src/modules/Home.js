import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { getMetaData, getVideoURL } from '../utils';
import {
  selfIntroText,
  contactInfo,
  filePath,
} from '../shared/constants';
import { products } from 'shared/data';
import { Button, ButtonGroup, Link, Modal } from '../components';
import { Img } from 'components/imgs';

const Home = (props) => {
  const meta = getMetaData(props);
  const { linkedIn } = contactInfo;
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
            <Link href={resumePdfPath}>
              <i className="fa fa-file-pdf-o"></i>
            </Link>
            <Link href={resumeDocPath}>
              <i className="fa fa-file-word-o"></i>
            </Link>
            <Link href={linkedIn}>
              <i className="fa fa-linkedin-square" style={{fontSize: "26px"}}></i>
            </Link>
          </div>
          <p>
            {selfIntroText}
          </p>
        </div>

        <div className="row">
          <div className="col-md-7">

            <div className="panel-group">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <Link to="capability">Technical Achievement</Link>
                  </h4>
                </div>
                <div id="Achievement">
                  <div className="panel-body">
                    <ul className="list-group">
                      <li className="list-group-item node">Convert a traditional website to Node.js site from scratch </li>
                      <li className="list-group-item node react es6">Create reusable React component excercising best practices</li>
                      <li className="list-group-item seo">Website optimization and Google performance score improvement </li>
                      <li className="list-group-item node mysql security">MySQL connection encryption with API development </li>
                      <li className="list-group-item node">Node modules customization </li>
                      <li className="list-group-item aspnet ir">
                        Develop a Bilingual Dictionary&nbsp;
                        <Link href="http://www.scidict.org" title="a web dictionary">SCIdict.org</Link> 
                        &nbsp;using IR technique </li>
                      <li className="list-group-item csharp mssql networking">Develop a large-scale ERP system for translation industry</li>
                      <li className="list-group-item csharp mssql networking">Develop a computer-assisted translation workbench</li>
                      <li className="list-group-item csharp office">Text extraction from and generation to MS Office document</li>
                      <li className="list-group-item csharp nlp">Text processing: sentence splitting, terminology identification and spell check </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>

            <div className="panel-group">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <Link to="capability">Programming Languages & Tools</Link>
                  </h4>
                </div>
                <div>
                  <div className="panel-body">
                    <ButtonGroup>
                      <Button theme="warning" title="10,000+ lines">React + Typescript + PostgreSQL</Button>
                      <Button theme="light" title="10,000+ lines">Less</Button>
                      <Button theme="primary" title="5,000+ lines">Typeorm</Button>
                      <Button theme="secondary" title="50,000+ lines">Node.js + Express.js + MySql</Button>
                      <Button theme="primary" title="300,000+ lines">Html 4/5 + CSS 2/3</Button>
                      <Button theme="warning" title="10,000+ lines">Bootstrap</Button>
                      <Button theme="success" title="500,000+ lines">C# + SQL</Button>
                      <Button theme="info" title="80,000+ lines">Asp.Net Web</Button>
                      <Button theme="warning" title="20,000+ lines">Java</Button>
                      <Button theme="danger" title="5,000+ lines">MySQL + PhP</Button>
                      <Button theme="dark" title="10,000+ lines">Json</Button>
                      <Button theme="light" title="1,000+ lines">Angular JS</Button>
                      <Button theme="info" title="2,000+ lines">Android</Button>
                      <Button theme="primary" title="20,000+ lines">Javascript ES6</Button>
                      <Button theme="danger" title="20,000+ lines">jQuery / jQueryUI</Button>
                      <Button theme="secondary" title="5,000+ lines">Ajax + XML</Button>
                      <Button theme="success" title="2,000+ lines">Restful API</Button>
                      <Button theme="info">Heroku</Button>
                      <Button theme="light" title="2,000+ lines">RabbitMQ</Button>
                      <Button theme="warning">Docker</Button>
                      <Button theme="dark">Gira</Button>
                      <Button theme="danger" title="3,000+ lines">Stanford CoreNLP</Button>
                    </ButtonGroup>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="panel-group">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <Link to="experience">Experience</Link>
                  </h4>
                </div>
                <div>
                  <div className="panel-body">
                    <ButtonGroup>
                      <Button theme="secondary" title="4 years">ERP System Development</Button>
                      <Button theme="info" title="4 years">MSSQL/MYSQL</Button>
                      <Button theme="primary" title="4 years">Responsive Website Building</Button>
                      <Button theme="light" title="3 years">SEO</Button>
                      <Button theme="success" title="1 year">MVC Pattern</Button>
                      <Button theme="info" title="3 years">IIS Configuration</Button>
                      <Button theme="warning" title="2 years">C# Network Programming</Button>
                      <Button theme="danger" title="2 years">MS Office Programming</Button>
                      <Button theme="dark" title="2 years">CMS Development</Button>
                      <Button theme="light" title="1 year">Git Version Control</Button>
                      <Button theme="info" title="1 year">Unix/Linux</Button>
                    </ButtonGroup>
                  </div>

                </div>
              </div>
            </div>

            <div className="panel-group">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <Link to="capability">As a Development Lead</Link>
                  </h4>
                </div>
                <div>
                  <div className="panel-body">
                    <ul className="list-group">
                      <li className="list-group-item">Sharp eyes on root cause of technical issues</li>
                      <li className="list-group-item">Good communication skills with maximized information sharing</li>
                      <li className="list-group-item">Well understanding on needs from customers, managers and developers</li>
                      <li className="list-group-item">Able to implement requirement in detail</li>
                      <li className="list-group-item">Make things happen by actively asking correct questions</li>
                      <li className="list-group-item">Able to interview and train new developers</li>
                      <li className="list-group-item">Willing to take challenges and higher responsibilities</li>
                      <li className="list-group-item">Able to provide comprehensive technical consultation & solution</li>
                    </ul>

                  </div>

                </div>
              </div>
            </div>
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