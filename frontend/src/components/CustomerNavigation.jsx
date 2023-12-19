import React, { useContext, useEffect } from 'react';
import './styles/Navigation.css';
import WardrobeContext from '../contexts/WardrobeContext';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const Context = useContext(WardrobeContext);
  const [CartCount, SetCartCount] = useState(0);

  const getCartCount = async () => {
    const response = await fetch('http://localhost:3001/Cart/GetCartCount', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization-Token': localStorage.getItem('Token'),
      },
    });
    const data = await response.json();
    SetCartCount(data.CartCount);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getCartCount();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container-fluid" id="NavigationWrapper-1">
        <div className='carting'>
            <h2 className="NavTitle-1">Wardrobe Web</h2>
            <div className='cartcount'>
                <Link to="/ViewCart"><AiOutlineShoppingCart className='cart'/></Link>
                <h6 className='cartCount'>{CartCount}</h6>
            </div>
        </div>
        <div className="NavLinks-1">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <select
            href="/home"
            id="dropdown"
            onChange={(e) => {
              Context.SetView(e.target.value + "-Men");
            }}
          >
            <option value="All">For Men</option>
            <option value="All">All</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Shirts">Shirts</option>
            <option value="Polos">Polos</option>
            <option value="Trousers">Trousers</option>
          </select>
          <select id="dropdown"
            href="/home"

            onChange={(e) => {
                Context.SetView(e.target.value + "-Women");
            }}
            >
            <option value="All">For Women</option>
            <option value="All">All</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Shirts">Shirts</option>
            <option value="Polos">Polos</option>
            <option value="Trousers">Trousers</option>
          </select>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </>
  );
}
