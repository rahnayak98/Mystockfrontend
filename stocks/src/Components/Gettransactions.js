import React from 'react'
import Stock from "./Stock"
import Transactions from './Transactions';
import {useSelector , useDispatch} from "react-redux";

const GetTraansactions = () => {
    
    const userId=useSelector((state) => state.userInfo.userId);  

    const [alltransactionsData, setalltransactionData] = React.useState([{
        "transactionId": "NA",
        "amount": "NA",
        "unit": -1,
        "userId": -1,
        "type": -1,
        "stockId": -1
    }])

    const mytransactions = alltransactionsData.map(item => {
        return (
            <Transactions
                key={item.transactionId}
                {...item} 
            />
        )
    }) 
    
    
    React.useEffect(() => {
        const fetchtransactionUrl="http://192.168.0.35:8080/transaction/"+userId        
        async function Traansactions(fetchtransactionUrl) {
            const res = await fetch(fetchtransactionUrl)
            const data = await res.json()
            console.log(data)
            setalltransactionData(prevState => data)
            console.log(alltransactionsData)
        }
        Traansactions(fetchtransactionUrl)
    }, [userId])



    if(alltransactionsData[0].stockId==="NA"){    
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
                    <th >transactionId</th>
                    <th>amount</th>
                    <th>unit</th>
                    <th>userId</th>
                    <th>type</th>
                    {/* <th>Stock ticker</th> */}
                    {/* <th>stockId</th> */}
                </tr>
                {mytransactions}
            </table>
        </div>

    )
}
}

export default GetTraansactions
