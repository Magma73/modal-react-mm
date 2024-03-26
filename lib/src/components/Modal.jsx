// import PropTypes from "prop-types";
// import styles from "./Modal.module.css";
// import closeIcon from "./closeIcon.svg";
// import React, { useEffect } from 'react';

// // import { useRef } from "react";
// // import { useState } from "react";
// // import { forwardRef } from 'react';

// /**
//  * Modal React component.
//  * @param {Object} props - Component props.
//  * @param {boolean} props.isOpen - Indicates if the modal is open.
//  * @param {Function} props.closeModal - Function to close the modal.
//  * @param {ReactNode} props.children - The child elements to display in the modal.
//  * @param {string} [props.customStyles] - Custom styles for the modal.
//  * @returns {JSX.Element} - The modal component.
//  */
// export default function Modal({ isOpen, closeModal, title, titleClose, children, customModal, customContainerInformations, customTitle, customBtnClose, customIconClose, showCloseIcon }) {

//     const handleKeyDown = (event) => {
//         if (event.key === 'Escape') {
//             closeModal();
//         }
//     };

//     console.log('isOpen : ', isOpen);

//     if (isOpen) {
//         window.addEventListener('keydown', handleKeyDown);

//         return (
//             <dialog
//                 open={isOpen}
//                 className={`${styles.modal} ${customModal}`}
//                 onClick={(e) => e.stopPropagation({ closeModal })}
//                 aria-modal="true"
//                 tabIndex="-1"
//                 role="dialog"
//             >
//                 <div className={`${styles.containerInformations} ${customContainerInformations}`}>
//                     <h2 className={`${styles.title} ${customTitle}`}>{title}</h2>
//                     <button
//                         className={`${styles.btnClose} ${customBtnClose}`}
//                         onClick={closeModal}
//                         aria-label="Close Modal"
//                         tabIndex="1"
//                     >
//                         {titleClose}
//                     </button>
//                     {showCloseIcon && (
//                         <img
//                             className={`${styles.picture} ${customIconClose}`}
//                             src={closeIcon}
//                             alt="Close"
//                             onClick={closeModal}
//                             aria-label="Close Modal"
//                             tabIndex="2"
//                         />
//                     )}
//                 </div>

//                 {children}

//             </dialog>
//         );

//     }
//     else {
//         window.removeEventListener('keydown', handleKeyDown);
//         return null;
//     }




// }

// Modal.propTypes = {
//     isOpen: PropTypes.bool.isRequired,
//     closeModal: PropTypes.func.isRequired,
//     title: PropTypes.string.isRequired,
//     titleClose: PropTypes.string.isRequired,
//     children: PropTypes.node,
//     customModal: PropTypes.string,
//     customContainerInformations: PropTypes.string,
//     customTitle: PropTypes.string,
//     customBtnClose: PropTypes.string,
//     customIconClose: PropTypes.string,
//     showCloseIcon: PropTypes.bool,
// }

// Modal.defaultProps = {
//     showCloseIcon: true,
// }

import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import closeIcon from "./closeIcon.svg";
import { forwardRef } from 'react';

const Modal = forwardRef(({ isOpen, closeModal, title, titleClose, children, customModal, customContainerInformations, customTitle, customBtnClose, customIconClose, showCloseIcon }, ref) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    const handleIconKeyDown = (event) => {
        if (event.key === 'Enter') {
            closeModal();
        }

    }

    console.log('isOpen : ', isOpen);

    if (isOpen) {
        window.addEventListener('keydown', handleKeyDown);

        return (
            <dialog
                ref={ref}
                open={isOpen}
                className={`${styles.modal} ${customModal}`}
                onClick={(e) => e.stopPropagation({ closeModal })}
                aria-modal="true"
                tabIndex="-1"
                role="dialog"
            >
                <div className={`${styles.containerInformations} ${customContainerInformations}`}>
                    <h2 className={`${styles.title} ${customTitle}`}>{title}</h2>
                    <button
                        className={`${styles.btnClose} ${customBtnClose}`}
                        onClick={closeModal}
                        aria-label="Close Modal"
                        tabIndex="2"
                    >
                        {titleClose}
                    </button>
                    {showCloseIcon && (
                        <img
                            className={`${styles.picture} ${customIconClose}`}
                            src={closeIcon}
                            alt="Close"
                            onClick={closeModal}
                            onKeyDown={handleIconKeyDown}
                            aria-label="Close Modal"
                            tabIndex="1"
                        />
                    )}
                </div>

                {children}

            </dialog>
        );

    }
    else {
        window.removeEventListener('keydown', handleKeyDown);
        return null;
    }
});

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    titleClose: PropTypes.string.isRequired,
    children: PropTypes.node,
    customModal: PropTypes.string,
    customContainerInformations: PropTypes.string,
    customTitle: PropTypes.string,
    customBtnClose: PropTypes.string,
    customIconClose: PropTypes.string,
    showCloseIcon: PropTypes.bool,
};

Modal.defaultProps = {
    showCloseIcon: true,
};

Modal.displayName = 'Modal';

export default Modal;

