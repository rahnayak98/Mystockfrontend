import React from 'react'
import Stock from "./Stock"
import data from './data'

const UserStocks = () => {
    const stocks = data.map(item => {
        return (
            <Stock
                key={item.stockId}
                {...item}
            />
        )
    })    
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
                {stocks}
            </table>
        </div>
    )
}

export default UserStocks