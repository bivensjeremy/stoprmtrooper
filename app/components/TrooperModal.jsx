'use client'
import Link from "next/link";
import { useRef } from "react";

const TrooperModal = ({ title, desc, descLink }) => {
        const inputRef = useRef();

        return (
        <div>
            <button 
                className={`btn btn-primary `} 
                onClick={()=>{inputRef.current.showModal()}}>
                    Learn More
            </button>

            <dialog ref={inputRef} id="my_modal_1" className="modal">
                <div className="modal-box prose">
                    <h1 className="font-bold text-lg">
                        {title}
                    </h1>

                    <p className="py-4 text-justify">{desc}</p>

                    <Link href={descLink} className="italic">{descLink}</Link>
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
      


//     return (
//         <div>
//             {/* Open the modal using document.getElementById('ID').showModal() method */}
// <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
// <dialog id="my_modal_1" className="modal">
//   <div className="modal-box">
//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click the button below to close</p>
//     <div className="modal-action">
//       <form method="dialog">
//         {/* if there is a button in form, it will close the modal */}
//         <button className="btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog>
//         </div>
//     );
// }

export default TrooperModal;