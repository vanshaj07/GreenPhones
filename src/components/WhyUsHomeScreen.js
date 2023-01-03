import React, { Component } from "react";
import "./style.css"

class WhyUsHomeScreen extends Component {

    render() {
        return (
          <>
          <div className="container-fluid bgcolor">
   <div className="container p-4"><span className="border-left fs-2"> Why Us </span>
   </div>
</div>
<div className="container-fluid bgcolor">
   <div className="container">
       <div className="row mb-4">
           <div className="col-md-4 d-flex p-2">
               <img src="/images/whyus-1.png" className="img-fluid" width="100" alt=""/>
               <span>
                   <h4>Best Prices</h4>
                   <p> Objective AI-based pricing</p>
               </span>
           </div>
           <div className="col-md-4 d-flex p-2">
               <img src="/images/whyus-2.png" className="img-fluid" width="100" alt=""/>
               <span>
                   <h4>Instant Payment</h4>
                   <p> Instant Money Transfer in your preferred mode at time of pick up or store drop off</p>
               </span>
           </div>
           <div className="col-md-4 d-flex p-2">
               <img src="/images/whyus-3.png" className="img-fluid" width="100" alt=""/>
               <span>
                   <h4>Simple & Convenient</h4>
                   <p>Check price, schedule pickup & get paid</p>
               </span>
           </div>
       </div>
       <div className="row mb-4">
           <div className="col-md-4 d-flex p-2">
               <img src="/images/whyus-4.png" className="img-fluid" width="100" alt=""/>
               <span>
                   <h4>Free Doorstep Pickup</h4>
                   <p>No fees for pickup across 1500 cities across India</p>
               </span>
           </div>
           <div className="col-md-4 d-flex p-2">
               <img src="/images/whyus-5.png" className="img-fluid" width="100" alt=""/>
               <span>
                   <h4>Factory Grade Data Wipe</h4>
                   <p> 100% Safe and Data Security Guaranteed</p>
               </span>
           </div>
           <div className="col-md-4 d-flex p-2">
               <img src="/images/whyus-6.png" className="img-fluid" width="100" alt=""/>
               <span>
                   <h4>Valid Purchase Invoice</h4>
                   <p>Genuine Bill of Sale</p>
               </span>
           </div>
       </div>
   </div>
</div>
          </>
        )
    }

}
export default WhyUsHomeScreen;