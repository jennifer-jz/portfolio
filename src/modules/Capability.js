import React from 'react';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { getMetaData } from '../utils';
import { Link } from '../components';

const Capability = (props) => {
  const meta = getMetaData(props);
  return (
    <DocumentMeta {...meta}>
      <div className="container-fluid bg-3 works">

        <div className="row">
          <div className="col-md-6">
            <div className="panel-group">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h4 className="panel-title">
                  Highlight: As a Senior Developer and Technical Lead
                  </h4>
                </div>
                <div>
                  <div className="panel-body">
                    <p>- <span>Sharp eyes on root cause of technical issues</span></p>
                    <p>- <span>Good communication skills with maximized information sharing</span></p>
                    <p>- <span>Well understanding on needs from customers, managers and developers</span></p>
                    <p>- <span>Able to implement requirement in detail</span></p>
                    <p>- <span>Make things happen by actively asking correct questions</span></p>
                    <p>- <span>Able to interview and train new developers</span></p>
                    <p>- <span>Willing to take challenges and higher responsibilities</span></p>
                    <p>- <span>Able to provide comprehensive technical consultation & solution</span></p>

                  </div>
                </div>
              </div>
            </div>

            <div className="panel-group">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4 className="panel-title">
                  Technical Achievement
                  </h4>
                </div>
                <div id="Achievement">
                  <div className="panel-body">
                    <p>- <span>Convert a traditional website to Node.js site from scratch</span></p>
                    <ul>
                      <li>Examples</li>
                      <ul>
                        <li>
                        Old site: 
                          <Link href="http://www.scientrans.com/~jzhao/">
                          http://www.scientrans.com/~jzhao/
                          </Link>
                        </li>
                        <li>Node.js site: 
                          <Link href="http://zhao.scientrans.com/">
                          http://zhao.scientrans.com/
                          </Link>
                        </li>
                      </ul>
                    </ul>
                    <p>- <span>Website optimization and Google performance score improvement</span></p>
                    <ul>
                      <li>Procedures</li>
                      <ul>
                        <li>Enable gzip compression</li>
                        <li>Enable cache control</li>
                        <li>Optimize render-blocking css and js files</li>
                        <li>Optimize pictures</li>
                      </ul>
                      <li>Examples</li>
                      <ul>
                        <li>https://www.aucwine.com</li>
                        <li>https://www.slibuy.com</li>
                      </ul>
                    </ul>
                    <p>- <span>MySQL connection encryption with API development</span></p>
                    <ul>
                      <li>Target</li>
                      <ul>
                        <li>protect clear text password stored in configuration files</li>
                        <li>restrict access to live database to the server</li>
                        <li>separate critical files from code repository and database access</li>
                      </ul>
                      <li>Solutions</li>
                      <ul>
                        <li>Fetch encrypted password from API server based on clear text password</li>
                        <li>Establish MySQL connection based on the encrypted password</li>
                        <li>Pass MySQL connection to app.js with restored clear text password</li>
                        <li>Allow code repository to run without encryption locally</li>
                        <li>Binarize encryption source files</li>
                      </ul>
                      <li>Modules:
                        <ul>
                          <li>Mysql</li>
                          <li>MD5</li>
                          <li>NEXE</li>
                        </ul>
                      </li>
                    </ul>

                    <p>- <span>Node modules customization</span></p>
                    <ul>
                      <li>Pagination</li>
                      <li>Mysql</li>
                      <li className="red">Forever</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="col-md-6">
            <div className="panel-group">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h4 className="panel-title">
                  Natural Language
                  </h4>
                </div>
                <div>
                  <div className="panel-body">
                    <p>- <span>Proficient both in written and spoken English</span></p>
                    <p>- <span>Expert in technical writing with more than 5 years of technical translation/editing experience in English</span></p>
                    <p>- <span>Good literal communication skills: deliver key points with simple words</span></p>
                  </div>
                </div>
              </div>
            </div>
        
            <div className="panel-group">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h4 className="panel-title">
                  Programming Language
                  </h4>
                </div>
                <div>
                  <div className="panel-body">
                    <button type="button" className="btn" data-toggle="tooltip" title="50,000+ lines">Node.js + Express.js + MySql</button>
                    <button type="button" className="btn btn-primary" data-toggle="tooltip" title="300,000+ lines">Html 4/5 + CSS 2/3</button>
                    <button type="button" className="btn btn-secondary" data-toggle="tooltip" title="10,000+ lines">Bootstrap</button>
                    <button type="button" className="btn btn-success" data-toggle="tooltip" title="500,000+ lines">C# + SQL</button>
                    <button type="button" className="btn btn-info" data-toggle="tooltip" title="80,000+ lines">Asp.Net Web</button>
                    <button type="button" className="btn btn-warning" data-toggle="tooltip" title="20,000+ lines">Java</button>
                    <button type="button" className="btn btn-danger" data-toggle="tooltip" title="5,000+ lines">MySQL + PhP</button>
                    <button type="button" className="btn btn-dark" data-toggle="tooltip" title="10,000+ lines">json</button>
                    <button type="button" className="btn btn-light" data-toggle="tooltip" title="1,000+ lines">Angular JS</button>
                    <button type="button" className="btn btn-link" data-toggle="tooltip" title="1,000+ lines">Mongo DB</button>
                    <button type="button" className="btn btn-primary" data-toggle="tooltip" title="20,000+ lines">Javascript / jQuery / jQueryUI</button>
                    <button type="button" className="btn btn-secondary" data-toggle="tooltip" title="5,000+ lines">ajax + XML</button>
                    <button type="button" className="btn btn-success" data-toggle="tooltip" title="2,000+ lines">REST and SOAP Web Services</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-group">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4 className="panel-title">
                  Skill Set
                  </h4>
                </div>
                <div id="Utilities">
                  <div className="panel-body">
                    <p>- <span>AWS</span></p>
                    <ul>
                      <li>S3 bucket</li>
                      <li>Security Group</li>
                      <li>Monitoring</li>
                      <li>RDS</li>
                      <li className="red">Autoscaling</li>
                    </ul>
                    <p>- <span>Version Control</span></p>
                    <ul>
                      <li>Git</li>
                      <li>SVN</li>
                      <li>Assembla</li>
                    </ul>
                    <p>- <span>Ubuntu Linux</span></p>
                    <p>- <span>Mysql</span></p>
                    <p>- <span>Server Deployment</span></p>
                    <ul>
                      <li>Deployment of Node.js site on Windows</li>
                      <li>Deployment of Node.js site on Ubuntu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

Capability.displayName = "Capability";
Capability.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
};
Capability.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
};

export default Capability;