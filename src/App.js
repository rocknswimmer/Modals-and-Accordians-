import {useState} from 'react';
import './App.css';
import Modal from './modal';

function App() {
  const [startPrezy, setStartPrezy] = useState(false);
  const [endPrezy, setEndPrezy] = useState(true);
  const [displayAcc, setDisplayAcc] = useState(false);

  const openModal = () => {
    setStartPrezy(!startPrezy);
    setEndPrezy(!endPrezy);
  }
  const openAccordian = () => {
    setStartPrezy(!startPrezy);
    setDisplayAcc(!displayAcc);
  }


  return (
    <div className="App">
      {endPrezy && <button onClick={openModal}>OPEN MODAL</button>}
      {startPrezy &&
      <Modal
      close={() => {openModal()}}
      content={<button onClick={openAccordian}>open accordian</button>}
      />}
      {displayAcc && <div>accordian here</div>}

    </div>
  );
}

export default App;
