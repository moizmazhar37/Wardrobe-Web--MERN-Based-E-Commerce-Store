import React from 'react'
import './styles/Navigation.css'

export default function Navigation() {
  return (
    <>
        <div className="container-fluid" id="NavigationWrapper">
            <h2 className='NavTitle'>Wardrobe Web</h2>
            <div className="NavLinks">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/home">For Men</a>
                <a href="/home">For Women</a>
                <a href="/contact">Contact</a>
            </div>  
        </div>        
    </>
  )
}
