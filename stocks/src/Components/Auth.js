
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import {useSelector , useDispatch} from "react-redux";
import { setUserName } from "../features/userInfo/userInfoSlice";
import axios from 'axios';


export default function (props) {
  const userId=useSelector((state) => state.userInfo.userId);
  const dispatch=useDispatch();
  const [authMode, setAuthMode] = useState("signin")
  const [userData, setUserData] = useState({
    emailId:"",
    password:""
  })
  const navigate = useNavigate();
  const [loginStatusMessage, setLoginStatusMessage] = useState("")

  function handleLogin() {
    const body ={
        "email" : userData.emailId,
        "password" : userData.password
    }
    axios.post('http://192.168.0.35:8080/login',body)
    .then(res => {
      console.log(res.data.user.id);
      if(res.status===200){
        navigate('/dashboard')
        dispatch(setUserName(res.data.user.email))
      }
    })
    .catch(() =>{
      setUserData({
        emailId:"",
        password:""
      })
      setLoginStatusMessage("Incorrect Credentials.")
    })
  }

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const handleLoginChange = (event) => {
    const {name, value} = event.target
    setUserData(prevuserData => ({
        ...prevuserData,
        [name]: value
    }))
    setLoginStatusMessage("")
  };


  const [newUserData, setNewUserData] = useState({
    fullName:"",
    emailId:"",
    password:""
  })

  const handleNewUserLoginChange = (event) => {
    const {name, value} = event.target
    setNewUserData(prevNewUserData => ({
        ...prevNewUserData,
        [name]: value
    }))
    setLoginStatusMessage("")
  };

  function handleSignup() {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          "email" : newUserData.emailId,
          "password" : newUserData.password,
          "fullName": newUserData.fullName
       })
    };
     fetch('http://192.168.0.35:8080/user', requestOptions)
        .then(response => {
          if(response.ok){
            setAuthMode("signin")
          }
          else{
            setNewUserData({
              emailId:"",
              password:"",
              fullName:""
            })
            setLoginStatusMessage("User with same Email ID already exists")
          }
            
        })
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div> 
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                name="emailId"
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={handleLoginChange}
                value={userData.emailId}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={handleLoginChange}
                value={userData.password}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button  className="btn btn-primary" onClick={handleLogin}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2 errorMsg">
              {loginStatusMessage}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              name="fullName"
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              value={newUserData.fullName}
              onChange={handleNewUserLoginChange }
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              name="emailId"
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={newUserData.emailId}
              onChange={handleNewUserLoginChange }
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={newUserData.password}
              onChange={handleNewUserLoginChange }
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSignup}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2 errorMsg">
              {loginStatusMessage}
            </p>
        </div>
      </div>
    </div>
  )
}
