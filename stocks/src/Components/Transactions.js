import React from 'react'
import { useParams } from 'react-router-dom'


const Transactions = (props) => {
  
    // let marketCap= props.availableUnit*props.currentPrice
    // let stockTicker=props.previousPrice>props.currentPrice?"/Down.png":"/Up.png"
    return (
      <React.Fragment>
          <tr>
            <td>{props.transactionId}</td>
            <td>{props.amount}</td>
            <td>{props.unit}</td>
            <td>{props.userId}</td>
            <td>{props.type}</td>
            {/* <td>{props.stockId}</td> */}
          </tr>
      </React.Fragment>
    )
  }


export default Transactions