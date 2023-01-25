import React from 'react'
import AllStock from "./AllStock"
import {useSelector , useDispatch} from "react-redux";
import { setAllStockList } from '../features/userInfo/userInfoSlice';


const AllStocks = () => {

    const dispatch=useDispatch();

    const allStockData=useSelector((state) => state.userInfo.allStockList);
    const myStocks = allStockData.map(item => {
        return (
            <AllStock
                key={item.stockId}
                {...item} 
            />
        )
    })  
    React.useEffect(() => {
        const fetchStockUrl="http://192.168.0.35:8080/stock/all"        
        async function getStocks(fetchStockUrl) {
            const res = await fetch(fetchStockUrl)
            const data = await res.json()
            //setallStockData(prevState => data)
            dispatch(setAllStockList(data))
            //console.log(allStockData)
        }
        getStocks(fetchStockUrl)
    },[dispatch,allStockData])
    
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