import React , { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import Createwallet from './createwallet';

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
      <p><Createwallet/></p>
      <button onClick={closeDialog}>Close</button>
    </Modal>
  );
};







const Wallet = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogText, setDialogText] = useState('');

  const openDialog = (text) => {
    setDialogText(text);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };
  return (
    <div >
        <div style={{ display: 'block', 
                  width: 1200, 
                  padding: 60 }}>
       
        <Form>
        <p class="mt-3 mb-1" >

        <center>
      <Button variant="primary" onClick={() => openDialog('This is some dialog text')}>
        Create Wallet
        
        
      </Button>
      {showDialog && <DialogBox closeDialog={closeDialog} dialogText={dialogText} />}
      </center>
    <center>Enter Amount to be loaded</center>
</p>
<center>
<div class="form-outline w-25">
    <input type="text" id="input1" class="form-control" />
    
</div>
</center>

     <center>
      <Button variant="primary" type="submit">
        Submit
        
      </Button>
      </center>
    </Form>
    
        </div>
    </div>
    
  )
}

export default Wallet