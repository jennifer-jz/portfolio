import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { productNavs } from 'shared/navigation';
import { Img } from 'components/imgs';
import {
  Badge,
  Link,
} from 'components';
import { filterNonHtmlProps } from 'utils';

const DemoItemUnstyled = (props) => {
  const { className, urlHead, data: item, large, ...otherProps } = props;

  // const isNavigable = (keyword) => {
  //   return !!productNavs.find(item => item.name === keyword);
  // };

  const id = item.demo ? item.id : "";
  const demoLink = item.demo ? `${urlHead}/${id}` : undefined;
  const url = item.url || undefined;
  const caption = item.caption || item.title;
  const imgUrl = item.img;
  const imgFullUrl = item.imgFull || item.img;
  const externalUrl = !item.demo ? url || imgFullUrl : undefined ;

  return (
    <div
      className={`${large ? 'col-sm-6' : 'col-sm-3'} ${className}`}
      { ...filterNonHtmlProps(otherProps) }
    >
      <div className="content">
        {<p className="title">{item.title}</p>}
        {item.demo && <Link id={id} to={demoLink} title={caption}>
          <Img title={caption} src={imgUrl} />
        </Link>}
        {!item.demo && <Link href={externalUrl} title={caption}>
          <Img title={caption} src={imgUrl} />
        </Link>}
        {item.demo && <Badge
          large
          keyword="View Demo"
          to={demoLink}
        >
          
        </Badge>}
        {/* <div className="tags">
          {item.keywords.map((keyword, key) =>
            <Badge
              key={key}
              keyword={keyword}
              to={isNavigable(keyword) ? `/product/${keyword}` : undefined}
            ></Badge>
          )}
        </div> */}
      </div>
    </div>
  );
};

DemoItemUnstyled.displayName = "DemoItemUnstyled";
DemoItemUnstyled.propTypes = {
  className: PropTypes.string,
  urlHead: PropTypes.string,
  data: PropTypes.object,
  large: PropTypes.bool,
};
DemoItemUnstyled.defaultProps = {
  className: '',
  urlHead: '',
  data: {},
  large: false,
};

const DemoItem = styled(DemoItemUnstyled)`
  margin: 15px 0;
  border-radius: 2px;

  .content {
    background-color: #f2f4f4;
    padding: 10px;
    position: relative;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.35);
      transform: translate(0, -10px);
      opacity: 1;

      .badge {
        display: block;
        z-index: 10;
      }

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #202121;
        opacity: 0.3;
        z-index: 0;
      }
    }

    .badge {
      display: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .title {
      font-weight: bold;
      background: #E5E7E9;
      color: black;
      padding: 2px 5px;
      opacity: 0.7;
    }
  
    .tags {
      margin-top: 5px;
      text-align: left;

      .badge {
          margin-right:5px;
      }
    }
  }
`;

export default DemoItem;