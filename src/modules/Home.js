import React from 'react';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { getMetaData } from '../utils';
import {
  selfIntroText,
  contactInfo,
  filePath,
} from '../shared/constants';
import { Link } from '../components';
import { Img } from 'components/imgs';

const Home = (props) => {
  const meta = getMetaData(props);
  const { linkedIn } = contactInfo;
  const { resumeDocPath, resumePdfPath } = filePath;
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
                      Develop a Bilingual Dictionary 
                        <Link href="http://www.scidict.org" title="a web dictionary">SCIdict.org</Link> 
                      using IR technique </li>
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
                    <button type="button" className="btn btn-warning" data-toggle="tooltip" title="10,000+ lines">React + Typescript + PostgreSQL</button>
                    <button type="button" className="btn btn-light" data-toggle="tooltip" title="10,000+ lines">Less</button>
                    <button type="button" className="btn btn-primary" data-toggle="tooltip" title="5,000+ lines">Typeorm</button>
                    <button type="button" className="btn btn-dark" data-toggle="tooltip" title="50,000+ lines">Node.js + Express.js + MySql</button>
                    <button type="button" className="btn btn-primary" data-toggle="tooltip" title="300,000+ lines">Html 4/5 + CSS 2/3</button>
                    <button type="button" className="btn btn-secondary" data-toggle="tooltip" title="10,000+ lines">Bootstrap</button>
                    <button type="button" className="btn btn-success" data-toggle="tooltip" title="500,000+ lines">C# + SQL</button>
                    <button type="button" className="btn btn-info" data-toggle="tooltip" title="80,000+ lines">Asp.Net Web</button>
                    <button type="button" className="btn btn-warning" data-toggle="tooltip" title="20,000+ lines">Java</button>
                    <button type="button" className="btn btn-danger" data-toggle="tooltip" title="5,000+ lines">MySQL + PhP</button>
                    <button type="button" className="btn btn-dark" data-toggle="tooltip" title="10,000+ lines">Json</button>
                    <button type="button" className="btn btn-light" data-toggle="tooltip" title="1,000+ lines">Angular JS</button>
                    <button type="button" className="btn btn-info" data-toggle="tooltip" title="2,000+ lines">Android</button>
                    <button type="button" className="btn btn-primary" data-toggle="tooltip" title="20,000+ lines">Javascript ES6</button>
                    <button type="button" className="btn btn-danger" data-toggle="tooltip" title="20,000+ lines">jQuery / jQueryUI</button>
                    <button type="button" className="btn btn-secondary" data-toggle="tooltip" title="5,000+ lines">Ajax + XML</button>
                    <button type="button" className="btn btn-success" data-toggle="tooltip" title="2,000+ lines">Restful API</button>
                    <button type="button" className="btn btn-info">Heroku</button>
                    <button type="button" className="btn btn-light" data-toggle="tooltip" title="2,000+ lines">RabbitMQ</button>
                    <button type="button" className="btn btn-warning">Docker</button>
                    <button type="button" className="btn btn-dark">Gira</button>
                    <button type="button" className="btn btn-secondary" data-toggle="tooltip" title="3,000+ lines">Stanford CoreNLP</button>
                    
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
                    <button type="button" className="btn" data-toggle="tooltip" title="4 years">ERP System Development</button>
                    <button type="button" className="btn" data-toggle="tooltip" title="4 years">MSSQL/MYSQL</button>
                    <button type="button" className="btn btn-primary" data-toggle="tooltip" title="4 years">Responsive Website Building</button>
                    <button type="button" className="btn btn-secondary" data-toggle="tooltip" title="3 years">SEO</button>
                    <button type="button" className="btn btn-success" data-toggle="tooltip" title="1 year">MVC Pattern</button>
                    <button type="button" className="btn btn-info" data-toggle="tooltip" title="3 years">IIS Configuration</button>
                    <button type="button" className="btn btn-warning" data-toggle="tooltip" title="2 years">C# Network Programming</button>
                    <button type="button" className="btn btn-danger" data-toggle="tooltip" title="2 years">MS Office Programming</button>
                    <button type="button" className="btn btn-dark" data-toggle="tooltip" title="2 years">CMS Development</button>
                    <button type="button" className="btn btn-light" data-toggle="tooltip" title="1 year">Git Version Control</button>
                    <button type="button" className="btn btn-info" data-toggle="tooltip" title="1 year">Unix/Linux</button>
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
          <div className="col-sm-3 website featured scidict aspnet networking ir">
            <div className="content">
              <p className="title">Bilingual Dictionary</p>
              <Link title="ASP.NET Web Bilingual Dictionary" href="/img/scidict2.jpg" target="_blank">
                <p className="link"><i className="material-icons">image</i></p>
              </Link>
              <Link href="http://www.scidict.org">
                <Img src="/img/scidict2-min.jpg" />
              </Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 website featured aspnet mssql"> 
            <div className="content">
              <p className="title">User Center</p>
              <Link title="ASP.NET Web User Center" href="/img/usercenter2.jpg" target="_blank"><p className="link"><i className="material-icons">image</i></p></Link>
              <Link href="http://www.scientrans.com/users/login.aspx?email=c290cmFuc0AxMjYuY29t&pass=MTIz" target="_blank">
                <Img src="/img/usercenter2-min.jpg" />
              </Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 erp featured csharp mssql">
            <div className="content">
              <p className="title">Project Management System</p>
              <Link href="/png/prjmanage2.png" title="C# Project Management System"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="taskassign_trans2" href="#" title="C# Project Management System">
                <Img src="/png/prjmanage2-min.png" />
              </Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 website featured aspnet api">
            <div className="content">
              <p className="title">Payment API</p>
              <Link href="/img/yeepay2.jpg" title="Connection to Payment API"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="paymentAPI" href="#" title="Connection to Payment API">
                <Img src="/img/yeepay2-min.jpg" />
              </Link>
              <div className="tags"></div>
            </div>
          </div>

          <div className="col-sm-3 erp website featured aspnet mssql">
            <div className="content">
              <p className="title">Web Order Submission</p>
              <Link href="/img/orderonline2.jpg" title="ASP.NET Order Submission"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="ordersubmit" href="#" title="ASP.NET Order Submission">
                <Img src="/img/orderonline2-min.jpg" />
              </Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 website bootstrap canvas php mysql">
            <div className="content">
              <Link href="/img/seat.jpg" target="_blank"><p className="title">Bootstrap + HTML Canvas</p></Link>
              <Link title="Bootstrap + HTML5 Canvas Seat Selection" href="/img/seat.jpg" target="_blank">
                <Img src="/img/seat-min.jpg" />
              </Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 workbench featured csharp mssql networking nlp">
            <div className="content">
              <p className="title">Translator's Workbench</p>
              <Link href="/png/workbench1.jpg" title="Translation Workbench - Task List"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="workbench_trans3" href="#" title="Translation Workbench - Task List">
                <Img src="/png/workbench1-min.jpg" />
              </Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 erp msword featured csharp nlp">
            <div className="content">
              <p className="title">MS Word Document Generation</p>
              <Link href="/png/docgeneration.jpg" title="MS Word Document Generation"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="docgenerate" href="#" title="MS Word Document Generation">
                <Img src="/png/docgeneration-min.jpg" />
              </Link>
              <div className="tags"></div>
            </div>
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

Home.displayName = "Home";
Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
};
Home.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
};

export default Home;