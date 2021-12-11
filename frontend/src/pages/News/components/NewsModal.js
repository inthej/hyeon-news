import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import './NewsModal.css';

const NewsModal = props => {
  const {isOpen, url} = props;
  const [state, setState] = useState({showModal: false, url: undefined});

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      showModal: isOpen,
      url: url
    }));
  }, [isOpen, url]);

  const handleCloseModal = () => {
    setState(prevState => ({
      ...prevState,
      showModal: false,
      url: undefined
    }));
  }

  return (
    <Modal
      isOpen={state.showModal}
      onRequestClose={handleCloseModal}
    >
      <div style={{display: "flex", justifyContent:"right", alignItems: "center", position: "sticky", top: 0}}>
        <button onClick={handleCloseModal}>닫기</button>
      </div>
      <div style={{height: '100%'}}>
        {state.url && <iframe src={state.url} frameBorder="0" width="100%" height="100%" />}
      </div>
    </Modal>
  )
}

React.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  url: PropTypes.string
}

export default NewsModal;
