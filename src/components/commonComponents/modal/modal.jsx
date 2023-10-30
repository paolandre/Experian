import React from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import "./modal.css";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    const handleOverlayClick = (e) => {
        e.stopPropagation();
        onClose();
    };

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={handleContentClick}>
                <div className="close-container">
                    <button className="close-button" onClick={onClose}>x</button>
                </div>
                <div className="modal-header">
                    <IoPersonCircleSharp className="text-gray-icon" size={40} />
                    <span className='font-bold pl-1.5 text-2xl'>ID 73136301</span>
                </div>
                <div className="modal-body">
                    <div className="authorized-exceptions pb-1.5">
                        <span className={`py-0.5 text-sm px-2 rounded-full bg-yellow-icon text-black`}>
                            Authorized exceptions
                        </span>
                    </div>
                    <div className="time-range">
                        <AiOutlineClockCircle className="text-black" size={30} />
                        <div className=' pl-2'>
                            <div><strong>Start:</strong> Tuesday 8, 2023</div>
                            <div><strong>End:</strong> Thursday 10, 2023</div>
                        </div>
                    </div>
                    <div className="request-description">
                        <BiMessageDetail className="text-black" size={30} />
                        <div className=' pl-2'>
                            <div><strong>Request descriptions:</strong></div>
                            <div>Licencia personal por grado de mi hija</div>
                        </div>
                    </div>
                    <div className="message-to-collaborator py-3">
                        <strong className='text-custom-gray'>Message to collaborator</strong>
                        <textarea
                            className="message-textarea"
                            maxLength={1000}
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="send-button font-bold">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
