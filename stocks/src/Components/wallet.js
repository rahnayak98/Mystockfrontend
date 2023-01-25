import React , { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import Createwallet from './createwallet';
import axios from 'axios';
import {useSelector , useDispatch} from "react-redux";


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
  const [amount, setAmount] = useState(0);
  const userId=useSelector((state) => state.userInfo.userId);

  const handleChange = (event) => {
    const {name, value} = event.target
    setAmount( value)
  };
  function handleSubmit() {
    const body = { 
      "email" : userId,
      "amount": amount
    }
     axios.post('http://192.168.0.35:8080/wallet/amount', body)
        .then(res => {
          alert("Wallet top up successfully")
        })
        .catch(() =>{
          alert("Error -")
        })
  }
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
    <input name="amount" type="text" id="input1" class="form-control" onChange={handleChange} />
    
</div>
</center>

     <center>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
        
      </Button>
      </center>
   
    
        </div>
    </div>
    
  )
}

export default Wallet