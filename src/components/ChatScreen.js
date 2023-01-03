import React, { Component } from "react";
import "./style.css"
import "./chat.css"
import { connect } from "react-redux";
import { getChatData } from "../redux/greenMobile"
import {  IMAGE_URL } from "../utils/constants";
import { API_URL } from "../utils/constants";
import axios from "axios";
import ConfirmationModal from "./imageUploadModal";

class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
         chatData:[],
         message: "",
         image: null,
         backgroundImageLeftUrl :"https://image.flaticon.com/icons/svg/327/327779.svg",
         backgroundImageRightUrl :"https://image.flaticon.com/icons/svg/145/145867.svg",
         intervalId: null,
         confirmModal: false
        };
        //const thisBoundedPoller = this.callGetChatData.bind(this);
      }

    componentDidMount(){
        const {match = {}, greenMobileStore,getChatData} = this.props;
        const { params = {} } = match;
        const { id = "" } = params;
        const token = sessionStorage.getItem("green-mobile-token");
             this.callGetChatData(token,id);
             const thisBoundedPoller = this.callGetChatData.bind(this)
          //   clearInterval(thisBoundedPoller);
          let intervalId = setInterval(thisBoundedPoller, 10000);
          this.setState({intervalId})
    }

    callGetChatData=() => {
      const {match = {},getChatData} = this.props;
      const { params = {} } = match;
      const { id = "" } = params;
      const token = sessionStorage.getItem("green-mobile-token");
      let payload={
        id,
        token: `Bearer ${token}`
     }
     if(token !== "null" && token !== null ){
    getChatData(payload)
     } else {
      this.login()
    }
    }

    componentDidUpdate(prevProps) {
        const {greenMobileStore} = this.props;
        const{chatData} = greenMobileStore;
      
        if (
          prevProps.greenMobileStore.chatData !== chatData &&
          chatData !== null &&
          chatData !== false 
        ) {
           this.setState({chatData:chatData})
        }
    }
    componentWillUnmount(){
      //const thisBoundedPoller = this.callGetChatData.bind(this);
      const {intervalId} = this.state;
      clearInterval(intervalId);
    }

    login=()=>{
        this.props.history.push(
            `/login`
          )
    }

    handleMessage=(e)=>{
      let value = e.target.value;
      this.setState({message: value});
    }

    sendChat=()=>{
        const {message} = this.state;
        const {match = {}} = this.props;
        const { params = {} } = match;
        const { id = "" } = params;
        const token = sessionStorage.getItem("green-mobile-token");
        const formData = new FormData();
    formData.append("image", []);
    formData.append("order_id", id);
    formData.append("message", message);
      axios({
        method: "POST",
        url: `${API_URL}/chats`,
        headers: { "Content-Type": "application/json",
                 "Authorization": `Bearer ${token}`
               },
      data : formData
      }).then((response) => {
        if (response.data) {
          this.setState({message:""});
           this.callGetChatData();
        } 
      })
      .catch((error) =>{
        console.log("error", error)
      }
      );
    }

    showChat=()=>{
    const {chatData, backgroundImageLeftUrl, backgroundImageRightUrl} = this.state;
    if(chatData && chatData.length>0){
      let chat =  chatData.map((item, index) =>{
        let date = new Date(item.updated_at)
        return(
      <div class={`msg ${item.admin_id? "left-msg": "right-msg"}`}>
        <div class="msg-img" style={{"background-image": `url(${item.admin_id?backgroundImageLeftUrl:backgroundImageRightUrl})`}}>            
        </div>
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">{item.admin_id? "Admin":"Me"}</div>
            <div class="msg-info-time">{date.toLocaleString()}</div>
          </div>
          <div hidden ={!item.image}>
          <img src={item?`${IMAGE_URL}${item.image}`:""} class="justify-content-center text-center" width="320px" height="auto"
                    alt=""/>
                    </div>
          <div class="msg-text">
            {item.message}
          </div>
        </div>
      </div>
        )
      });
      return chat;
    }else{
      return null
    }
    }

    toggle = () => {
      this.setState((prevState) => ({
        confirmModal: !prevState.confirmModal,
      }));
    }

    submitUpload=(image)=>{
      const {message} = this.state;
      const {match = {}} = this.props;
      const { params = {} } = match;
      const { id = "" } = params;
      let text = message!== "" ? message : "image";
      const token = sessionStorage.getItem("green-mobile-token");
      const formData = new FormData();
  formData.append("image", image);
  formData.append("order_id", id);
  formData.append("message", text);
    axios({
      method: "POST",
      url: `${API_URL}/chats`,
      headers: { "Content-Type": "application/json",
               "Authorization": `Bearer ${token}`
             },
    data : formData
    }).then((response) => {
      if (response.data) {
        this.setState({message:""});
         this.callGetChatData();
      } 
    })
    .catch((error) =>{
      console.log("error", error)
    }
    );
    }

    render() {
        const {greenMobileStore} = this.props;
        return (
          <>
          <div class = "container">
          <section class="msger">

    <main class="msger-chat">
      {this.showChat()}
    </main>
    <ConfirmationModal
    confirmModal={this.state.confirmModal}
    submitUpload={this.submitUpload}
    toggle={this.toggle}
    />
    <form class="msger-inputarea">
      <input type="text" value ={this.state.message} onChange={(e)=>{this.handleMessage(e)}} class="msger-input" placeholder="Enter your message..."/>
      {/* <button type="submit" onClick={()=>{this.sendChat()}}  class="msger-send-btn">Send</button> */}
      <button 
                    onClick={()=>{this.toggle()}}  
                    type="button" 
                    style={{"background-color":"#83C801", border: "#83C801"}}
                    className="msger-send-btn">
                     Upload </button>
      <button 
                    onClick={()=>{this.sendChat()}}  
                    type="button" 
                    style={{"background-color":"#83C801", border: "#83C801"}}
                    className="msger-send-btn">
                     Send </button>
    </form>
  </section>
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
    getChatData: (payload) => getChatData(payload),
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatScreen);