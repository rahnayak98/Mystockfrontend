import React from 'react'
import Utilities from './Utilities'
import UserStocks from './UserStocks'

const Dashboard = (props) => {

  return (
    <div>
        <div>
            {props.value}
            <div>
              <Utilities/>
              <UserStocks/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard