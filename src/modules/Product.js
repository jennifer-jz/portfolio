import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DocumentMeta from 'react-document-meta';
import { getMetaData, getVideoURL } from '../utils';
import {
  Link,
  Modal
} from 'components';
import { products } from 'shared/data';
import { productNavs } from 'shared/navigation';
import DemoItem from './common/DemoItem';
import styles from './Product.styles';
import { Tabs, SmallTab } from '../components';

const Product = (props) => {
  const meta = getMetaData(props);
  const { subject = 'all', activedemo = '' } = props.match.params;
  const [modelData, setModelData] = useState(null);
  const [currTabId, setCurrTabId] = useState(0);

  const matchedProducts = subject !== 'all' ?
    products.filter(item => item.keywords.includes(subject)) :
    products;
  
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

  const getActiveClassName = (key) => {
    return key === subject ? "active" : "";
  };

  const handleTabChange = (e, tabId) => {
    setCurrTabId(tabId);
  };

  return (
    <DocumentMeta {...meta}>
      <div className={`product-view ${props.className}`}>
        <div className="row">
          <div>
            <Tabs variant="standard" orientation="vertical" value={currTabId} onChange={handleTabChange}>{
              productNavs.map((item, key) => {
                const className = getActiveClassName(item.name);
                const isDull = className !== "active";

                return (<SmallTab key={key} label={<Link
                  to={`/product/${item.name}`}
                  dull={isDull}
                >
                  {item.title}
                </Link>} />);
              })
            }</Tabs>
          </div>
          <div className="col-md-9">
            <div className="demos container-fluid">
              <div className="row">
                {matchedProducts.map((item, key) =>(
                  <DemoItem
                    key={key}
                    data={item}
                    large
                    urlHead={`/product/${subject}`}
                  />))}
              </div>
            </div>
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
  className: PropTypes.string,
};
Product.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  subject: "",
  match: {},
  className: "",
};

const ProductStyled = styled(Product)`${styles}`;

export default ProductStyled;
