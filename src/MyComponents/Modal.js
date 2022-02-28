import React from 'react'

function Modal({ closeModal }) {
    return (
        <div className="modalBackground">
                <div className="titleCloseBtn">
                    <button className="closeBtn" onClick={() => closeModal(false)}>
                        X
                    </button>
                </div>
                <div className="title">
                    <h2>SUCCESSFUL</h2>
                </div>
                <div className="body">
                    <p>Thank you for your submission. Will reach out soon!!</p>
                </div>
                <div className="footer">
                    <button className="cancelBtn" onClick={() => closeModal(false)}> Cancel </button>
                </div>
        </div>
    );
}

export default Modal