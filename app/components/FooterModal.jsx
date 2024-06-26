'use client'
import { useRef } from "react";

const FooterModal = ({ title }) => {
        const inputRef = useRef();

        return (
        <div>
            <button 
                className={`link-hover`} 
                onClick={()=>{inputRef.current.showModal()}}>
                    {title}
            </button>

            <dialog ref={inputRef} id="my_modal_1" className="modal">
                <div className="modal-box prose">
                    <p className="py-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
        );
    }

export default FooterModal;