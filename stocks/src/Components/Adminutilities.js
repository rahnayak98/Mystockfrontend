import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import Createstock from './createstock';
import Changemarkettime from './Changemarkettime';
import StockMarketSchedule from './Changemarketschedule';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const DialogBox = ({ closeDialog, dialogText }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeDialog}
      style={customStyles}
    >
      <p><Createstock/></p>
      <button onClick={closeDialog}>Close</button>
    </Modal>
  );
};

const DialogBox1 = ({ closeDialog1, dialogText1 }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeDialog1}
      style={customStyles}
    >
     <center>
      <p>Select date on which market will be on holiday<StockMarketSchedule/></p>
      
      </center>
      
      <button onClick={closeDialog1}>Close</button>
    </Modal>
  );
};

const DialogBox2 = ({ closeDialog2, dialogText2 }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeDialog2}
      style={customStyles}
    >
     <center>
      <p>Start Time:<Changemarkettime/></p>
      <p>End  Time:<Changemarkettime/></p>
      </center>
      
      <button onClick={closeDialog2}>Close</button>
    </Modal>
  );
};

const Adminutilities = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogText, setDialogText] = useState('');

  const openDialog = (text) => {
    setDialogText(text);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };


  const [showDialog1, setShowDialog1] = useState(false);
  const [dialogText1, setDialogText1] = useState('');

  const openDialog1 = (text) => {
    setDialogText1(text);
    setShowDialog1(true);
  };

  const closeDialog1 = () => {
    setShowDialog1(false);
  };


  const [showDialog2, setShowDialog2] = useState(false);
  const [dialogText2, setDialogText2] = useState('');

  const openDialog2 = (text) => {
    setDialogText2(text);
    setShowDialog2(true);
  };

  const closeDialog2 = () => {
    setShowDialog2(false);
  };


  return (
    <div className='container'>
      <Button variant="primary" onClick={() => openDialog('This is some dialog text')}>
      Create Stock
      </Button>
      {showDialog && <DialogBox closeDialog={closeDialog} dialogText={dialogText} />}
      <Button variant="primary" onClick={() => openDialog1('This is some dialog text')}>
      Change Market Schedule
      </Button>
      {showDialog1 && <DialogBox1 closeDialog1={closeDialog1} dialogText1={dialogText1} />}
      <Button variant="primary" onClick={() => openDialog2('This is some dialog text')}>
      Change Market time
      </Button>
      {showDialog2 && <DialogBox2 closeDialog2={closeDialog2} dialogText2={dialogText2} />}
    </div>
  );







  return (
    <div>
        <div className='container'>
          <Button variant="primary" >Create Stock</Button>
          <Button variant="primary">Change Market time</Button>
          <Button variant="primary">Change Market schedule</Button>
        </div>
    </div>
  )
}

export default Adminutilities