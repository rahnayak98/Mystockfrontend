import React from 'react'
import Stock from "./Stock"
import Utilities from './utilities'

const Dashboard = (props) => {
  return (
    <div>
        <div>
            {props.value}
            <div>
              <Utilities/>
              <div className='tablecontainer'>
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
            
                <Stock Sname="HCL" Aname="19" curprice="36" Dlow="19" Dhigh="100" Stockticker="null" Marketcap="10000"/ >
                  
                <Stock Sname="HCL" Aname="19" curprice="36" Dlow="19" Dhigh="100" Stockticker="null" Marketcap="10000"/  >
                  
                <Stock Sname="HCL" Aname="19" curprice="36" Dlow="19" Dhigh="100" Stockticker="null" Marketcap="10000"/ >
                  
                <Stock Sname="HCL" Aname="19" curprice="36" Dlow="19" Dhigh="100" Stockticker="null" Marketcap="10000"/ >
                </table>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard