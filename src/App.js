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
        close={() => {setStartPrezy(!startPrezy);}}
        content={<div><div>Modal/Dialog - These are for getting work done. (Example: a button that says "Invite Friends" will open such a container with a list friends you can then invite). These let you do more work without having to show all the information on the main screen. These messages are not locked and you can click anywhere to dismiss the container.</div><br/><div>Popup - You don't need to deal with these messages right away, yet at some point you will need to take action since these won't go away until explicitly say say you don't want them around anymore.</div> <br/><button onClick={openAccordian}>OPEN ACCORDION EXAMPLE</button></div>}
      />}
      {/* will propable need to make an accodion feed */}
      {displayAcc &&
      <Accordion
        title={'ACCORDION EXAMPLE'}
        content={
        <div>
          The term stems from the musical accordion in which sections of the bellows can be expanded by pulling outward. A common example of an accordion is the Show/Hide operation of a box region, but extended to have multiple sections in a list.
        <Accordion
        title={'???'}
        content={ <button onClick={() => { setDisplayAcc(!displayAcc); setStartInnerPrezy(!startInnerPrezy); }}>???</button>}
       />
        </div>}
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
         close={() => { setSecondSlide(!secondSlide); }}
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