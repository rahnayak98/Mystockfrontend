import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React , { useState } from 'react'
import Button from 'react-bootstrap/Button';
//import React, { useState } from 'react';
import Modal from 'react-modal';
import Buystock from './Buystock';
import Wallet from './wallet';
import GetTraansactions from './Gettransactions';
import { useNavigate } from 'react-router-dom';



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
        <p><Wallet/></p>
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
        <p><GetTraansactions/></p>
        <button onClick={closeDialog1}>Close</button>
      </Modal>
    );
  };




function Header() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogText, setDialogText] = useState('');
  const navigate = useNavigate();
  function logOut() {
    navigate('/auth')
  
  }
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
    <>
      
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MyStock App</Navbar.Brand>
          <Nav className="me-auto">
          <div className='container'>
          <Button class="btn btn-primary w-25" onClick={() => openDialog('This is some dialog text')}>
      Wallet
      </Button>
      {showDialog && <DialogBox closeDialog={closeDialog} dialogText={dialogText} />}
      
      <Button class='btn1' variant="primary" onClick={() => openDialog1('This is some dialog text')}>
      History
      </Button>
      {showDialog1 && <DialogBox1 closeDialog1={closeDialog1} dialogText1={dialogText1} />}
      
      <Button  variant="primary" onClick={logOut}>
      Log Out
      </Button>
      {showDialog && <DialogBox closeDialog={closeDialog} dialogText={dialogText} />}
      </div>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default Header;