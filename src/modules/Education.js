import React from 'react';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { getMetaData } from '../utils';
import { Link } from '../components';

const Education = (props) => {
  const meta = getMetaData(props);
  const { subject } = props;

  return (
    <DocumentMeta {...meta}>
      <div className="container-fluid bg-3 works">
        <div className="list">
          <div className="subtitle">Education</div>
          <p>2016.08 - 2018.12 <span>MS in Computer Science</span> The University of Texas at Dallas, Richardson, Texas</p>
          <p>2001.09 - 2005.07 <span>BS in Chemistry</span> Peking University, Beijing, China</p>
        </div>
        
        <div className="inlinelist courses">
          <div className="subtitle">Courses</div>
          <div>
            <i className="fa fa-caret-right"></i>
            <p>Artificial Intelligence</p>
            <p className={ subject === "nlp" ? "active" : "" }><Link to="/education/nlp">Natural Language Processing</Link></p>
            <p className={ subject === "ir" ? "active" : "" }><Link to="/education/ir">Information Retrieval</Link></p>
            <p className={ subject === "ml" ? "active" : "" }><Link to="/education/ml">Machine Learning</Link></p>
            <p>Computer Vision</p>
          </div>
          <div>
            <i className="fa fa-caret-right"></i>
            <p className={ subject === "algorithm" ? "active" : "" }><Link to="/education/algorithm">Algorithm Analysis and Data Structures</Link></p>
            <p>Database Design</p>
            <p className={ subject === "os" ? "active" : "" }><Link to="/education/os">Operating Systems Concepts</Link></p>
            <p>Discrete Structure</p>
            <p>Computer Architecture</p>
          </div>
          <div>
            <i className="fa fa-caret-right"></i>
            <p>Cloud Computing</p>
            <p className={ subject === "web" ? "active" : "" }><Link to="/education/web">Web Programming Languages</Link></p>
            <p className={ subject === "hci" ? "active" : "" }><Link to="/education/hci">Human Computer Interaction</Link></p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="panel-group">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <Link to="/education">Course Projects</Link>
                  </h4>
                </div>
                <div id="courseprj">
                  <div className="panel-body courseprj">
                    <p className="java algorithm">2016.08 – 2016.12 <span>AVL Tree Operations: Insert and Inorder Traversal</span></p>
                    <p className="algorithm java">2016.08 – 2016.12 <span>Design of a Hash Table for University students</span></p>
                    <p className="algorithm java">2016.08 – 2016.12 <span>DFS and BFS Traversal of a Graph</span></p>
                    <p className="algorithm java">2016.08 – 2016.12 <span>Finding Shortest Path in a Graph using Dijkstra’s Algorithm</span></p>
                    <p className="os java unix">2017.02 – 2017.04 <span>Simulation of Multiple Processes and IPC</span></p>
                    <p className="os java unix">2017.03 – 2017.04 <span>Simulation of Post Office with Threads and Semaphores</span></p>
                    <p className="os java unix">2017.03 – 2017.04 <span>Implementing Network Communication Using Sockets</span></p>
                    <p className="web bootstrap html css bootstrap">2017.05 – 2017.06 <span>A Personal Website </span>
                      <Link href="http://www.utdallas.edu/~jxz161030">
                        <i className="fa fa-link"></i>
                      </Link>
                    </p>
                    <p className="web bootstrap html css php mysql jquery">2017.06 – 2017.07 <span>Form Validation for User Login</span></p>
                    <p className="web ajax php html css mysql">2017.06 – 2017.07 <span>Populating Historical Baby Names from External Data Source</span></p>
                    <p className="web ajax php html css mysql bootstrap javascript jquery">2017.06 – 2017.07 <span>A Music Concert Ticket Ordering Website</span></p>
                    <p className="web rest php html">2017.06 – 2017.07 <span>Implementing a RESTful web service using PHP</span></p>
                    <p className="web angular node mean">2017.06 – 2017.07 <span>A Video Rental Web Application using MEAN Stack</span></p>
                    <p className="hci android game">2018.02 – 2018.04 <span>Implementation of Barrel Race Game using Android</span></p>
                    <p className="ir java">2017.03 – 2017.04 <span>Building Uncompressed/Compressed Stemmatized/Lemmatized Indexes for a Statistical Retrieval System</span></p>
                    <p className="ir java">2017.03 – 2017.04 <span>Implementation of A Statistical Relevance Model for Retrieval System Based on Vector Relevance Model</span></p>
                    <p className="ir java">2017.02 – 2017.03 <span>Query Expansion using Rocchio Algorithm and Local Clustering</span></p>
                    <p className="ir java javascript">2017.02 – 2017.04 <span>A Web Search Engine of Computer Algorithm</span></p>
                    <p className="nlp java corenlp">2017.02 – 2017.04 <span>A Coarse Logic Representation of News Articles</span></p>
                    <p className="ml java classification">2018.02 – 2018.04 <span>Implementation of Naïve Bayes Tree, Logistic Regression, and Perceptron for Text Classification</span></p>
                    <p className="ml java classification">2018.02 – 2018.04 <span>Implementation of Mixture of Tree Bayesian Networks using Expectation Maximization</span></p>
                    <p className="ir java">2017.02 – 2017.04 <span>Inverted Index Building and Compression for Search Engine</span></p>
                    <p className="ir java">2017.02 – 2017.04 <span>Tokenization of the Cranfield Collection</span></p>
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

Education.displayName = "Education";
Education.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
};
Education.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
};

export default Education;
