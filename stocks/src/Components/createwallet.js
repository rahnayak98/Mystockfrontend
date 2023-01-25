import React , { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {useSelector , useDispatch} from "react-redux";


const Createwallet = (props) => {
  const [wallet, setWallet] = useState({
    accNo:"",
    pwd:""
  });
  const userId=useSelector((state) => state.userInfo.userId);

  const handleChange = (event) => {
    const {name, value} = event.target
    setWallet(prevuserData => ({
        ...prevuserData,
        [name]: value
    }))
  };
  function handleSubmit() {
    const body = { 
      "email" : userId,
      "accountNumber": wallet.accNo,
      "password":wallet.pwd
    }
     axios.post('http://192.168.0.35:8080/wallet', body)
        .then(res => {
          alert("Wallet created successfully")
        })
        .catch(() =>{
          alert("Error -")
        })
  }
  return (
    <div style={{ display: 'block', 
                  width: 1200, 
                  padding: 60 }}>
    <div>
        <div>
        <p class="mt-3 mb-1" >
    <center>Enter Account number</center>
</p>
<center>
<div class="form-outline w-25">
    <input name="accNo" type="text" id="input1" class="form-control" onChange={handleChange}/>
    
</div>
</center>
<p class="mt-3 mb-1" >
    <center>Enter Amount</center>
</p>
<center>
<div class="form-outline w-25">
    <input name="pwd" type="text" id="input" class="form-control" onChange={handleChange}/>
    
</div>


</center>




     <center>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
        
      </Button>
      </center>
        </div>
    </div>
    </div>
  )
}

export default Createwallet