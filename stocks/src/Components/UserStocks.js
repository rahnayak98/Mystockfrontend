import React from 'react'
import Stock from "./Stock"
import {useSelector , useDispatch} from "react-redux";
import { setUserStockList } from '../features/userInfo/userInfoSlice';


const UserStocks = () => {
    const dispatch=useDispatch();

    const userId=useSelector((state) => state.userInfo.userId);  
    const allUserStockData=useSelector((state) => state.userInfo.userStockList);


    const myStocks = allUserStockData.map(item => {
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
                console.log(element.stock.totalAmount)
                // if(element.stock.totalAmount>0){
                    array.push({...element.stock, 
                        "totalAmount":element.totalAmount,
                        "totalUnit":element.totalUnit
                    })
                // }
            });
            if(array.length!==0)
            //setallStockData(prevState => array)
            dispatch(setUserStockList(array))

            //console.log(allStockData)
        }
        getStocks(fetchStockUrl)
    }, [userId,dispatch,allUserStockData])
    
    if(allUserStockData[0].stockId==="NA"){    
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
                        <th>Total Amount</th>
                        <th>Total Unit</th>
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

export default UserStocks