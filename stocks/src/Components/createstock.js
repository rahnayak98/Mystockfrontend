import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const createstock = (props) => {
    return (
        <div  >
        <div style={{ display: 'block', 
                  width: 1200, 
                  padding: 60 }}>
       
       
        <Form>
        <p class="mt-3 mb-1" >
    <center>Enter Stock name</center>
</p>
<center>
<div class="form-outline w-25">
    <input type="text" id="input1" class="form-control" />
    
</div>
</center>
<p class="mt-3 mb-1" >
    <center>Enter Stock Price</center>
</p>
<center>
<div class="form-outline w-25">
    <input type="text" id="input1" class="form-control" />
    
</div>
</center>

<p class="mt-3 mb-1" >
    <center>Enter volume</center>
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
  
  export default createstock