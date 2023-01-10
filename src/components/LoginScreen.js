import React, { Component } from "react";
import "./style.css"
import { connect } from "react-redux";
import { getVerifiedToken, resetTokenData, storeUserId } from "../redux/greenMobile"
import {  IMAGE_URL } from "../utils/constants";
import * as bootstrap from 'bootstrap';
import { API_URL } from "../utils/constants";
import axios from "axios";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
         orders:null,
         checkedLoginAgreement: false,
         login: false,
         userId: null,
         phoneNumber:null,
         showOtpScreen: false,
         otp: null,
         showOtpValue: ""
        };
      }

    componentDidMount(){
        // const {greenMobileStore} = this.props;
        // const {token, 
        // } = greenMobileStore;
    }

    componentDidUpdate(prevProps) {
        const {greenMobileStore} = this.props;
        const{token} = greenMobileStore;
      if (
         prevProps.greenMobileStore.token !== token &&
         token !== null &&
        token !== false 
        ) {   
          sessionStorage.setItem('green-mobile-token',token.token);
            this.props.history.push( `/home` )
          }
     }

    handleGetLoginOtp =()=>{
        const {phoneNumber} = this.state;
        const {resetTokenData,storeUserId} = this.props;
      let payload = {
            "phone_number":phoneNumber,
          }
            axios({
              method: "POST",
              url: `${API_URL}/send-otp`,
              headers: { "Content-Type": "application/json" },
              data : {"phone_number":phoneNumber}
            }).then((response) => {
              if (response.data) {
                if(response.data.message.otp){
                  resetTokenData(null);
                  storeUserId(response.data.message.id);
                  this.setState({userId:response.data.message.id, showOtpValue: response.data.message.otp})
                  this.setState({showOtpScreen: true})
                }
              } 
            })
            .catch((error) =>{
              console.log("error", error)
            }
            );
      }

      setOtp=(e)=>{
        let value = e.target.value
        this.setState({otp: value})
      }
    
      handleLoginAgreement=()=>{
        const {checkedLoginAgreement} = this.state;
        let value = checkedLoginAgreement ? false : true;
        this.setState({checkedLoginAgreement:value});
      }

      setPhoneNumber=(e)=>{
        let value = e.target.value
        this.setState({phoneNumber: value})
      }

      handleVerifyOtp =()=>{
        const {phoneNumber, otp} = this.state;
        const {getVerifiedToken} = this.props;
      let payload = {
            "phone_number":phoneNumber,
             otp,
            "device_name": "test"
          }
        getVerifiedToken(payload);
      }

    render() {
        const { phoneNumber, showOtpScreen, showOtpValue} = this.state;
        return (
          <>
            <div class="container  mt-5 p-4" style={{"width":"450px", "height": "500px", "border-radius": "10px", "background-color":"#F3F3F9"}}>
        <div class="row">
            <div class="col-md-12">

                <p style={{"color":"#405189", "font-weight":"500"}} class="text-center">Welcome Back !

                </p>
                <p class="text-center" style={{"color": "rgb(153, 153, 153)"}}>
                    Sign in to continue to Gocashit.
                </p>
                {!showOtpScreen?
          (
                <form>
                    <div class="mb-3">
                        <label for="username" class="form-label">Please enter your phone number</label>
                        <input type="text" onChange={this.setPhoneNumber} placeholder="Mobile Number" class="form-control" id="username"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    {/* <button type="submit" onClick={()=>{this.handleGetLoginOtp()}} class="btn w-100 text-light" style={{"background-color":"#83C801"}}>Sign
                        In</button> */}
                    <div className="container text-center mb-4">
                        <button 
                    onClick={()=>{this.handleGetLoginOtp()}}  
                    type="button" 
                    style={{"background-color":"#83C801", border: "#83C801"}}
                    className="btn btn-success btn-lg  mt-3">
                     Sign In </button>
                     </div>
                </form>
          ):
          (
            <form>
            <small>We’ve sent an OTP on {phoneNumber} is </small><a href="#">{showOtpValue}</a> <br/>
            <div class="mb-3 mt-2">
                <label for="password" class="form-label">Please enter OTP</label>
                <input type="password" onChange={this.setOtp} placeholder="Enter OTP" class="form-control"
                    id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
            </div>
            {/* <button type="submit"  onClick={()=>{this.handleVerifyOtp()}}  class="btn w-100 text-light" style={{"background-color":"#83C801"}}>Verify
                Otp</button> */}
                <div className="container text-center mb-4">
                        <button 
                    onClick={()=>{this.handleVerifyOtp()}}  
                    type="button" 
                    style={{"background-color":"#83C801", border: "#83C801"}}
                    className="btn btn-success btn-lg  mt-3">
                     Verify Otp </button>
                     </div>
        </form>
          )
    }
                <div id="signinwith">
                    <h3>Sign In with</h3>
                </div>
                <div class="signin-with-brands text-center">
                    <i class="fa-brands fa-facebook-f" style={{"background-color": "#405189", "padding": "10px 13px"}}></i>{" "}
                    <i class="fa-brands fa-google" style={{"background-color": "#f06548"}}></i>{" "}
                    <i class="fa-brands fa-github" style={{"background-color": "#1c1f23"}}></i>{" "}
                    <i class="fa-brands fa-twitter" style={{"background-color": "#299cdb"}}></i>
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
    getVerifiedToken: (payload) => getVerifiedToken(payload),
    resetTokenData:(payload) => resetTokenData(payload),
    storeUserId:(payload) => storeUserId(payload),
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginScreen);