import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalUnstyled = (props) => {
  const { url, title, className, visible, onClose } = props;
  const visibleClass = visible ? "in" : "";
  const modalContentRef = useRef();

  useEffect(() => {
    modalContentRef.current.focus();
  }, []);

  return (
    <div className={className}>
      <div className={`modal-backdrop fade ${visibleClass}`}></div>
      <div className={`modal fade ${visibleClass}`} id="myModal" onClick={onClose}>
        <div className="modal-dialog">
          <div
            className="modal-content"
            ref={modalContentRef}
            tabIndex={1}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal-body">
              <iframe
                title={title}
                className="youtube-player"
                type="text/html"
                width="640"
                height="385"
                src={url}
                frameBorder="0"
                allowFullScreen="">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalUnstyled.displayName = "ModalUnstyled";
ModalUnstyled.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
};
ModalUnstyled.defaultProps = {
  onClose: () => {},
  title: "",
};

const ModalStyled = styled(ModalUnstyled)`
  display: ${props => props.visible ? 'block' : 'none'};
  .modal, modal-backdrop {
    display: ${props => props.visible ? 'block' : 'none'};
  }

  .modal-dialog {
    width: 690px;
    max-width: 690px;
  }

  .modal-content iframe {
    margin: 0 auto;
    display: block;
  }
`;

const Modal = (props) => {
  const { visible: propsVisible, onClose, ...otherProps } = props;
  const[visible, setVisible] = useState(propsVisible);

  useEffect(() => {
    setVisible(propsVisible);
  }, [propsVisible]);

  return (
    <ModalStyled
      visible={visible}
      onClose={() => {
        setVisible(false);
        onClose();
      }}
      { ...otherProps }
    />);
};

Modal.displayName = "Modal";
Modal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};
Modal.defaultProps = {
  visible: true,
  onClose: () => {},
};

export default Modal;