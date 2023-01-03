import React, { Component } from "react";
import "./style.css"

class FAQHomeScreen extends Component {

    render() {
        return (
          <>
          <div className="container shadow border-round mb-4 pb-4">
   <div className="accordion" id="accordionExample">
       <div className="container my-5"><span className="border-left fs-2"> FAQs </span>
       </div>
       <div className="accordion-item">
           <h2 className="accordion-header" id="headingOne">
               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                   data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                   Where can I turn in old phones for cash ?
               </button>
           </h2>
           <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
               data-bs-parent="#accordionExample">
               <div className="accordion-body">
                   <strong>In India there are many websites to sell your old mobile phone for cash but if your are
                       looking for reliability then Cashify is most trusted platform to sell your mobile for
                       instant cash.
                   </strong>
               </div>
           </div>
       </div>
       <div className="accordion-item">
           <h2 className="accordion-header" id="headingTwo">
               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                   data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   How can i sell my old cell phone ?
               </button>
           </h2>
           <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
               data-bs-parent="#accordionExample">
               <div className="accordion-body">
                   <strong>After visiting the Green Mobile website or app, select the product category you want to
                       sell.
                       Suppose you want to sell your mobile phone - click on the mobile section, select the brand,
                       select the variant and answer a few questions about the state of the device. That's it.
                       After that, Green Mobile will generate its quote and if you like the price, we will deliver
                       the
                       money to your home and collect your old device.
                   </strong>
               </div>
           </div>
       </div>
       <div className="accordion-item">
           <h2 className="accordion-header" id="headingThree">
               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                   data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   What do you do with my old mobile ?
               </button>
           </h2>
           <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
               data-bs-parent="#accordionExample">
               <div className="accordion-body">
                   <strong>Once a phone is sold to us, we refurbish it and rectify whatever issues it might have.
                       Following which, we sell these devices to retailers so that they can be further sold to
                       customers looking to buy second-hand devices.
                   </strong>
               </div>
           </div>
       </div>
   </div>

</div>
          </>
        )
    }

}
export default FAQHomeScreen;