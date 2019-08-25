import React from 'react';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { getMetaData } from '../utils';
import { Link } from '../components';
import { Img } from 'components/imgs';

const Nlp = (props) => {
  const meta = getMetaData(props);
  return (
    <DocumentMeta {...meta}>
      <div className="container-fluid bg-3 works">
        <div className="row">
          <div className="col-md-8">
            <div className="panel-group">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <Link href="#Responsibilities" openNew={false}>Natural Language Processing (NLP) Projects</Link>
                  </h4>
                </div>
                <div id="Responsibilities">
                  <div className="panel-body courseprj">
                    <p className="ir java">
                      2017.03 – 2017.04 
                      <span>
                        Building Uncompressed/Compressed Stemmatized/Lemmatized Indexes for a Statistical Retrieval System
                      </span>
                    </p>
                    <p className="ir java">
                      2017.03 – 2017.04 
                      <span>
                        Implementation of A Statistical Relevance Model for Retrieval System Based on Vector Relevance Model
                      </span>
                    </p>
                    <p className="ir java">
                      2017.02 – 2017.03 
                      <span>
                        Query Expansion using Rocchio Algorithm and Local Clustering
                      </span>
                    </p>
                    <p className="ir java javascript">
                      2017.02 – 2017.04 
                      <span>
                        A Web Search Engine of Computer Algorithm
                      </span>
                    </p>
                    <p className="nlp java corenlp">
                      2017.02 – 2017.04 
                      <span>
                        A Coarse Logic Representation of News Articles
                      </span>
                    </p>
                    <p className="ml java classification">
                      2018.02 – 2018.04 
                      <span>
                        Implementation of Naïve Bayes Tree, Logistic Regression, and Perceptron for Text Classification
                      </span>
                    </p>
                    <p className="ml java classification">
                      2018.02 – 2018.04 
                      <span>
                        Implementation of Mixture of Tree Bayesian Networks using Expectation Maximization
                      </span>
                    </p>
                    <p className="ir java">
                      2017.02 – 2017.04 
                      <span>
                        Inverted Index Building and Compression for Search Engine
                      </span>
                    </p>
                    <p className="ir java">
                      2017.02 – 2017.04 
                      <span>
                        Tokenization of the Cranfield Collection
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-group">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <Link href="#Responsibilities" openNew={false}>Products Demonstration</Link>
                  </h4>
                </div>
                <div id="Responsibilities">
                  <div className="panel-body">
                    <div className="bg-3 text-center works">    
                      <div className="row">
                        <div className="col-sm-3"> 
                          <Link href="http://www.scidict.org/termtrans/">
                            <p>Text Analysis</p>
                          </Link>
                          <Link title="Text Analysis (NLP)" href="http://www.scidict.org/termtrans/">
                            <Img src="/img/textanalysis.jpg" />
                          </Link>
                        </div>
                        <div className="col-sm-3"> 
                          <Link href="/img/term_pair_check.png"><p>Translation Workbench</p></Link>
                          <Link title="Translation Workbench" href="/img/term_pair_check.png">
                            <Img src="/img/term_pair_check.png" />
                          </Link>
                        </div>
                        <div className="col-sm-3"> 
                          <Link href="/img/related_word.png"><p>Word Suggestion</p></Link>
                          <Link title="Word Suggestion" href="/img/related_word.png">
                            <Img src="/img/related_word.png" />
                          </Link>
                        </div>
                        <div className="col-sm-3">
                          <Link href="/img/find_replace.png"><p>Keyword Highlight in Bilingual Texts</p></Link>
                          <Link title="Keyword Highlight in Bilingual Texts" href="/img/find_replace.png">
                            <Img src="/img/find_replace.png" />
                          </Link>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel-group">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <Link href="#Responsibilities" openNew={false}>NLP Skill Set</Link>
                  </h4>
                </div>
                <div id="Responsibilities">
                  <div className="panel-body">
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

Nlp.displayName = "Nlp";
Nlp.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
};
Nlp.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
};

export default Nlp;
