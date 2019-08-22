import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { getMetaData, getVideoURL } from '../utils';
import {
  Link,
  Modal,
} from '../components';
import { Img } from 'components/imgs';
import { products, subjectDict } from 'shared/data';
import './Product.scss';

const Product = (props) => {
  const meta = getMetaData(props);
  const { activedemo = 'all' } = props.match.params;
  const [modelData, setModelData] = useState(null);

  const matchedProducts = activedemo !== 'all' ?
    products.filter(item => item.keywords.includes(activedemo)) :
    products;
  
  useEffect(() => {
    if (matchedProducts.length === 0) {
      const foundProduct = products.find(product => product.id === activedemo);
      if (foundProduct) {
        const url = getVideoURL(foundProduct.id) || undefined;
        const modalData = {url};
        setModelData(modalData);
      }
    }
  }, [activedemo]);

  const getActiveClassName = (key) => {
    return key === activedemo ? "active" : "";
  };

  return (
    <DocumentMeta {...meta}>
      <div className="product-view">
        <div id="myBtnContainer">
          <Link id="all"
            className={`btn btn-secondary ${getActiveClassName("all")}`}
            to="/product"> All</Link>
          <Link id="featured"
            className={`btn btn-secondary ${getActiveClassName("featured")}`}
            to="/product/featured"> Featured</Link>
          <Link id="workbench"
            className={`btn btn-secondary ${getActiveClassName("workbench")}`}
            to="/product/workbench"> Translation Workbench</Link>
          <Link id="erp"
            className={`btn btn-secondary ${getActiveClassName("erp")}`}
            to="/product/erp"> ERP System</Link>
          <Link id="website"
            className={`btn btn-secondary ${getActiveClassName("website")}`}
            to="/product/website"> Web Products</Link>
          <Link id="msword"
            className={`btn btn-secondary ${getActiveClassName("msword")}`}
            to="/product/msword"> MS Word Development</Link>
          <Link id="scidict"
            className={`btn btn-secondary ${getActiveClassName("scidict")}`}
            to="/product/scidict"> SCIDict</Link>
        </div>

        <div className="demos container-fluid bg-3 text-center works">
          <div className="row">
            {matchedProducts.map((item, key) => {
              const id = item.demo ? item.id : "";
              const demoLink = item.demo ? `/product/${id}` : undefined;
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
                    <div className="tags">
                      {item.keywords.map((keyword, key) =>
                        <Link key={key} to={`/product/${keyword}`}>
                          <span className="badge">
                            {subjectDict[keyword] && subjectDict[keyword].name}
                          </span>
                        </Link>)}
                    </div>
                  </div>
                </div>
              );
            })}
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
      </div>
      {modelData && <Modal
        visible={!!modelData}
        onClose={() => setModelData(null)}
        url={modelData && modelData.url}
      />}
    </DocumentMeta>
  );
};

Product.displayName = "Product";
Product.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
  match: PropTypes.object,
};
Product.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
  match: {},
};

export default Product;
