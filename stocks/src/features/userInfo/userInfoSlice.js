import {createSlice} from "@reduxjs/toolkit";

const initialState={
    userId:""
}

export const userInfoSlice = createSlice({
    name:'userInfo',
    initialState,
    reducers:{
        setUserName:(state, action) => {
            state.userId=action.payload;
        }
    }
});

export const {setUserName} = userInfoSlice.actions;
export default userInfoSlice.reducer;