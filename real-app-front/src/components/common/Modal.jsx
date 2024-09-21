import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import '../../styles/modal.css'

function Modal({ id, title, body, onClose, onConfirm, showModal }) {
    const modalRef = useRef(null)

    return (
        <CSSTransition
            nodeRef={modalRef}
            in={showModal}
            timeout={300}
            classNames="modal"
            unmountOnExit>
            <div
                ref={modalRef}
                className="modal fade show"
                id={id}
                tabIndex="-1"
                aria-labelledby={`${id}Label`}
                aria-hidden="true"
                style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">{body}</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={onConfirm}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Modal



