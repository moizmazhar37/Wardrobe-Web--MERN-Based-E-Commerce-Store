import React from 'react'
import CustomerNavigation from './CustomerNavigation'
import {useContext} from 'react'
import WardrobeContext from '../contexts/WardrobeContext'
import { Typography } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { Buffer } from 'buffer'
import "./styles/Home.css"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() 
{
    const [Selection,SetSelection] = useState("Men")
    const [url , SetUrl ] = useState("http://localhost:3001/Products/men")
    const [Products,SetProducts] = useState([])

    const Context = useContext(WardrobeContext)
    useEffect(() => {
        if (Context.View === "All-Men") {
          SetSelection("Shop for Men")
          SetUrl("http://localhost:3001/Products/men")
          SetProducts([])
        } else if (Context.View === "T-Shirts-Men") {
          SetSelection("Shop for T-Shirts")
          SetUrl("http://localhost:3001/Products/men/tshirts")
          SetProducts([])
        } else if (Context.View === "Shirts-Men") {
          SetSelection("Shop for Shirts")
          SetUrl("http://localhost:3001/Products/men/shirts")
          SetProducts([])
        } else if (Context.View === "Polos-Men") {
          SetSelection("Shop for Polos")
          SetUrl("http://localhost:3001/Products/men/polos")
          SetProducts([])
        } else if (Context.View === "Trousers-Men")
        {
          SetSelection("Shop for Trousers")
          SetUrl("http://localhost:3001/Products/men/trousers")
          SetProducts([])
        } else if (Context.View==="All-Women")
        {
          SetSelection("Shop for Women")  
          SetUrl("http://localhost:3001/Products/women")
          SetProducts([])
        } else if (Context.View === "T-Shirts-Women") {
          SetSelection("Shop for T-Shirts")
          SetUrl("http://localhost:3001/Products/women/tshirts")
          SetProducts([])
        } else if (Context.View === "Polos-Women") {
            SetSelection("Shop for Polos")
            SetUrl("http://localhost:3001/Products/women/polos")
            SetProducts([])
        } else if (Context.View === "Shirts-Women") {
            SetSelection("Shop for Shirts")
            SetUrl("http://localhost:3001/Products/women/shirts")
            SetProducts([])
        } else if (Context.View === "Trousers-Women") {
            SetSelection("Shop for Trousers")
            SetUrl("http://localhost:3001/Products/men/trousers")
            SetProducts([])
        } 




        const fetchProducts = async () => {
            const response = await fetch(url)
            const data = await response.json()
            SetProducts(data)
        }

        fetchProducts()
      }, [Context.View, url]) 
      
    const GetImage = (product) => {
        const base64String = Buffer.from( product.data , 'base64')
        const ProfilePicture = URL.createObjectURL(
            new Blob([base64String.buffer], { type: 'image/*' } )
        );  
        return ProfilePicture
    }

    const AddToCart = async (id) => {
        const response = await fetch(`http://localhost:3001/Cart/AddToCart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization-Token' : localStorage.getItem('Token')
            },
            body: JSON.stringify({
                productid: id
            })
        })
        const data = await response.json()
        if (data.Success)
        {
            toast.success("Product Added to Cart")
        }
        else
        {
            toast.error("Failed to Add Product to Cart")
        }

    }

      
    return (
    <>
        <CustomerNavigation />
        <Typography color="rgb(51, 51, 51)" fontWeight="500" fontFamily="Nunito" fontSize="2rem" textAlign={"center"} marginTop="2vw"> {Selection}  </Typography>

    <div className="container my-2" id="container-display">
        <div className="container my-2">
            <div className="row">
            {Products.map((product) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={product.id} id="ProductView"> 
                <img src={GetImage(product.img)} alt="product" width={250} height={300}/>
                <div className="ProductPrice">
                    <p>{product.productName}</p>
                    <p>{product.productPrice}</p>
                </div>
                <div>
                    <button className="btn-buy" onClick={()=>
                        {AddToCart(product._id)}}>Add to Cart</button>
                    <button className="btn-buy">View Product</button>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
    <ToastContainer theme="colored" />


    </>
  )
}
