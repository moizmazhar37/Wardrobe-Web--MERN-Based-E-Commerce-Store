import React from 'react'
import './styles/Homepage.css'
import Navigation from "./Navigation"
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <>
        <Navigation/>
        <div className="HomeCover">
            <img className="Cover" src="/Cover.jpg" alt="Cover" height={1000} />  
            <Link to="/customer"><button className="btn btn-outline-light btn-lg" id="ShopNow">Shop Now</button></Link>
        </div> 



        <div className="container" id="CoverMen">
            <h3>Shop For Men</h3>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <img src="/ForMen1.png" alt="Men1" height={310} width={300} />
                    <h6>T-SHIRTS</h6>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src="/ForMen3.png" alt="Men3" height={310} width={300}/>
                    <h6>POLO-SHIRTS</h6>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src="/ForMen2.png" alt="Men2" height={310} width={300}/>
                    <h6>SHIRTS</h6>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src="/ForMen4.png" alt="Men4" height={310} width={300}/>
                    <h6>TROUSERS</h6>
                </div>
            </div>
        </div>

        <div className="container" id="CoverMen">
            <h3>Shop For Women</h3>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <img src="/ForWomen1.png" alt="Women1" height={350} width={300} />
                    <h6>T-SHIRTS</h6>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src="/ForWomen3.png" alt="Women3" height={350} width={300}/>
                    <h6>POLO-SHIRTS</h6>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src="/ForWomen2.png" alt="Women2" height={350} width={300}/>
                    <h6>SHIRTS</h6>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src="/ForWomen4.png" alt="Women4" height={350} width={300}/>
                    <h6>TROUSERS</h6>
                </div>
            </div>
        </div>
    </>

  )
}
