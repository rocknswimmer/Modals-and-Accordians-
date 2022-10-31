import {useState} from 'react';
import './App.css';
import Modal from './modal';
import Accordion from './accordion';
// import prezyData from './content';

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
      {endPrezy && <button onClick={openModal}>OPEN MODAL EXAMPLE</button>}
      {startPrezy &&
      <Modal
      close={() => {openModal()}}
      content={<button onClick={openAccordian}>OPEN ACCORDION EXAMPLE</button>}
      />}
      {/* will propable need to make an accodion feed */}
      {displayAcc &&
      <Accordion
      title={'ACCORDION EXAMPLE'}
      content={ <button onClick={() => { setDisplayAcc(!displayAcc); setEndPrezy(!endPrezy); }}></button>}
       />}

    </div>
  );
}

export default App;
