import React from 'react'
import Utilities from './Utilities'
import UserStocks from './UserStocks'
import AllStocks from './AllStocks'
import Header from './Header'
import Buysellstock from './Buysellstock'

const Dashboard = (props) => {

  return (
    <div>
      <Header/>
        <div>
            {props.value}
            <div>
              <div className='dashbooardHeading'>All Stocks</div>
              <AllStocks/>
              <div className='dashbooardHeading'></div>
              <Buysellstock/>
              <div className='dashbooardHeading'>Your Portfolio</div>
              <UserStocks/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard