import React from 'react'
import Stock from "./Stock"
import {useSelector , useDispatch} from "react-redux";


const AllStocks = () => {

    const [allStockData, setallStockData] = React.useState([{
        "stockId": "NA",
        "name": "NA",
        "availableUnit": -1,
        "currentPrice": -1,
        "dayLow": -1,
        "dayHigh": -1,
        "previousPrice": -1
    }])

    const myStocks = allStockData.map(item => {
        return (
            <Stock
                key={item.stockId}
                {...item} 
            />
        )
    })  
    const userId=useSelector((state) => state.userInfo.userId);

    React.useEffect(() => {
        const fetchStockUrl="http://192.168.0.35:8080/stock/all"        
        async function getStocks(fetchStockUrl) {
            const res = await fetch(fetchStockUrl)
            const data = await res.json()
            setallStockData(prevState => data)
            //console.log(allStockData)
        }
        getStocks(fetchStockUrl)
    }, [userId])
    
    if(allStockData[0].stockId==="NA"){    
        return (
            <div>
                <div className='loadingMsg'>Loading . . .</div>
            </div>
        )
    }
     else{
        return (
            <div className='tableContainer'>
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
                    {myStocks}
                </table>
            </div>
        )
    }
}

export default AllStocks