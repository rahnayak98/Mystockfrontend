import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Createwallet = (props) => {
  return (
    <div style={{ display: 'block', 
                  width: 1200, 
                  padding: 60 }}>
    <div>
        <div>
        <Form>
        <p class="mt-3 mb-1" >
    <center>Enter Account number</center>
</p>
<center>
<div class="form-outline w-25">
    <input type="text" id="input1" class="form-control" />
    
</div>
</center>
<p class="mt-3 mb-1" >
    <center>Enter Amount</center>
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
    </div>
  )
}

export default Createwallet