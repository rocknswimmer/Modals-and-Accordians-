import {useState} from 'react';
import './App.css';
import Modal from './modal';
import Accordion from './accordion';
import {prezyData} from './content';

function App() {
  const [startPrezy, setStartPrezy] = useState(false);
  const [endPrezy, setEndPrezy] = useState(true);
  const [displayAcc, setDisplayAcc] = useState(false);
  const [startInnerPrezy, setStartInnerPrezy] = useState(false);
  const [secondSlide, setSecondSlide] = useState(false);
  const [showData, setShowData] = useState(false);

  const openModal = () => {
    setStartPrezy(!startPrezy);
    setEndPrezy(!endPrezy);
  }
  const openAccordian = () => {
    setStartPrezy(!startPrezy);
    setDisplayAcc(!displayAcc);
  }

  //This is going to be really ugly and bad practice for speed and easy since im using modals and accordians to do a silde show prezy within  a prezy cleaner loop without prezy commented out below
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
        content={ <button onClick={() => { setDisplayAcc(!displayAcc); setStartInnerPrezy(!startInnerPrezy); }}>???</button>}
       />}
       {startInnerPrezy &&
       <Modal
         close={() => { setStartInnerPrezy(!startInnerPrezy); }}
         content={
           <div>
            {prezyData.modalData.firstModal.content} <br/>
            <button onClick={() => { setStartInnerPrezy(!startInnerPrezy); setSecondSlide(!secondSlide); }}>Next Slide</button>
           </div>
        }
       />}
       {secondSlide &&
       <Modal
         close={() => { setStartInnerPrezy(!startInnerPrezy); }}
         content={
           <div>
            {prezyData.modalData.secondModal.content} <br/>
            <button onClick={() => { setShowData(!showData); setSecondSlide(!secondSlide); }}>To Accordion For Data</button>
           </div>
        }
       />}
       {showData &&
       <div>
        <h1>Laughter Data</h1>
        <div>
          {prezyData.accordionData.map(({title, content}, i) => {
            return <Accordion title={title} content={content} key={i} />
          })}
        </div>
        <button onClick={() => { setEndPrezy(!endPrezy); setShowData(!showData); } }>END PREZY</button>
       </div>
       }
    </div>
  );
}
// onClick={() => { setEndPrezy(!endPrezy); setStartInnerPrezy(!startInnerPrezy); }}
export default App;


// <div className="App">
// {endPrezy && <button onClick={openModal}>OPEN MODAL EXAMPLE</button>}
// {startPrezy &&
// <Modal
// close={() => {openModal()}}
// content={<button onClick={openAccordian}>OPEN ACCORDION EXAMPLE</button>}
// />}
// {/* will propable need to make an accodion feed */}
// {displayAcc &&
// <Accordion
// title={'ACCORDION EXAMPLE'}
// content={ <button onClick={() => { setDisplayAcc(!displayAcc); setEndPrezy(!endPrezy); }}></button>}
//  />}
// </div>