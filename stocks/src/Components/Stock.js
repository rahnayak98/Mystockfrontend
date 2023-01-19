import React from 'react'


const Stock = (props) => {
  return (
    // <div>
    //     <div className='stock'>
    //     {/* <table className='fl-table'> */}
    <React.Fragment>
       
        <tr>
          <td>{props.Sname}</td>
          <td>{props.Aname}</td>
          <td>{props.curprice}</td>
          <td>{props.Dlow}</td>
          <td>{props.Dhigh}</td>
          <td>{props.Stockticker}</td>
          <td>{props.Marketcap}</td>
        </tr>
        </React.Fragment>
        
      
  )
}

export default Stock