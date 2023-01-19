import React from 'react'
import Utilities from './Utilities'
import UserStocks from './UserStocks'
import {useSelector , useDispatch} from "react-redux";

const Dashboard = (props) => {
  const userId=useSelector((state) => state.userInfo.userId);

  return (
    <div>
      {userId}
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