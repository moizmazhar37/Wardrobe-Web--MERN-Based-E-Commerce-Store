import React from 'react'
import "./styles/AdminAuth.css"
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState  } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminAuth() 
{
    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
  
    const Navigate = useNavigate();
  
    const HandleEmailValue = (event) => {
      SetEmail(event.target.value);
    };
    const HandlePasswordValue = (event) => {
      SetPassword(event.target.value);
    };
  
    const Submit = async (e) => 
    {
      e.preventDefault();
      const Response = await fetch(`http://localhost:3001/admin/Login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const ResponseToJson = await Response.json();
      if (ResponseToJson.Success) {
        toast.success("Login Successful");
        localStorage.setItem("Token", ResponseToJson.AuthToken)
        Navigate("/admin/dashboard");
      }
      else 
      {
        toast.error("Invalid Credentials");
      }
    };
    return (
  
    <>
        <div className='AdminLogin'>
            <h4>WardrobeWeb</h4>
        </div>
        <div className="container my-2">
            <Typography color="rgb(51, 51, 51)" fontWeight="bold" fontSize="2rem" textAlign={"center"} marginTop="4vw"> Login to your Account </Typography>
            <Typography color="rgb(51, 51, 51)" fontWeight="700px" fontSize="1.3rem" marginTop="1vw" marginBottom="2rem"> Enter Account Information </Typography>
            <form onSubmit={Submit}>
                <div className="row">
                    <div className='col-lg-12'>
                       <TextField name="email"     id="email"      label="Email"      onChange={HandleEmailValue}  sx={{width:"30%"}}/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className='col-lg-12'>
                        <TextField name="password"  id="password"   label="Password"   onChange={HandlePasswordValue}   sx={{width:"30%"}}/>
                    </div>
                </div>

                <Button type="submit" padding= "2rem" sx={{backgroundColor:"rgb(51, 51, 51)", color:"white", width:"30%" , marginTop:"1%"}}> Login </Button>
            </form>
        </div>
        <ToastContainer theme="colored"/>  
    </>
  )
}
