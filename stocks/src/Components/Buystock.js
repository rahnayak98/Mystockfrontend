import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import {useSelector , useDispatch} from "react-redux";
import axios from 'axios';
import { setUserName, setUserStockList ,setAllStockList } from "../features/userInfo/userInfoSlice";



const Buystock = (props) => {
  const userId=useSelector((state) => state.userInfo.userId);
  const dispatch=useDispatch();

  const [stockInfo, setStockInfo] =useState({
    stockName:"",
    stockQuantity:0
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setStockInfo(prevuserData => ({
        ...prevuserData,
        [name]: value
    }))
  };

  function handleSubmit() {
    const body = { 
      "stockId" : stockInfo.stockName,
      "email" : userId,
      "unit": stockInfo.stockQuantity
    }
     axios.post('http://192.168.0.35:8080/stock/buy', body)
        .then(res => {
          setStockInfo({
            stockName:"",
            stockQuantity:0
          })
          alert("Stock bought successfully")
          dispatch(setUserName(userId))
          dispatch(setUserStockList([{
                "stockId": "NA",
                "name": "NA",
                "availableUnit": -1,
                "currentPrice": -1,
                "dayLow": -1,
                "dayHigh": -1,
                "previousPrice": -1,
                "totalAmount":-1,
                "totalUnit":-1
            }]))
            dispatch(setAllStockList([{
              "stockId": "NA",
              "name": "NA",
              "availableUnit": -1,
              "currentPrice": -1,
              "dayLow": -1,
              "dayHigh": -1,
              "previousPrice": -1
          }]))
        })
        .catch(() =>{
          alert("Error - make sure that you have sufficient account balance, and the stock ID is correct")
        })
  }

  return (
    <div>
      <div style={{ display: 'block', width: 1200, padding: 60 }}>

        <p class="mt-3 mb-1" >
          <center>Enter Stock Name</center>
        </p>
        <center>
          <div class="form-outline w-25">
            <input name="stockName" type="text"  className="form-control" onChange={handleChange}/>
          </div>
        </center>     
        <center>
          <p class="mt-3 mb-1" >
            <center>Enter Quantity of stock</center>
          </p>
          <center>
            <div class="form-outline w-25">
              <input name="stockQuantity" type="number"  className="form-control" onChange={handleChange}/>
            </div>
          </center>
        </center>
        <center>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </center>
      </div>
    </div>
  )
}

export default Buystock