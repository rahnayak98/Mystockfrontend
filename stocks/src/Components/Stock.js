import React from 'react'


const Stock = (props) => {
  return (
    // <div>
    //     <div className='stock'>
    //     {/* <table className='fl-table'> */}
    <React.Fragment>
        <tr>
          <td>{props.name}</td>
          <td>{props.availableUnit}</td>
          <td>{props.currentPrice}</td>
          <td>{props.dayLow}</td>
          <td>{props.dayHigh}</td>
          <td>{props.Stockticker}</td>
          <td>{props.availableUnit}*{props.currentPrice}</td>
        </tr>
    </React.Fragment>
  )
}

export default Stock