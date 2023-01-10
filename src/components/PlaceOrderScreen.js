import React, { Component } from "react";
import "./style.css"
import { connect } from "react-redux";
import {  IMAGE_URL } from "../utils/constants";
import { placeOrder } from "../redux/greenMobile"

class PlaceOrderScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     //   quesAns: {
    //     //   },
    //     //   phoneDead: '',
    //     //   totalPrice: 5000
    //     };
    //   }

    componentDidMount(){
        const {greenMobileStore} = this.props;
        const {
            //token, 
            orderPayload} = greenMobileStore;
        const token = sessionStorage.getItem("green-mobile-token");
        if((token === "null" || token === null) || !orderPayload){
            this.props.history.push(
                `/home`
              )
        }
    }
    placePhoneOrder=()=>{
        const {placeOrder, greenMobileStore} = this.props;
        const {orderPayload,
        //    token
        } = greenMobileStore
        const token = sessionStorage.getItem("green-mobile-token");
        let payload = {
            data:orderPayload,
             token: `Bearer ${token}`
        }
        placeOrder(payload);
    }

    componentDidUpdate(prevProps) {
        const {greenMobileStore} = this.props;
        const{orderPlaced} = greenMobileStore;
      
        if (
          prevProps.greenMobileStore.orderPlaced !== orderPlaced &&
          orderPlaced !== null &&
          orderPlaced !== false 
        ) {
            this.props.history.push(
                `/order-placed`
              )
        }
    }

    render() {
        const {greenMobileStore} = this.props;
        const {selectedModelExtraData, orderPayload}= greenMobileStore;
        const {selectedModelImage, selectedModelName} = selectedModelExtraData;
        return (
          <>
<div class="container justify-content-center">
        <div class="row mt-5 justify-content-center">
            <div class="col-md-8">
                <div class="container shadow-lg rounded-3 py-5">
                    <div class="row">
                        <div class="col-md-3">
                            <img src={`${IMAGE_URL}${selectedModelImage}`} class="img-fluid" width="auto" height="300px" alt=""/>
                        </div>
                        <div class="col-md-9">
                            <div class="container fs-3">{selectedModelName}
                            </div>
                            <div class="container fs-4">Selling Price</div>
                            <div class="container text-danger fs-1 lh-1">₹{ orderPayload ?orderPayload.price:""}</div>
                            <a href="#">
                                <p class="container fs-5 mt-3">See Device Details</p>
                            </a>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-4 mt-4 borders">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-4">

                                                    <i class="fa-solid fa-award color fa-2x"></i>
                                                </div>
                                                <div class="col-md-8">
                                                    Moneyback guarantee
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mt-4 borders">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-4">

                                                    <i class="fa-solid fa-award color fa-2x"></i>
                                                </div>
                                                <div class="col-md-8">
                                                    Moneyback guarantee
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mt-4">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-4">

                                                    <i class="fa-solid fa-award color fa-2x"></i>
                                                </div>
                                                <div class="col-md-8">
                                                    Moneyback guarantee
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <div class="col-md-4 border-round shadow py-5">
                <p class="fs-4">
                    Price Summary
                </p>
                <hr/>

                <p class=" fs-5 d-flex justify-content-between">
                    <span>
                        Base Price
                    </span>
                    <span>
                        {`₹ ${orderPayload? orderPayload.price: ""}`}
                    </span>
                    <hr/>
                </p>
                <p class=" fs-5 d-flex justify-content-between">
                    <span>
                        Pickup Charges
                    </span>
                    <span>
                        <span class="color"> Free</span> <del>300</del>
                    </span>
                    <hr/>
                </p>
                {/* <p class=" fs-5 d-flex justify-content-between">
                    <span>
                        Add Promo Code
                    </span>
                    <a href="#">
                        <span>
                            Apply Now
                        </span>
                    </a>
                    <hr/>
                </p> */}
                <p class=" fs-5 d-flex justify-content-between">
                    <span>
                        Total Amount
                    </span>
                    <span>
                    {orderPayload? orderPayload.price:""}
                    </span>
                </p>
                <div class="d-grid gap-2">
                    <button class="btn text-light" onClick={()=>{this.placePhoneOrder()}} style={{backgroundColor:"#83C801"}} type="button">Sell Now</button>
                  </div>
            </div>
          
        </div>

    </div>
          </>
        )
    }

}
const mapStateToProps = ({ greenMobileStore }) => {
    return {
      greenMobileStore
    };
  };
  
  const mapDispatchToProps = {
    placeOrder: (payload) => placeOrder(payload),
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlaceOrderScreen);