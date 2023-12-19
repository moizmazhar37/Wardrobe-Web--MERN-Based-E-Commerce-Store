import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WardrobeContext from "./WardrobeContext";

const WardrobeStates = (props)=>
{
    const [View , SetView] = useState("All-Men");




    /*
    const [PersonalDetails , SetPersonalDetails] = useState()
    const UserDetails = async ()=>
    {
        const response = await fetch(`http://${process.env.REACT_APP_IPADDRESS}/GetPersonalInfo`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization-Token': localStorage.getItem("Token"),
            }
        });
        const json = await response.json();
        if(json.Success)
        {
            SetPersonalDetails(json.PersonalDetails);
        }
    }
    */

    return (
        <WardrobeContext.Provider value={{View , SetView }}>
            {props.children}
        </WardrobeContext.Provider>
    )
}

export default WardrobeStates;
