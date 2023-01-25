import {createSlice} from "@reduxjs/toolkit";

const initialState={
    userId:"",
    userStockList:[{
        "stockId": "NA",
        "name": "NA",
        "availableUnit": -1,
        "currentPrice": -1,
        "dayLow": -1,
        "dayHigh": -1,
        "previousPrice": -1
    }],
    allStockList:[{
        "stockId": "NA",
        "name": "NA",
        "availableUnit": -1,
        "currentPrice": -1,
        "dayLow": -1,
        "dayHigh": -1,
        "previousPrice": -1
    }]
}

export const userInfoSlice = createSlice({
    name:'userInfo',
    initialState,
    reducers:{
        setUserName:(state, action) => {
            state.userId=action.payload;
        },
        setUserStockList:(state, action) =>{
            state.userStockList=action.payload;
        },
        setAllStockList:(state, action) =>{
            state.allStockList=action.payload;
        }
    }
});
export const {setAllStockList} = userInfoSlice.actions;
export const {setUserStockList} = userInfoSlice.actions;
export const {setUserName} = userInfoSlice.actions;
export default userInfoSlice.reducer;