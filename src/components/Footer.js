import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./style.css"

class Footer extends Component {
    buy = () => {
        window.open(
          "https://store.gocashit.com/",
          "_blank"
        );
      };

    render() {
        return (
          <>
           <div class="container">
        <div class="row">
        <hr class="solid"/>
            <div class="col-md-9">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2">
                            <Link className="nav-link" style={{color:"#1ba79f"}} to={'/service'} > 
                                <p class="footer-heading"> 
                                    Our Services
                                </p>
                            </Link>
                        </div>
                        <div class="col-md-2">
                            
                            <Link className="nav-link" style={{color:"#1ba79f"}} to={'/company'} ><p class="footer-heading">
                                Company
                            </p></Link>
                        </div>
                        <div class="col-md-2">
                            <Link className="nav-link" style={{color:"#1ba79f"}} to={'#'} onClick={() => this.buy()}><p class="footer-heading">
                                Buy Mobiles
                            </p></Link>
                        </div>
                        <div class="col-md-2">
                            <Link className="nav-link" style={{color:"#1ba79f"}} to={'/support'} ><p class="footer-heading">
                                Support
                            </p></Link>
                        </div>
                        
                        <div class="col-md-2">
                            
                            <Link className="nav-link" style={{color:"#1ba79f"}} to={'/info'} ><p class="footer-heading">More Info</p></Link>
                                
                        </div>
                        
                        <div class="col-md-2">
                            
                            <Link className="nav-link" style={{color:"#1ba79f"}} to={'/about-us'} ><p class="footer-heading">About Us</p></Link>
                                
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 pt-4 px-4">
                <p>
                    <b>Follow us </b>
                </p>
                <i class="fa-brands footer-social-icons fa-twitter"></i>
                <i class="fa-brands footer-social-icons fa-facebook-f"></i>
                <i class="fa-brands footer-social-icons fa-instagram"></i>
                <i class="fa-brands footer-social-icons fa-youtube"></i>
                <br/>
                <button type="button" class="btn mt-4" style={{"background-color":"#1BA79F"}}><Link className="nav-link" style={{"color":"white"}} to={'/contact-us'} >Contact us</Link></button>

            </div>
        </div>
    </div>
          </>
        )
    }

}
export default Footer;