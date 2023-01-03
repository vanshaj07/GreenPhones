import React, { Component } from "react";
import "./style.css"

class GreenMobileWorks extends Component {

    render() {
        return (
          <>
          <div className="container my-5"><span className="border-left fs-2"> HOW GREEN MOBILE WORKS </span>
</div>
<div className="container">
   <div className="row">
       <div className="col-md-4 text-center p-5">
           <img src="/images/get-price.jpg" className="img-fluid" width="100px" height="100px" alt=""/>
           
           <div className="container fs-3 mb-4 mt-2"><span className="circle fs-3 mx-2 text-light">1 </span>Check Price</div>
           <p className="fs-5">Select your device & tell us about its current condition, and our advanced AI tech will tailor make
               the perfect price for you.
           </p>
       </div>
       <div className="col-md-4 text-center p-5">
           <img src="/images/mobile-pickup.jpg" className="img-fluid" width="100px" height="100px" alt=""/>
           <div className="container fs-3 mb-4 mt-2"><span className="circle fs-3 mx-2 text-light">2 </span>Schedule Pickup</div>
           <p className="fs-5">Book a free pickup from your home or work at a time slot that best suits your convenience.</p>
       </div>
       <div className="col-md-4 text-center p-5">
           <img src="/images/get-paid.jpg" className="img-fluid" width="100px" height="100px" alt=""/>
           <div className="container fs-3 mb-4 mt-2"><span className="circle fs-3 mx-2 text-light">3 </span>Get Paid</div>
           <p className="fs-5">Did we mention you get paid as soon as our executive picks up your device? It's instant payment all
               the way!</p>
       </div>
   </div>
</div>
          </>
        )
    }

}
export default GreenMobileWorks;