import React from 'react'
import { Button } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function CustomerRegisteration() {
    const [name, SetName] = useState();
    const [email, SetEmail] = useState();
    const [phone, SetPhone] = useState();
    const [password, SetPassword] = useState();

    const HandleNameValue = (event) => {
        SetName(event.target.value);
    };
    const HandleEmailValue = (event) => {
        SetEmail(event.target.value);
    };
    const HandlePhoneValue = (event) => {
        SetPhone(event.target.value);
    };
    const HandlePasswordValue = (event) => {
        SetPassword(event.target.value);
    };
    const Navigate = useNavigate();
    const Submit = async (e) => {
        e.preventDefault();
        const Response = await fetch(`http://localhost:3001/customer/Register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, password }),
        });
        const ResponseToJson = await Response.json();
        if (ResponseToJson.Success) {
            toast.success("Registration Successful");
            Navigate("/customer");

        }
        else {
            toast.error("Registration Failed");
        }
    };


    return (
    <>
        <div className='AdminLogin'>
            <h4>WardrobeWeb</h4>
        </div>

        <div className="container my-3">
            <div className='home-page-text-1'>
                <h1>PERSONAL INFORMATION</h1>
            </div>
        </div>

        <div className="container my-4">
            <form onSubmit={Submit}>
                <div className="container my-2">
                    <input required type="text" name="email" id="input" placeholder="Email" onChange={HandleEmailValue} />
                </div>
                <div className="container my-2">
                    <input required type="text" name="password" id="input" placeholder="Password" onChange={HandlePasswordValue} />
                </div>
                <div className="container my-2">
                    <input required type="text" name="name" id="input" placeholder="Name" onChange={HandleNameValue} />
                </div>
                <div className="container my-2">
                    <input required type="text" name="phone" id="input" placeholder="Phone" onChange={HandlePhoneValue} />
                </div>

                <Button type="submit" padding= "2rem" sx={{backgroundColor:"#1D1D20", color:"white", width:"30%" , marginTop:"1%"}}> Sign Up </Button>       
            </form>
            <ToastContainer theme="colored"/>
        </div>
    </>
  )
}
