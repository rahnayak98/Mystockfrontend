import React from 'react'
import Button from 'react-bootstrap/Button';


const Utilities = (props) => {
  return (
    <div>
        <div className='container'>
          <Button variant="primary" >Portfolio</Button>
          <Button variant="primary">Wallet</Button>
          <Button variant="primary">History</Button>
        </div>
    </div>
  )
}

export default Utilities