import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./style.css"

class Footer extends Component {

    render() {
        return (
          <>
           <div class="container">
        <div class="row">
            <div class="col-md-9">
                <div class="container-fluid">
                    <div class="row mt-5">
                        <div class="col-md-2">
                            <p class="footer-heading">
                                Services
                            </p>
                            <div class="container-fluid footer-text">
                            <Link className="nav-link" style={{color:"#83C801"}} to={'/service'} >   <p>Services</p></Link>
                                <p/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <p class="footer-heading">
                                Company
                            </p>
                            <div class="container-fluid footer-text">
                            <Link className="nav-link" style={{color:"#83C801"}} to={'/company'} ><p>Company</p></Link>
                                <p/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <p class="footer-heading">
                                Sell Device
                            </p>
                            <div class="container-fluid footer-text">
                            <Link className="nav-link" style={{color:"#83C801"}} to={'/sell-device'} ><p>Sell Device</p></Link>
                                <p/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <p class="footer-heading">
                                Support
                            </p>
                            <div class="container-fluid footer-text">
                            <Link className="nav-link" style={{color:"#83C801"}} to={'/support'} ><p>Support</p></Link>
                                <p/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <p class="footer-heading">
                                More Info
                            </p>
                            <div class="container-fluid footer-text">
                            <Link className="nav-link" style={{color:"#83C801"}} to={'/info'} ><p>Info</p></Link>
                                <p/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <p class="footer-heading">
                                About Us
                            </p>
                            <div class="container-fluid footer-text">
                            <Link className="nav-link" style={{color:"#83C801"}} to={'/about-us'} ><p>About Us</p></Link>
                                <p/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mt-5 pt-4 px-4">
                <p>
                    Follow Us
                </p>
                <i class="fa-brands footer-social-icons fa-twitter"></i>
                <i class="fa-brands footer-social-icons fa-facebook-f"></i>
                <i class="fa-brands footer-social-icons fa-instagram"></i>
                <i class="fa-brands footer-social-icons fa-youtube"></i>
                <br/>
                <button type="button" class="btn mt-4" style={{"background-color":"#1BA79F"}}><Link className="nav-link" style={{"color":"white"}} to={'/chat-with-us'} >Chat with us</Link></button>

            </div>
        </div>
    </div>
          </>
        )
    }

}
export default Footer;