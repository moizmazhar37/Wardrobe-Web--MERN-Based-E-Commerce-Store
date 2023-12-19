import React from 'react'
import './styles/Navigation.css'

export default function Navigation() {
  return (
    <>
        <div className="container-fluid" id="NavigationWrapper-1">
            <h2 className='NavTitle-1'>Wardrobe Web</h2>
            <div className="NavLinks-1">
                <a href="/">Home</a>
                <a href='/viewOrders'>View Orders</a>
                <a href='/addProducts'>Add Products</a>
                <a href='/viewTransactions'>View Transactions</a>
            </div>
        </div>        
    </>
  )
}
