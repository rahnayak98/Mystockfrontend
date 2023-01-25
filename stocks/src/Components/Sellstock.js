import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const Sellstock = (props) => {
  return (
    <div>
       <div style={{ display: 'block', 
                  width: 1200, 
                  padding: 60 }}>
      <center>
      <p class="mt-3 mb-1" >
    <center>Enter Quantity of stock</center>
</p>
<center>
<div class="form-outline w-25">
    <input type="text" id="input1" class="form-control" />
    
</div>

</center>

</center>
<center>
      <Button variant="primary" type="submit">
        Submit
        
      </Button>
      </center>
    </div>
    </div>
  )
}

export default Sellstock