import React, { Component } from "react";
import "./style.css"
import { connect } from "react-redux";
import { getVerifiedToken, resetTokenData } from "../redux/greenMobile"
import {  IMAGE_URL } from "../utils/constants";
import * as bootstrap from 'bootstrap';
import { API_URL } from "../utils/constants";
import axios from "axios";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name : null,
                alternate_number : null,
                email : null,
                message: "",
                phone_number:null
        };
      }

    componentDidMount(){
        const token = sessionStorage.getItem("green-mobile-token");
        if(token === "null" || token === null){
            this.props.history.push( `/login` )
        }
        else{
        axios({
            method: "GET",
            url: `${API_URL}/user`,
            headers: { "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
          }).then((response) => {
            if (response.data) {
              if(response.data){
                  const {
                      email,
                      alternate_number,
                      name,
                      phone_number
                  } = response.data
                  this.setState({email,
                    alternate_number,
                    name,
                    phone_number
                  })
              }
            } 
          })
          .catch((error) =>{
            console.log("error", error)
          }
          );
        }
    }

    checkValues=()=>{
      const {email,
        alternate_number,
        name,} = this.state;
        let disable = false;
        if(!email || email === ""){
          disable= true;
        }
        if(!alternate_number || alternate_number === ""){
          disable= true;
        }
        if(!name || name === ""){
          disable= true;
        }
        if( !alternate_number || String(alternate_number).length !== 10  ){
          disable= true;
        }
        return  disable
    }

    componentDidUpdate(prevProps) {
    //     const {greenMobileStore} = this.props;
    //     const{token} = greenMobileStore;
    //   if (
    //      prevProps.greenMobileStore.token !== token &&
    //      token !== null &&
    //     token !== false 
    //     ) {   
    //       sessionStorage.setItem('green-mobile-token',token.token);
    //        // this.props.history.push( `/home` )
    //       }
     }

    handleUpdateUserProfile =()=>{
        const {alternate_number,email,name} = this.state;
       // const {resetTokenData,greenMobileStore} = this.props;
        //const {orderPayload} = greenMobileStore
        const token = sessionStorage.getItem("green-mobile-token");
            axios({
              method: "PUT",
              url: `${API_URL}/user/update`,
              headers: { "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`            
            },
              data : {
                name,
                alternate_number,
                email
                }
            }).then((response) => {
              if (response.data) {
                if(response.data){
                   this.setState({message:response.data.message})
                }
              } 
            })
            .catch((error) =>{
              console.log("error", error)
            }
            );
      }
     
      signOut=()=>{
        const {resetTokenData} = this.props;
        resetTokenData(null);
        sessionStorage.setItem('green-mobile-token', null);
        this.props.history.push( `/home` )
      }
    

      handleChange=(field, e)=>{
        let value = e.target.value
        this.setState({[field]: value, message:""})
      }

    render() {
        //const {greenMobileStore} = this.props;
        const {name,
            alternate_number,
            email,
            message,
            phone_number
        } = this.state;
        return (
          <>
            <div class="container  mt-5 p-4" style={{"width":"450px", "height": "500px", "border-radius": "10px", "background-color":"#F3F3F9"}}>
        <div class="row">
            <div class="col-md-12">

                <p style={{"color":"#405189", "font-weight":"500"}} class="text-center">User Profile

                </p>
                <p class="text-center" style={{"color": "#83C801"}}>
                    {message}
                </p>
                <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" onChange={(e) =>{this.handleChange("email",e)}} value={email} class="form-control w-100" placeholder="Enter Email Address*" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label">Name</label>
                <input type="text" onChange={(e) =>{this.handleChange("name",e)}} value={name} class="form-control w-100" placeholder="Enter Name*" id="exampleInputName"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPhone" class="form-label">Alternate Mobile</label>
                  <input type="number" onChange={(e) =>{this.handleChange("alternate_number",e)}} value={alternate_number} class="form-control w-100" placeholder="Enter Alternate Mobile Number*" id="exampleInputPhone"/>
                 </div>
                 <div class="mb-3">
                  <label for="exampleInputPhone" class="form-label">Mobile Number</label>
                  <input type="number" disabled={true} onChange={(e) =>{this.handleChange("phone_number",e)}} value={phone_number} class="form-control w-100" placeholder="Enter Mobile Number*" id="exampleInputMobilePhone"/>
                 </div>
                    <div className="container text-center mb-4">
                    <button 
                    onClick={()=>{this.handleUpdateUserProfile()}}  
                    type="button" 
                    disabled={this.checkValues()}
                    style={{"background-color":"#83C801", border: "#83C801"}}
                    className="btn btn-success  mt-3">
                     Save </button>{" "}

                     <button 
                    onClick={()=>{this.signOut()}}  
                    type="button" 
                    style={{"background-color":"#83C801", border: "#83C801"}}
                    className="btn btn-success  mt-3">
                     Sign Out </button>
                        </div>
                </form>
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
    resetTokenData:(payload) => resetTokenData(payload)
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfile);