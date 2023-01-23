import React from 'react'
import Stock from "./Stock"
import data from './data'
import {useSelector , useDispatch} from "react-redux";


const UserStocks = () => {
    
    const userId=useSelector((state) => state.userInfo.userId);  

    const [allStockData, setallStockData] = React.useState([{
        "stockId": "NA",
        "name": "NA",
        "availableUnit": -1,
        "currentPrice": -1,
        "dayLow": -1,
        "dayHigh": -1,
        "previousPrice": -1
    }])

    const stocks = allStockData.map(item => {
        return (
            <Stock
                key={item.stockId}
                {...item} 
            />
        )
    })  

    React.useEffect(() => {
        const fetchStockUrl="http://192.168.0.35:8080/stock/"+userId        
        async function getStocks(fetchStockUrl) {
            const res = await fetch(fetchStockUrl)
            const data = await res.json()
            var array = [];
            data.forEach(element => {
                array.push(element.stock)
            });
            setallStockData(prevState => array)
            console.log(allStockData)
        }
        getStocks(fetchStockUrl)
    }, [userId])
    
    return (
        <div className='tableContainer'>
            <span>{userId}</span>
            <table className='fl-table'>
                <tr className='fl-table tbody tr'>
                    <th >Stock Name</th>
                    <th>Available unit</th>
                    <th>Current Price</th>
                    <th>Day low</th>
                    <th>Day high</th>
                    <th>Stock ticker</th>
                    <th>Market cap</th>
                </tr>
                {stocks}
            </table>
        </div>
    )
}

export default UserStocks