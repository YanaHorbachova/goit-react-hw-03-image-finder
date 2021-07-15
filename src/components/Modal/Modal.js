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
    const { children } = this.props;

    return createPortal(
      <div className={styles.Overlay} onClick={this.handleOverlayClick}>
        <div className={styles.Modal}>{children}</div>
      </div>,
      modalRoot
    );
}
}

Modal.propTypes = { 
    children: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal; 