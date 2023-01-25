import React , { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import Buystock from './Buystock';
import Sellstock from './Sellstock';



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
        <p><Buystock/></p>
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
        <p><Sellstock/></p>
        <button onClick={closeDialog1}>Close</button>
      </Modal>
    );
  };

const Buysellstock = (props) => {

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
  return (
    <div>
        <div className='container'>
      <Button variant="primary" onClick={() => openDialog('This is some dialog text')}>
        Buy
      </Button>
      {showDialog && <DialogBox closeDialog={closeDialog} dialogText={dialogText} />}
            
            
      <Button variant="primary" onClick={() => openDialog1('This is some dialog text')}>
      Sell
      </Button>
      {showDialog1 && <DialogBox1 closeDialog1={closeDialog1} dialogText1={dialogText1} />}
        </div>
    </div>
  )
}

export default Buysellstock