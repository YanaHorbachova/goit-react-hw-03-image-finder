import React, { Component } from "React";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from './Modal.module.css'

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {

componentDidMount () {
window.addEventListener("keydown", this.hendleKeyDown);
}

componentWillUnmount() {
window.removeEventListener('keydown', this.handleKeyDown);
}

handleKeyDown = (e) => {
    if (e.code === "Escape") {
        this.props.onClose();
    }
};

handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
        this.props.onClose();
    }
};


render() {
    const { largeImg } = this.props;

    return createPortal(
      <div className={styles.Overlay} onClick={this.handleOverlayClick}>
        <div className={styles.Modal}>
        <img src={largeImg} alt="#" />
        </div>
      </div>,
      modalRoot
    );
}
}

Modal.propTypes = { 
    largeImg: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal; 