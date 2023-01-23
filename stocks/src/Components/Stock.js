import React from 'react'
import { useParams } from 'react-router-dom'


const Stock = (props) => {
  if(props.name==="NA")
    return (
      <React.Fragment>
          <tr>
            <td>Loading</td>
            <td>Loading</td>
            <td>Loading</td>
            <td>Loading</td>
            <td>Loading</td>
            <td>Loading</td>
            <td>Loading</td>
          </tr>
      </React.Fragment>
    )
  else{
    let marketCap= props.availableUnit*props.currentPrice
    let stockTicker=props.previousPrice>props.currentPrice?"/Down.png":"/Up.png"
    return (
      <React.Fragment>
          <tr>
            <td>{props.name}</td>
            <td>{props.availableUnit}</td>
            <td>{props.currentPrice}</td>
            <td>{props.dayLow}</td>
            <td>{props.dayHigh}</td>
            <td>
              <img className ='stockticker' src={stockTicker}></img>
            </td>
            <td>{marketCap}</td>
          </tr>
      </React.Fragment>
    )
  }
}

export default Stock