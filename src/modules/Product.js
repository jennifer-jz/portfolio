import React from 'react';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { getMetaData } from '../utils';
import {
  Link,
} from '../components';
import { Img } from 'components/imgs';

const Product = (props) => {
  const meta = getMetaData(props);
  return (
    <DocumentMeta {...meta}>
      <div id="myBtnContainer">
        <Link id="all" className="btn btn-secondary active" to="/product"> All</Link>
        <Link id="featured" className="btn btn-secondary" to="/product/featured"> Featured</Link>
        <Link id="workbench" className="btn btn-secondary" to="/product/workbench"> Translation Workbench</Link>
        <Link id="erp" className="btn btn-secondary" to="/product/erp"> ERP System</Link>
        <Link id="website" className="btn btn-secondary" to="/product/website"> Web Products</Link>
        <Link id="msword" className="btn btn-secondary" to="/product/msword"> MS Word Development</Link>
        <Link id="scidict" className="btn btn-secondary" to="/product/scidict"> SCIDict</Link>
      </div>

      <div className="demos container-fluid bg-3 text-center works">
        <div className="row">
          <div className="col-sm-3 workbench featured scidict csharp networking ir">
            <div className="content">
              <Link className="scidictdesk" href="#" title="SCIDict Desktop Version"><p className="title">SCIDict Desktop Version</p></Link>
              <Link href="/png/scidict.png" title="SCIDict Desktop Version">
                <Img src="/png/scidict.png" />
              </Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 workbench csharp networking mssql">
            <div className="content">
              <Link className="workbench_tasklist" href="#" title="Translation Workbench - Task List"><p className="title">Translation Workbench - Task List</p></Link>
              <Link href="/png/workbench-tasklist.jpg" title="Translation Workbench - Task List">
                <Img src="/png/workbench-tasklist.jpg" className="img-responsive" alt="Image" />
              </Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 workbench featured csharp mssql networking nlp">
            <div className="content">
              <p className="title">Translator's Workbench</p>
              <Link href="/png/workbench1.jpg" title="Translation Workbench - Task List"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="workbench_trans3" to="/product/workbench_trans3" title="Translation Workbench - Task List"><Img src="/png/workbench1.jpg" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 workbench featured csharp mssql networking nlp">
            <div className="content">
              <p className="title">Editor's Workbench</p>
              <Link href="/png/workbench-edit.jpg" title="Translation Workbench - Task List"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="workbench_edit3" to="/product/workbench_edit3" title="Translation Workbench - Task List"><Img src="/png/workbench-edit.jpg" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>
            
          <div className="col-sm-3 erp website featured aspnet mssql">
            <div className="content">
              <p className="title">Web Order Submission</p>
              <Link href="/img/orderonline2.jpg" title="ASP.NET Order Submission"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="ordersubmit" to="/product/ordersubmit" title="ASP.NET Order Submission"><Img src="/img/orderonline2.jpg" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 erp csharp mssql">
            <div className="content">
              <p className="title">Internal Order Submission</p>
              <Link href="/png/submitorder2.jpg" title="Internal Order Submission"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="ordersubmit2" to="/product/ordersubmit2" title="Internal Order Submission"><Img src="/png/submitorder2.jpg" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>

          <div className="col-sm-3 erp featured csharp mssql">
            <div className="content">
              <p className="title">Order Management System</p>
              <Link href="/png/ordermanage.jpg" title="C# Order Management System"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="quote3" to="/product/quote3" title="C# Order Management System"><Img src="/png/ordermanage.jpg" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 erp featured csharp mssql">
            <div className="content">
              <p className="title">Project Management System</p>
              <Link href="/png/prjmanage2.png" title="C# Project Management System"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="taskassign_trans2" to="/product/taskassign_trans2" title="C# Project Management System"><Img src="/png/prjmanage2.png" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 erp featured csharp mssql">
            <div className="content">
              <p className="title">Human Resource System</p>
              <Link href="#" title="C# Human Resource System"></Link>
              <Link href="/png/hrmanage.png" title="C# Human Resource System"><Img src="/png/hrmanage.png" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 erp featured csharp mssql">
            <div className="content">
              <Link href="/png/invoicesystem.png" title="C# Invoice System"><p className="title">Invoice System</p></Link>
              <Link id="invoice" to="/product/invoice" title="C# Invoice System"><Img src="/png/invoicesystem.png" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 erp msword featured csharp nlp">
            <div className="content">
              <p className="title">MS Word Document Processing</p>
              <Link href="/png/docprocess1.jpg" title="MS Word Document Processing"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="docprocess2" to="/product/docprocess2" title="MS Word Document Processing"><Img src="/png/docprocess1.jpg" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 erp msword featured csharp nlp">
            <div className="content">
              <p className="title">MS Word Document Generation</p>
              <Link href="/png/docgeneration.jpg" title="MS Word Document Generation"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="docgenerate" to="/product/docgenerate" title="MS Word Document Generation"><Img src="/png/docgeneration.jpg" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>

          <div className="col-sm-3 website bootstrap canvas php mysql">
            <div className="content">
              <Link title="Bootstrap + HTML5 Canvas Seat Selection" href="/img/seat.jpg"><p className="title">Bootstrap + HTML Canvas</p></Link>
              <Link href="/img/seat.jpg"><Img src="/img/seat.jpg" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>

          <div className="col-sm-3 website featured scidict aspnet networking ir">
            <div className="content">
              <p className="title">Bilingual Dictionary</p>
              <Link title="ASP.NET Web Bilingual Dictionary" href="/img/scidict2.jpg"><p className="link"><i className="material-icons">image</i></p></Link>
              <Link href="http://www.scidict.org"><Img src="/img/scidict2.jpg" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 website featured aspnet mssql"> 
            <div className="content">
              <p className="title">User Center</p>
              <Link title="ASP.NET Web User Center" href="/img/usercenter2.jpg"><p className="link"><i className="material-icons">image</i></p></Link>
              <Link href="http://www.scientrans.com/users/login.aspx?email=c290cmFuc0AxMjYuY29t&pass=MTIz"><Img src="/img/usercenter2.jpg" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 website featured aspnet api">
            <div className="content">
              <p className="title">Payment API</p>
              <Link href="/img/yeepay2.jpg" title="Connection to Payment API"><p className="demo"><i className="material-icons">image</i></p></Link>
              <Link id="paymentAPI" to="/product/paymentAPI" title="Connection to Payment API"><Img src="/img/yeepay2.jpg" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 website featured seo"> 
            <div className="content">
              <p className="title">Corporate Website</p>
              <Link title="HTML Corporate Website with SEO" href="/img/scientrans2.jpg"><p className="link"><i className="material-icons">image</i></p></Link>
              <Link href="http://www.scientrans.com">
                <Img src="/img/scientrans2.jpg" className="img-responsive" alt="Image" />
              </Link>
              <div className="tags"></div>
            </div>
          </div>
          <div className="col-sm-3 website seo"> 
            <div className="content">
              <p className="title">CMS website</p>
              <Link title="CMS website: Translation Samples Center" href="/img/samplecenter2.jpg"><p className="link"><i className="material-icons">image</i></p></Link>
              <Link href="http://fanyiyangli.scientrans.com" title="CMS website: Translation Samples Center" ><Img src="/img/samplecenter2.jpg" className="img-responsive" alt="Image" /></Link>
              <div className="tags"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-3 works">
        <h4>Functional Modules</h4>
        <div className="inlinelist">
          <ul>
            <li>Email Notifications</li>
            <li>Pricing System</li>
            <li>File Upload/Download</li>
            <li>Automatic Webpage Content Updating</li>
            <li>MS Word Content Extraction and Generation</li>
            <li>MS PPT Content Extraction and Generation</li>
            <li>Real-time Spell Check</li>
            <li>Sentence Alignment</li>
            <li>File Management</li>
            <li>Corpus Management System</li>
            <li>Text Classification</li>
            <li>Text Clustering</li>
          </ul>
        </div>
      </div>
    </DocumentMeta>
  );
};

Product.displayName = "Product";
Product.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
};
Product.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
};

export default Product;
