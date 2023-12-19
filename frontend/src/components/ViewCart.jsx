import React from 'react'
import CustomerNavigation from './CustomerNavigation'
import {Typography , Button} from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { Buffer } from 'buffer'
import "./styles/ViewCart.css"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Link } from 'react-router-dom'

export default function ViewCart() {

  const [Products, SetProducts] = useState([])
  const [TotalAmount , SetTotalAmount] = useState(0);
  const [Deletions, SetDeletions] = useState(0)
  useEffect(() => {
    const FetchProducts = async () => {
      const Response = await fetch("http://localhost:3001/Cart/GetCart",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        'Authorization-Token' : localStorage.getItem('Token')
      }
      })
      const Data = await Response.json()
      SetProducts(Data.CartItemsWithProduct)
    }
    FetchProducts()
  })
 
  const GetImage = (product) => {
    const base64String = Buffer.from( product.data , 'base64')
    const ProfilePicture = URL.createObjectURL(
        new Blob([base64String.buffer], { type: 'image/*' } )
    );  
    return ProfilePicture
  }

  const Delete = async (id) => {
    const Response = await fetch(`http://localhost:3001/Cart/DeleteCart`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        'Authorization-Token' : localStorage.getItem('Token')
      },
      body:JSON.stringify({
        productid:id
      })
    })
    const Data = await Response.json()
    if(Data.Success)
    {
      toast("Product Deleted")
      SetDeletions(Deletions + 1)
    }
    else
    {
      toast("Failed to Delete Product")
    }
  }

  useEffect(() => {
    let amount = 0;
    Products.forEach((product) => {
      amount += parseFloat(product.productPrice);
    });
    SetTotalAmount(amount);
  }, [Products]);
  
  return (
    <>
      <CustomerNavigation />
      <Typography color="rgb(51, 51, 51)" fontWeight="500" fontFamily="Nunito" fontSize="2rem" textAlign={"center"} marginTop="2vw"> Your Cart</Typography>

      {Products.map((product) => (
        <div className="container my-2" id="cart-display">
          <img src={GetImage(product.img)} alt="Product" className="img-fluid" width="50px" height="30px" />
          <h6>{product.productName}</h6>
          <h6>{product.subCategory}</h6>
          <h6>Quantity: 1</h6>
          <h6>{product.productPrice}</h6>
          <button className="btn btn-danger" id="remove" onClick={() => { Delete(product._id) }}>Remove</button>
        </div>
      ))}
      <ToastContainer theme="colored" />
      <div className="container my-2" id="total-display">
        <h6>Total Amount: {TotalAmount} $</h6>
      </div>
      <Button type="submit" padding= "2rem" sx={{backgroundColor:"#1d1d20", color:"white", width:"30%" , marginTop:"1%"}}> Checkout </Button>
      <Link to="/home"><Button type="submit" padding= "2rem" sx={{backgroundColor:"#1d1d20", color:"white", width:"30%" , marginTop:"1%" , marginLeft:"1%"}}>Back </Button></Link>

    </>
  )
}
