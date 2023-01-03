import React, { Component } from "react";
import "./style.css"
import { connect } from "react-redux";
import { showOrder } from "../redux/greenMobile"
import {  IMAGE_URL } from "../utils/constants";

class orderSuccessScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
         orders:null,
         login: false
        };
      }

    componentDidMount(){
        const {greenMobileStore,showOrder} = this.props;
        // const {token, 
        //   //  orderPayload, orderPlaced
        // } = greenMobileStore;
        const token = sessionStorage.getItem("green-mobile-token");
         if(token !== "null" && token !== null){
            let payload ={
           // userId: 46,
            token: `Bearer ${token}`
            }
            showOrder(payload);
            this.setState({login: true})
        }
    }

    componentDidUpdate(prevProps) {
        const {greenMobileStore} = this.props;
        const{showOrders} = greenMobileStore;
      
        if (
          prevProps.greenMobileStore.showOrders !== showOrders &&
          showOrders !== null &&
          showOrders !== false 
        ) {
           this.setState({orders:showOrders})
        }
    }

    login=()=>{
        this.props.history.push(
            `/login`
          )
    }

    chat=(id)=>{
        this.props.history.push(
            `/chat/${id}`
          )
    }

    showOrders = (orders)=>{
        if(orders && orders.length > 0){
        let data = orders.map( item => {
        return(
        <div class="container mx-4 my-4 shadow-lg rounded-3 py-3" style={{backgroundColor: "#f2f7f4"}}>
        <div class="row">
            <div class="col-md-9">
                <div class="container fs-5 my-3" style={{color: "#83c111"}}>{item? item.status: ""}</div>
                <div class="container fs-5 my-3" style={{color: "#87888a"}}>{item? item.created_at: ""}</div>
                <div class="container fs-3">{item? `${item.device_name} ${item.variant}`:""}
                </div>
                <div class="container mt-3">
                    <div onClick={()=>{this.chat(item.id)}} class="btn fw-bold text-light rounded continue" id="contact" style={{backgroundColor: "#83c111"}}>Contact with us</div>
                </div>
            </div>
            <div class="col-md-3" >
                <img align = "right" src={item?`${IMAGE_URL}${item.phone_model.image}`:""} class="img-fluid" width="100px" height="100px" alt=""/>
            </div>
        </div>
    </div>
        )
        })
        return data;
    } else {
        return null
    }
    }

    render() {
        const {greenMobileStore} = this.props;
        const {orderPlaced}= greenMobileStore;
        const {orders, login} = this.state;
        return (
          <>
          <div class = "container">
 {/* <div class="container mx-5 my-5 shadow-lg rounded-3 py-5" style={{backgroundColor: "#f2f7f4"}}>
        <div class="row">
            <div class="col-md-9">
                <div class="container fs-3">{orderPlaced? orderPlaced.message:""}
                </div>
                <div class="container mt-3">
                    <div onClick={()=>{this.login()}} class="btn fw-bold text-light rounded continue" id="Sell_more" style={{backgroundColor: "#83c111"}}>Go Back Home</div>
                </div>
            </div>
        </div>
    </div> */}
    { !login ?
     (<div class="container mx-5 my-5 shadow-lg rounded-3 py-5" style={{backgroundColor: "#f2f7f4"}}>
        <div class="row">
            <div class="col-md-9">
                <div class="container fs-3">Please login to continue
                </div>
                <div class="container mt-3">
                    <div onClick={()=>{this.login()}} class="btn fw-bold text-light rounded continue" id="Sell_more" style={{backgroundColor: "#83c111"}}>Login</div>
                </div>
            </div>
        </div>
    </div>
     )
:
this.showOrders(orders)
    }
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
    showOrder: (payload) => showOrder(payload),
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(orderSuccessScreen);