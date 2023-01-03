import React, { Component } from "react";
import "./style.css"
import DeviceQualityCheckQuestionsScreenFirst from "./DeviceQualityCheckQuestionsScreenFirst";
import DeviceQualityCheckQuestionsScreenSecond from "./DeviceQualityCheckQuestionsScreenSecond";
import DeviceQualityCheckQuestionsScreenThird from "./DeviceQualityCheckQuestionsScreenThird";
import {getQuestionsData,getProblemsData,storeOrderPayloadData, getVerifiedToken, resetTokenData, storeUserId} from "../redux/greenMobile"
import { API_URL } from "../utils/constants";
import axios from "axios";
import { connect } from "react-redux";
import * as bootstrap from 'bootstrap';
import DropzoneComponent from './Dropzone';
class DeviceQualityCheckQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
          quesAns: {
          },
          phone_problem_1: {
            phone_problem_id: 1,
            answers:[]
          },
          phone_problem_2: {
          phone_problem_id: 2,
          answers:[]
          },
          phoneDead: true,
          totalPrice: 0,
          showScreen:"FIRST",
          quetionsData:[],
          problemsData:[],
          phoneNumber: null,
          otp: null,
          imeiNumber: null,
          file:null,
          userId:null,
          showOtpValue:""
        };
      }
componentDidMount(){
  const {  match = {}, getQuestionsData, getProblemsData, greenMobileStore} = this.props;
  const { params = {} } = match;
  const { id = "" } = params;
  const {selectedVariantData} = greenMobileStore;
  if(selectedVariantData){
  const {price} = selectedVariantData;
  this.setState({totalPrice:price});
}else{
  this.props.history.goBack()
}
    getQuestionsData(id);
    getProblemsData(id);
}

componentDidUpdate(prevProps) {
  const {greenMobileStore} = this.props;
  const {phoneDead} = this.state;
  const{quetionsData, problemsData, token} = greenMobileStore;

  if (
    prevProps.greenMobileStore.quetionsData !== quetionsData &&
    quetionsData !== null &&
    quetionsData !== false 
  ) {
    this.setState({quetionsData})
  }

  if (
    prevProps.greenMobileStore.problemsData !== problemsData &&
    problemsData !== null &&
    problemsData !== false 
  ) {
    this.setState({problemsData})
  }
  if (
    prevProps.greenMobileStore.token !== token &&
    token !== null &&
    token !== false 
  ) {
    sessionStorage.setItem('green-mobile-token',token.token);
    if(phoneDead){
    this.upload();
    }else{
    this.props.history.push(
      `/place-order`
    )
    }
  }
}
      
 handleRadio=(quesId, value, price)=>{
            const {quesAns,totalPrice} = this.state;
            let totalPriceValue = totalPrice;
            let searchKeys = Object.keys(quesAns);
            if(searchKeys.includes(String(quesId))){
              if(value){
                totalPriceValue = totalPriceValue - price;
              }else{
                totalPriceValue = totalPriceValue + price;
              }
            } else if(value){
              totalPriceValue = totalPriceValue - price;
            } 
            quesAns[quesId] = value;
            this.setState({ quesAns, totalPrice:totalPriceValue });
      }

 handleProblem1=(problemId, price)=>{
        const {phone_problem_1,totalPrice} = this.state;
        let totalPriceValue = totalPrice;
        const {answers} = phone_problem_1;
        if(answers.includes(problemId)){
          answers.splice(answers.indexOf(problemId), 1);
          totalPriceValue= totalPriceValue+price;
        } else{
          answers.push(problemId)
          totalPriceValue =totalPriceValue-price;
        }
       this.setState({ phone_problem_1,totalPrice:totalPriceValue });
    }

 handleProblem2=(problemId, price)=>{
        const {phone_problem_2} = this.state;
        const {answers} = phone_problem_2;
        if(answers.includes(problemId)){
          answers.splice(answers.indexOf(problemId), 1);
        } else{
          answers.push(problemId)
        }
       this.setState({ phone_problem_2 });
    }

checkDisabled =()=>{
    const {quesAns, quetionsData} = this.state;
    let quesLength = quetionsData.length;
    let answerLength = Object.keys(quesAns).length;;
    if (quesLength === answerLength){
        return false;
    }
    else{
        return true
    }
}

setDeadPhone=(value)=>{
    this.setState({phoneDead:value})
}

ChangeShowScreen=()=>{
    const {showScreen} = this.state;
    switch(showScreen){
        case "FIRST":
            return "SECOND"
        case "SECOND":
            return "THIRD"
        default:
          return "FIRST"
    }
}

continue=()=>{
  const {quesAns, phone_problem_1, phone_problem_2, totalPrice} = this.state;
  const {greenMobileStore, storeOrderPayloadData} = this.props;
  const {selectedVariantData} = greenMobileStore;
    let showScreen = this.ChangeShowScreen()
    if(showScreen ==="FIRST"){
      const {device_id,variant_id, phone_model_id} =  selectedVariantData;
      let searchKeys = Object.keys(quesAns);
      let questions=[]
       searchKeys.map(item => {
          let value =  {
            "question_id": Number(item),
            "answer": quesAns[item] ? 1:0
        }
        questions.push(value)
      })
      let payload = {
        "price": totalPrice,
        "user_id": null,
        "device_id": device_id,
        "variant_id": variant_id,
        "phone_model_id": phone_model_id,
        "responses": {
            "questions": questions,
            "phone_problem_1": { ...phone_problem_1 },
            "phone_problem_2" : {...phone_problem_2 },
        }
      }
      storeOrderPayloadData(payload);
     // if(!payload.user_id){
        this.openImeiPopup()
      //}
    }else{
    this.setState({showScreen})
    }
}

upload=(userIdValue)=>{
  const {imeiNumber, file} = this.state;
  const {greenMobileStore} = this.props;
  const {selectedVariantData, 
  //  token
  } = greenMobileStore;
  let user_Id = null;
  if(userIdValue){
    user_Id = userIdValue
  }else{
const {userId} = this.state
user_Id = userId
  }
  const {device_id,variant_id, phone_model_id} =  selectedVariantData;
  const token = sessionStorage.getItem("green-mobile-token");
const formData = new FormData();
    formData.append("image", file);
    formData.append("user_id", JSON.stringify(user_Id));
    formData.append("device_id", JSON.stringify(device_id));
    formData.append("variant_id", JSON.stringify(variant_id));
    formData.append("phone_model_id", JSON.stringify(phone_model_id));
    formData.append("imei", JSON.stringify(imeiNumber));

    axios({
      method: "POST",
      url: `${API_URL}/order/dead-phone`,
      headers: { "Content-Type": "application/json",
                 "Authorization": `Bearer ${token}`
               },
      data : formData
    }).then((response) => {
      if (response.data) {
        if(response.data.success){
          this.props.history.push(
            `/order-placed`
          )
        }
      } 
    })
    .catch((error) =>{
      console.log("error", error)
    }
    );
}

ChangeBackScreen=()=>{
  const {showScreen} = this.state;
  switch(showScreen){
      case "SECOND":
          return "FIRST"
      case "THIRD":
          return "SECOND"
      default:
        return "FIRST"
  }
}

back=()=>{
  let showScreen = this.ChangeBackScreen()
  this.setState({showScreen})
}

openImeiPopup=()=>{
  var myModal = new bootstrap.Modal(document.getElementById('ImeiModel'), {
    keyboard: false
  })
  myModal.show()
}

openSingInPopup=()=>{
const{imeiNumber, phoneDead} = this.state;
const token = sessionStorage.getItem("green-mobile-token");
const {greenMobileStore, storeOrderPayloadData} = this.props;
  const {userId,orderPayload} = greenMobileStore
  if(userId && (token !== null || token !== "null")){
  if(phoneDead){
    this.setState({userId });
    this.upload(userId);
    }else{
      orderPayload.user_id = userId;
      orderPayload.imei_number = imeiNumber;
      storeOrderPayloadData(orderPayload);
      this.props.history.push(
        `/place-order`
      )
    }
  }else{
  var myModal = new bootstrap.Modal(document.getElementById('signInModel'), {
    keyboard: false
  })
  myModal.show()
}
}

// closeSingInPopup=()=>{
//   var closeModal = new bootstrap.Modal(document.getElementById('signInModel'), {
//     keyboard: false
//   })
//    closeModal.hide()
// }

openOtpPopup=()=>{
  var myModal = new bootstrap.Modal(document.getElementById('otpmodel'), {
    keyboard: false
  })
  myModal.show()
}

setPhoneNumber=(e)=>{
  let value = e.target.value
  this.setState({phoneNumber: value})
}

setImeiNumber=(e)=>{
  let value = e.target.value
  this.setState({imeiNumber: value})
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

handleGetLoginOtp =()=>{
  const {phoneNumber, imeiNumber, phoneDead} = this.state;
  const {resetTokenData,storeOrderPayloadData,greenMobileStore, storeUserId} = this.props;
  const {orderPayload} = greenMobileStore
      axios({
        method: "POST",
        url: `${API_URL}/send-otp`,
        headers: { "Content-Type": "application/json" },
        data : {"phone_number":phoneNumber}
      }).then((response) => {
        if (response.data) {
          if(response.data.message.otp){
            resetTokenData(null);
            if(phoneDead){
              storeUserId(response.data.message.id);
            this.setState({userId:response.data.message.id, showOtpValue: response.data.message.otp })
            }else{
              orderPayload.user_id = response.data.message.id;
              orderPayload.imei_number = imeiNumber;
              storeUserId(response.data.message.id);
              storeOrderPayloadData(orderPayload)
              this.setState({ showOtpValue: response.data.message.otp })
            }
          this.openOtpPopup()
          }
        } 
      })
      .catch((error) =>{
        console.log("error", error)
      }
      );
}

onFileSelect = (files) => {
  this.setState({ file: files ? files[0]: files });
};

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
        const {phoneDead, showScreen, checkedLoginAgreement, phoneNumber, file, showOtpValue} = this.state;
        return (
          <>
          {/** IMEI number enter popup start */}
          <div class="modal fade amk right from-right show-in-builder bd-example-modal-lg"   id="ImeiModel" tabindex="-1"
        role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
        <div data-bs-backdrop={true} class="modal-dialog modal-lg" style={{"min-width": "40%"}} role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&#x2715;</span>
                    </button>
                </div>
                <div class=" justify-content-center text-center m-4">
                    <img src="/images/signin.jpg" class="justify-content-center text-center" width="320px" height="auto"
                        alt=""/>
                    <h2>Please enter your mobile IMEI number</h2>
                    <form action="#" class="mt-4">
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" onChange={this.setImeiNumber} placeholder="IMEI Number" aria-label="Username"
                                aria-describedby="basic-addon1"/>
                        </div>
                       <br/>
                        <button style={{"background-color":"#83C801", border: "#83C801"}} type="button" data-bs-toggle="modal" onClick={()=>{this.openSingInPopup()}} class="btn btn-primary mt-3 btn-lg btn-block">Continue</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
{/** IMEI number enter popup Ends */}
{/** SignIn popup Strats */}
           <div class="modal fade amk right from-right show-in-builder bd-example-modal-lg"   id="signInModel" tabindex="-1"
        role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
        <div data-bs-backdrop={true} class="modal-dialog modal-lg" style={{"min-width": "40%"}} role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&#x2715;</span>
                    </button>
                </div>
                <div class=" justify-content-center text-center m-4">
                    <img src="/images/signin.jpg" class="justify-content-center text-center" width="320px" height="auto"
                        alt=""/>
                    <h2>You’re just 1-step away from selling your device.</h2>
                    <small>Please enter your phone number</small>
                    <form action="#" class="mt-4">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">+91</span>
                            </div>
                            <input type="number" class="form-control" onChange={this.setPhoneNumber} placeholder="Mobile Number" aria-label="Username"
                                aria-describedby="basic-addon1"/>
                        </div>
                       <input type="checkbox" id="checkbox" checked={checkedLoginAgreement} onClick={()=>{this.handleLoginAgreement()}} required/>
                       I agree to the <a href="#" class="color"> Terms and Conditions</a>
                       <br/>
                        <button style={{"background-color":"#83C801", border: "#83C801"}} disabled={!checkedLoginAgreement} type="button" data-bs-toggle="modal" onClick={()=>{this.handleGetLoginOtp()}} class="btn btn-primary mt-3 btn-lg btn-block">Continue</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
{/** SignIn popup Ends */}
{/** Verify OTP popup Start */}
<div class="modal fade amk right from-right show-in-builder bd-example-modal-lg" id="otpmodel" tabindex="-1"
    role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" style={{"min-width": "30%"}} role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&#x2715;</span>
                </button>
            </div>
            <div class=" justify-content-center text-center m-4">
                <img src="/images/otp.png" class="justify-content-center text-center" width="320px" height="auto"
                    alt=""/>
                <h2>Enter OTP</h2>
                <small>We’ve sent an OTP on {phoneNumber} is </small><a href="#">{showOtpValue}</a>
                <form action="#" class="mt-5">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" onChange={this.setOtp} placeholder="Enter OTP" aria-label="otp"
                            aria-describedby="basic-addon1"/>
                    </div>
<a href="#">Resend OTP</a>
<a href="#">Get on call</a>
<br/>
                    <button style={{"background-color":"#83C801", border: "#83C801"}} type="button" data-bs-toggle="modal" onClick={()=>{this.handleVerifyOtp()}} class="btn btn-primary mt-3 btn-lg btn-block">Verify OTP</button>
                </form>
            </div>
        </div>
    </div>
</div>
{/** Verify OTP popup Ends */}


            <div className="container justify-content-center">
        <div className="row mt-5 justify-content-center">
            <div className="col-md-8 border-round shadow align-content-center">
            <div className="container text-center mt-5">
                    <div className="container fs-2"> Tell us a few things about your device!</div> <br/>
                    <div className="container mb-4"> <a href="#" style={{color: "black"}}>See what this means ?</a></div>
                </div>
                <div hidden={showScreen !== "FIRST"}>
            <DeviceQualityCheckQuestionsScreenFirst
               {...this.state}
               handleRadio={this.handleRadio}
               setDeadPhone={this.setDeadPhone}
            /> 
            </div>
            <div hidden={!phoneDead}>
            <DropzoneComponent
                     onFileSelect = {this.onFileSelect}
                     onFileRemove = {()=>{}}
                     multiple = {false}
                     acceptFileType = {'.jpg,.JPG,.JPEG,.PNG,.png'}
                     msg ={"Upload image Only!"}
                     reset={false}
                     clearForm={()=>{}}
                  />
                  </div>
            <div hidden={showScreen !== "SECOND"}>
            <DeviceQualityCheckQuestionsScreenSecond
            {...this.state}
            handleProblem1={this.handleProblem1}
            />
            </div>
            <div hidden={showScreen !== "THIRD"}>
            <DeviceQualityCheckQuestionsScreenThird
            {...this.state}
            handleProblem2={this.handleProblem2}
            />
            </div>
            <div className="container text-center mb-4">
            <button 
                    disabled={phoneDead!==false || this.checkDisabled()} 
                    hidden={showScreen==="FIRST"}
                    onClick={this.back} type="button"  style={{"background-color":"#83C801", border: "#83C801"}} className="btn btn-success btn-lg mt-3"><span className="fs-4">
                    &#8592;</span> Back </button>{" "}
                    <button 
                    hidden = {phoneDead}
                    disabled={phoneDead!==false || this.checkDisabled()} 
                    onClick={this.continue}  style={{"background-color":"#83C801", border: "#83C801"}} type="button" className="btn btn-primary btn-lg mt-3" >Continue <span className="fs-4">
                            &#8594;</span></button>
                    <button 
                    hidden = {!phoneDead}
                    disabled={file === null} 
                    onClick={this.openImeiPopup} type="button"  style={{"background-color":"#83C801", border: "#83C801"}} className="btn btn-primary btn-lg mt-3" >Upload <span className="fs-4">
                            &#8593;</span></button>
                </div>
            </div>
            {/* <div className="col-md-3 mx-4 border-round shadow">
                <div className="container-fluid mt-5">
                    <img src="/images/xiaomi/mi 10i.jpg" style={{height: "60px"}} alt=""/>
                    Xiaomi Mi A2 (4 GB/64 GB)
                </div>
            </div> */}
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
  getQuestionsData: (payload) => getQuestionsData(payload),
  getProblemsData: (payload) => getProblemsData(payload),
  storeOrderPayloadData: (payload) => storeOrderPayloadData(payload),
  getVerifiedToken: (payload) => getVerifiedToken(payload),
  resetTokenData: (payload) => resetTokenData(payload),
  storeUserId: (payload) => storeUserId(payload),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceQualityCheckQuestions);