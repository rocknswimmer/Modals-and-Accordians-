import './modal.css';

const Modal = (props) => {

  // the css on these elements are what really make the modal a pop up
  return (
    <div className="modal">
      <div className="modal-pop">  {/* where the modal content will go */}
         <div className='modal-close'> <button onClick={() => { props.close(); }}>x</button> </div>
        {props.content}
      </div>
      <div className="modal-overlay"></div>
    </div>
  );
};

export default Modal;