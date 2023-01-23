import React from 'react'
import Utilities from './Utilities'
import UserStocks from './UserStocks'
import AllStocks from './AllStocks'

const Dashboard = (props) => {

  return (
    <div>
        <div>
            {props.value}
            <div>
              <Utilities/>
              <div className='dashbooardHeading'>All Stocks</div>
              <AllStocks/>
              <div className='dashbooardHeading'>Your Portfolio</div>
              <UserStocks/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard