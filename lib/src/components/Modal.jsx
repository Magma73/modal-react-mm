import PropTypes from "prop-types";
import styles from "./Modal.module.css";

/**
 * Modal React component.
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Indicates if the modal is open.
 * @param {Function} props.closeModal - Function to close the modal.
 * @param {ReactNode} props.children - The child elements to display in the modal.
 * @param {string} [props.customStyles] - Custom styles for the modal.
 * @returns {JSX.Element} - The modal component.
 */
export default function Modal({ isOpen, closeModal, children, customStyles }) {
    // const modalRef = useRef(null);

    // useEffect(() => {
    //     if (isOpen) {
    //         // Focus the first focusable element within the modal
    //         const focusableElements = modalRef.current.querySelectorAll(
    //             '[tabIndex]:not([tabIndex="-1"])'
    //         );
    //         if (focusableElements.length > 0) {
    //             focusableElements[0].focus();
    //         }
    //     } else {
    //         // Restore focus to the previously focused element
    //         document.activeElement.blur();
    //     }
    // }, [isOpen]);



    if (isOpen) {
        document.body.style.overflow = 'hidden'
        const dialogElement = document.querySelector('[role="dialog"]');
        console.log(dialogElement);
        dialogElement.focus();

        return (
            <dialog
                open={isOpen}
                className={`${styles.modal} ${customStyles}`}
                onClick={(e) => e.stopPropagation({ closeModal }, console.log(dialogElement))}
                aria-modal="true"
                tabIndex="-1"
                role="dialog"
            >
                {children}
            </dialog>
        )
    } else {
        document.body.style.overflow = 'auto'

        return null
    }

    // if (!isOpen) return null;


    // return (
    //     <dialog
    //         open={isOpen}
    //         className={`${styles.modal} ${customStyles}`}
    //         onClick={(e) => e.stopPropagation({ closeModal })}
    //         // aria-hidden={!isOpen}
    //         aria-modal="true"
    //         tabIndex="-1"
    //         role="dialog"
    //     >
    //         {children}

    //     </dialog>
    // );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node,
    customStyles: PropTypes.string,
}