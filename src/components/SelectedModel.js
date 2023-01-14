import React, { Component } from "react";
import {getModelVariantData, storeSelectedModelVariantData,storeSelectedModelExtraData, greenMobileStore} from "../redux/greenMobile"
import { connect } from "react-redux"
import {  IMAGE_URL } from "../utils/constants";
import "./style.css"

class SelectedModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          variant: null,
          selectedVarient: null
        };
      }

      componentDidMount() {
        const {  match = {},  getModelVariantData,} = this.props;
      const { params = {} } = match;
      const { id = "" } = params;
      getModelVariantData(id)
      }

      componentDidUpdate(prevProps) {
        const {greenMobileStore} = this.props;
        const{ modelVariantData } = greenMobileStore;
      
        if (
          prevProps.greenMobileStore.modelVariantData !== modelVariantData &&
          modelVariantData !== null &&
          modelVariantData !== false 
        ) {
          this.setState({variant:modelVariantData})
        }
      }

    getExactValue=()=>{
      const {variant, selectedVarient} = this.state;
      const {storeSelectedModelVariantData, storeSelectedModelExtraData, greenMobileStore} = this.props;
      const {selectedModelExtraData} = greenMobileStore;
      const {device_specification,name,phone_model_id,special_offers} = variant;
      const { price, device_id,variant_id,imei_number } =  selectedVarient;
      let paylaod = {
        device_specification,
        name,
        phone_model_id,
        special_offers,
        price, 
        device_id,
        variant_id,
        imei_number
      };
      let customizedName = `${variant? variant.name:""} ${selectedVarient ? "("+selectedVarient.memory_size +" GB)": "" }`;
      selectedModelExtraData.selectedModelName = customizedName
      storeSelectedModelExtraData(selectedModelExtraData);
        storeSelectedModelVariantData(paylaod);
        this.props.history.push(
            `/quality-check/${device_id}`
          )
    }

    selectVariant=(variantId)=>{
      const {variant} = this.state;
      const {device_variant_details} = variant;
      let selectedVarient = device_variant_details.filter(item => item.variant_id === variantId)
     if(selectedVarient.length >0){
        this.setState({selectedVarient: selectedVarient[0]})
      }
    }

    showVarient =()=>{
      const {variant, selectedVarient} = this.state;
      let radioButton = null;
      if(variant){
        const {device_variant_details} = variant;
        radioButton = device_variant_details.map(item =>{
          return(
            <span style={{"borderRadius":"10px", cursor: "pointer"}} class="px-4 py-2 shadow mx-2">
            <input type="radio" id={item.variant_id} name={item.variant_id} checked = {selectedVarient? selectedVarient.variant_id === item.variant_id: false} onClick={()=>{this.selectVariant(item.variant_id)}} class="pointer-cursor" value={item.memory_size}/>{"  "}
             <label for={item.variant_id} class="fs-5 pointer-cursor">{`${item.memory_size} GB`}</label>
            </span>
          )
      })
      }
      return radioButton
    }

    convertIntoRupees=(price)=>{
      price=price.toString();
    var lastThree = price.substring(price.length-3);
    var otherNumbers = price.substring(0,price.length-3);
    if(otherNumbers !== '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res
    }

    render() {
      const {greenMobileStore} = this.props;
      const {selectedModelExtraData}= greenMobileStore;
      const {selectedModelImage} = selectedModelExtraData;
     const {variant, selectedVarient} = this.state;
        return (
            <>
            <div class="container">
            <div class="container mx-5 my-5 shadow-lg rounded-3 py-5" style={{backgroundColor: "#f2f7f4"}}>
        <div class="row">
            <div class="col-md-3">
                <img src={`${IMAGE_URL}${selectedModelImage}`} class="img-fluid" width="auto" height="300px" alt=""/>
            </div>
            <div class="col-md-9">
                <div class="container fs-3">{variant? variant.name:""} {selectedVarient?`(${selectedVarient.memory_size} GB)`:""} 
                </div>
                {/* start */}
                <div hidden = {selectedVarient} class="container fs-5 my-3">Choose A variant</div>
                <div class="container" hidden = {selectedVarient}>
                 <form>
                   {this.showVarient()}
                 </form>
                </div>
                {/* start */}
                <div hidden = {!selectedVarient} class="container fs-6">Get Upto</div>
                <div hidden = {!selectedVarient} class="container text-danger fs-1 lh-1">{selectedVarient? `₹${this.convertIntoRupees(selectedVarient.price)}`:""}</div>
                {/* <div class="container fs-5 mt-3"><span class="color"> 700+</span> already sold on Green Mobile</div> */}
                <div class="container mt-3">
                    <div isDisabled = {true} className={`btn fw-bold text-light rounded ${!selectedVarient?"disabled":""}`}  style={{backgroundColor: "#83c111"}} 
                    onClick={()=>{this.getExactValue()}}>Get Exact Value &rarr;</div>
                </div>
            </div>
        </div>
        </div>
        </div>
            </>
        );
    }
}
const mapStateToProps = ({ greenMobileStore }) => {
    return {
      greenMobileStore
    };
  };

const mapDispatchToProps = {
    getModelVariantData: (payload) => getModelVariantData(payload),
    storeSelectedModelVariantData: (payload) => storeSelectedModelVariantData(payload),
    storeSelectedModelExtraData: (payload) => storeSelectedModelExtraData(payload),
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectedModel);