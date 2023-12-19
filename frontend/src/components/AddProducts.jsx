import React from 'react'
import AdminNavigation from './AdminNavigation'
import "./styles/AddProducts.css"
import {useState} from 'react'
import { Button} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
export default function AddProducts() 
{
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [productName, SetProductName] = useState();
  const [productPrice, SetProductPrice] = useState();
  const [productDescription, SetProductDescription] = useState();
  const [productCategory, SetProductCategory] = useState();
  const [productSubCategory, SetProductSubCategory] = useState();
  const [file , setFile ] = useState();
  const [color1, SetColor1] = useState();
  const [color2, SetColor2] = useState();
  const [color3, SetColor3] = useState();
  const [productSize , SetProductSize] = useState(["S","M","L","XL","XXL"])
  const [productQuantity, SetProductQuantity] = useState();


  const HandleProductName = (event)     => { SetProductName(event.target.value);};
  const HandleProductPrice = (event)      => { SetProductPrice(event.target.value); };
  const HandleProductDescription = (event)    => { SetProductDescription(event.target.value);    };
  const HandleProductCategory = (event)    => { SetProductCategory(event.target.value); };
  const HandleProductSubCategory = (event)    => { SetProductSubCategory(event.target.value); };
  const HandleProductQuantity = (event)    => { SetProductQuantity(event.target.value); };
  const handleFileChange = (event)    => {
        setFile(event.target.files[0])
        const file = event.target.files[0];
        if (file) {
            setFile(file);
            setFileName(file.name);
        } else {
            setFile(null);
            setFileName("");
        }
  ;};

  const HandleColor1Change = (event)    => { SetColor1(event.target.value); };
  const HandleColor2Change = (event)    => { SetColor2(event.target.value); };
  const HandleColor3Change = (event)    => { SetColor3(event.target.value); };
  const HandleProductSize = (event)    => { SetProductSize(event.target.value); };

  const UploadFile = ()=>
  {
    document.getElementById("fileID").click();
  }

  const Submit = async (e)=>
  {
    e.preventDefault()
    toast.success("Please Wait...");
    const formData = new FormData();
    formData.append("testImage", file);
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productDescription", productDescription);
    formData.append("category", productCategory);
    formData.append("subCategory", productSubCategory);
    formData.append("productQuantity", productQuantity);
    formData.append("color1", color1);
    formData.append("color2", color2);
    formData.append("color3", color3);
    formData.append("sizes", productSize);
    const Response = await fetch("http://localhost:3001/addProduct", {
        method: "POST",
        body: formData,
    })
    const data = await Response.json();
    console.log(data);
    if(data.success)
    {
        toast.success("Product Added Successfully");
       
        setTimeout(() => {
        }, 1000);
        window.location.reload();

        
    }
    else
    {
        toast.error("Something Went Wrong");
    }
}
  return (
    <>
        <AdminNavigation />

        <div className="container my-3">
            <div className='home-page-text-1'>
                <h1>PRODUCT INFORMATION</h1>
            </div>
        </div>

        <div className="container my-3">
            <form onSubmit={Submit}>
                <div className="container my-2">
                    <input required type="text" placeholder="Product Name" name="productName" id="input"  label="Product Name" onChange={HandleProductName}/>
                    <input required type="text" placeholder="Product Price"  name="productPrice"  id="input"  label="Product Price"  onChange={HandleProductPrice} />
                </div>

                <div className="container my-2">
                    <select required id='input' placeholder='Category' onChange={HandleProductCategory}>
                            <option value="">-- Select Category --</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                    </select>
                    <select id='input' placeholder='SubCategory' required onChange={HandleProductSubCategory}>
                            <option value="">-- Select SubCategory --</option>
                            <option value="T-Shirts">T-Shirts</option>
                            <option value="Shirts">Shirts</option>
                            <option value="Polos">Polos</option>
                            <option value="Trousers">Trousers</option>
                    </select>                    
                </div>

                <div className="container my-2">
                    <select id='input-c' placeholder="Colors" required onChange={HandleColor1Change}>
                            <option value="">-- Select Color --</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="orange">Orange</option>
                            <option value="purple">Purple</option>
                            <option value="brown">Brown</option>
                            <option value="grey">Grey</option>
                            <option value="pink">Pink</option>
                    </select>
                
                    <select id='input-c' placeholder="Colors" onChange={HandleColor2Change}>
                            <option value="">-- Select Color --</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="orange">Orange</option>
                            <option value="purple">Purple</option>
                            <option value="brown">Brown</option>
                            <option value="grey">Grey</option>
                            <option value="pink">Pink</option>
                    </select>

                    <select id='input-c' placeholder="Colors" onChange={HandleColor3Change}>
                            <option value="">-- Select Color --</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="orange">Orange</option>
                            <option value="purple">Purple</option>
                            <option value="brown">Brown</option>
                            <option value="grey">Grey</option>
                            <option value="pink">Pink</option>
                    </select>
                </div>

                <div className="container my-2">
                    <input required type="text" placeholder="Product Quantity" name="productQuantity" id="input"  label="Product Quantity" onChange={HandleProductQuantity}/>
                    <input required type="text" placeholder="Product Description" name="productDescription" id="input"  label="Product Description" onChange={HandleProductDescription}/>
                </div>

                <div className="container">
                    <select id='input-d' placeholder='Size' required onChange={HandleProductSize}>
                            <option value="">-- Select Size --</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="SX,S">SX/S</option>
                            <option value="S,M">S/M</option>
                            <option value="M,L">M/L</option>
                            <option value="M,XL">M/XL</option>
                            <option value="L,XL">L/XL</option>
                            <option value="S,M,L">S/M/L</option>
                            <option value="S,M,L,XL">S/M/L/XL</option>
                    </select>
                </div>
 

                <div id="container">
                    <input className="PostPicture" type="file"  onChange={handleFileChange} ref={fileInputRef} id="fileID" accept='image/*' hidden/>            
                    <button id="btn-upload" type="button" onClick={UploadFile}>Choose Display Image</button>  
                </div>
                <div id="container">
                    <span className="form-text">{fileName}</span>
                </div>

      
                <Button type="submit" padding= "2rem" sx={{backgroundColor:"#1D1D20", color:"white", width:"50%" , marginTop:"1%" ,marginLeft:"-1%"}}> SAVE INFORMATION</Button>
                <ToastContainer />
            </form>
        <ToastContainer />
        </div>

    </>
  )
}
