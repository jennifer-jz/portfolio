import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Img } from 'components/imgs';
import {
  Badge,
  Link,
} from 'components';
import { filterNonHtmlProps } from 'utils';
import { FONT_COLOR, TITLE_BACKGROUND, CONTENT_BACKGROUND } from 'shared/styles';

const DemoItemUnstyled = (props) => {
  const { className, urlHead, data: item, large, ...otherProps } = props;
  const id = item.demo ? item.id : "";
  const demoLink = item.demo ? `${urlHead}/${id}` : undefined;
  const url = item.url || undefined;
  const caption = item.caption || item.title;
  const imgUrl = item.img;
  const imgFullUrl = item.imgFull || item.img;
  const externalUrl = !item.demo ? url || imgFullUrl : undefined ;

  const renderDemoVideo = () => {
    return (
      <>
        <Link id={id} to={demoLink} title={caption}>
          <Img title={caption} src={imgUrl} />
        </Link>
        <Badge
          large
          keyword="Demo Video"
          to={demoLink}
        />
      </>
    );
  };

  const renderScreenshot = () => {
    return (
      <>
        <Link href={externalUrl} title={caption}>
          <Img title={caption} src={imgUrl} />
        </Link>
        <Badge
          large
          keyword="View Screenshot"
          href={externalUrl}
        />
      </>
    );
  };

  const renderLiveDemo = () => {
    return (
      <>
        <Link href={externalUrl} title={caption}>
          <Img title={caption} src={imgUrl} />
        </Link>
        <Badge
          large
          keyword="Live Demo"
          href={externalUrl}
        />
      </>
    );
  };

  return (
    <div
      className={`${large ? 'col-lg-12' : ''} ${className}`}
      { ...filterNonHtmlProps(otherProps) }
    >
      <div className="content">
        {<p className="title">{item.title}</p>}
        {item.demo && renderDemoVideo()}
        {!item.demo && item.url && renderLiveDemo()}
        {!item.demo && !item.url && renderScreenshot()}
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
  margin: 15px auto;
  border-radius: 2px;

  .content {
    background-color: ${CONTENT_BACKGROUND};
    padding: 10px;
    position: relative;
    transition: all 0.3s ease-in-out;

    > a > .imageloader {
      & > img, & > .preloader {
        ${props => props.large ? `
          height: auto;
        ` : `
          height: 150px;
          width: 280px;
        `}
        margin: 0 auto;
      }
      & > .preloader {
        ${props => props.large ? `
          @media (min-width: 768px) {
            height: 500px;
          }
          @media (min-width: 576px) and (max-width: 768px) {
            height: 300px;
          }
          @media (max-width: 576px) {
            height: 100px;
          }
        ` : ''}
      }
    }

    p.title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.35);
      transform: translate(0, -10px);
      opacity: 1;

      p.title {
        font-size: 1rem;
        white-space: normal;
        position: absolute;
      }

      .imageloader {
        margin-top: 2.5rem;
      }

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
      background: ${TITLE_BACKGROUND};
      color: ${FONT_COLOR};
      padding: 2px 5px;
      opacity: 0.7;
      transition: font-size 0.5s ease-in-out;
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