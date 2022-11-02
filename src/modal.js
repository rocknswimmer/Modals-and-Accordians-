import './modal.css';

const Modal = ({close, content}) => {

  // the css on these elements are what really make the modal a pop up
  return (
    <div className="modal"> {/*The container for the two components that will make up the modal */}
      <div className="modal-pop">  {/* Where the modal content will go including the close button */}
         <div className='modal-close'> <button onClick={() => { close(); }}>x</button> </div>
        {content}
      </div>
      <div className="modal-overlay" onClick={() => { close(); }}></div> {/* the element that covers up the rest of the site */}
    </div>
  );
};

export default Modal;