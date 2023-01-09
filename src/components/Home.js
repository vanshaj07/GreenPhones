import React, { Component } from "react";
//import axios from "axios";
// import {Brands} from "./BrandsData"
// import {Models} from "./ModelsData";
import FAQHomeScreen from "./FAQ"
import GreenMobileWorks from "./GreenMobileWorks";
import WhyUsHomeScreen from "./WhyUsHomeScreen";
import {getAllBrands,getAllModels} from "../redux/greenMobile"
import { connect } from "react-redux";
import {  IMAGE_URL } from "../utils/constants";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./style.css"

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          brands: [],
          models: []
        };
      }


  componentDidMount() {
    const {getAllBrands, getAllModels, greenMobileStore} = this.props;
    const{allBrandData, allModelData } = greenMobileStore;
    getAllBrands();
    getAllModels();
      }

selectedBrand=(brandId)=>{
   // debugger;
    this.props.history.push(
        `/models/${brandId}`
      )
}

selectedModel=(modelId)=>{
    //debugger;
    this.props.history.push(
        `/selected-model/${modelId}`
      )
}

showAllBrands=()=>{
  const{brands} = this.state;
    let brandData =  brands.map(item =>{
        return(
       <div className="card m-2  carousel-cell shadow border-round" style={{width: "8rem"}}>
           <img className="card-img-top" src={`${IMAGE_URL}${item.image}`} alt="Card image cap" onClick={()=>{this.selectedBrand(item.id)}}/>
       </div>
        )
    })
    return brandData;    
}

showAllModels=()=>{
  const {models} = this.state;
    let modelData =  models.map(item =>{
        return(
       <div className="card m-2  carousel-cell shadow border-round" style={{width: "8rem"}}>
          <img className="card-img-top" src={`${IMAGE_URL}${item.image}`} alt="Card image cap" onClick={()=>{this.selectedModel(item.id)}}/>
          <p className="text-center">{item.name}</p>
       </div>
        )
    })
    return modelData;    
}

showSpecificBrands=()=>{
  const{brands} = this.state;
    let brandData =  brands.slice(0, 4).map(item =>{
        return(
       <div className="card m-2 box-shadow" style={{"width": "8rem"}}>
          <img src={`${IMAGE_URL}${item.image}`}  className="card-img-top"  alt="Card image cap" onClick={()=>{this.selectedBrand(item.id)}} />
       </div>
        )
    })
    return brandData;    
}

componentDidUpdate(prevProps) {
  const {greenMobileStore} = this.props;
  const{allBrandData, allModelData} = greenMobileStore;

  if (
    prevProps.greenMobileStore.allBrandData !== allBrandData &&
    allBrandData !== null &&
    allBrandData !== false 
  ) {
    this.setState({brands:allBrandData})
  }

  if (
    prevProps.greenMobileStore.allModelData !== allModelData &&
    allModelData !== null &&
    allModelData !== false 
  ) {
    this.setState({models:allModelData})
  }
}

  render() {
    // const {greenMobileStore} = this.props;
    const {brands, models} = this.state;
  // const top100Films = [
  //   { id: 1, name: "Infinit", email: "infinit@gmail.com" },
  //   { id: 2, name: "Bility", email: "bility@gmail.com" }
  // ];
    // const{allBrandData, allModelData} = greenMobileStore;
    return (
      <>
        {/* <!-- MAIN SCREEN STARTS --> */}
<div class="container">
<div className="container shadow-lg mt-5"
 style={{backgroundColor: "#f2f7f4"}}
 >
   <div className="row">
       <div className="col-md-8">
           <div className="container fs-1">Sell your Mobile Phone for Instant Cash</div>
           <div className="container fs-6">
               <span className="color fs-4"> &#10004;</span>Maximum Value
               <span className="color fs-4"> &#10004;</span>Safe & Hassle-free
               <span className="color fs-4"> &#10004;</span>Free Doorstep Pickup
           </div>


           <div className="container my-4">
               {/* <form action="" className="search-bar" autocomplete="on"> */}
                   {/* <input type="text" placeholder="Search your mobile to sell" name="q"/>
                   <button type="submit"><img src="/images/search.png" alt=""/></button> */}
                    <Autocomplete
      id="combo-box-demo"
      className="search-bar"
      options={models}
      getOptionLabel={(option) => `${option.name}`}
      onChange={(event, option) => {
          this.selectedModel(option.id);
      }}
      inputValue={this.state.selectedValue}
      style={{ width: "auto", background: "transparent"  }}
      renderInput={(params) => (
         <TextField  {...params} label="Search your mobile to sell" variant="outlined" />
      )}
    />
             {/* </form> */}
           </div>
           <div className="container mt-5 mb-4">
               <h6> OR CHOOSE A BRAND</h6>
           </div>
           <div 
           className="container d-flex m-2 justify-content-center"
           >
               {this.showSpecificBrands()}
               <div className="container  position-relative">
                   <div className="container position-absolute" style={{bottom: 0,left: 0}}><a href="/all-brands"
                           style={{textDecoration: "none", color: "black"}}> More Brands <span
                               className="fs-4">&#187;</span>
                       </a>
                   </div>
               </div>
           </div>

       </div>
       <div className="col-md-4">
           <img src="/images/home.png" className="img-fluid" width="400px" height="500px" alt=""/>
       </div>
   </div>
</div>

{/* <!-- MAIN SCREEN ENDS --> */}
{/* <!-- HOW GREEN MOBILE WORKS STARTS --> */}

<GreenMobileWorks />

{/* <!-- HOW GREEN MOBILE WORKS ENDS --> */}
{/* <!-- WHY US STARTS --> */}

<WhyUsHomeScreen />

{/* <!-- WHY US ENDS --> */}
{/* <!-- TOP SELLING BRANDS STARTS --> */}

<div className="container my-4"><span className="border-left fs-2">Top Selling Brands </span>
</div>
<div className="container ">
   <div className="row carousel" data-flickity='{"wrapAround" : true,"autoplay" : true,"pageDots":false}'>
       {this.showAllBrands()}
   </div>
</div>

{/* <!-- TOP SELLING BRANDS ENDS --> */}
 {/* TOP SEELING MODELS STARTS*/}

<div className="container my-4"><span className="border-left fs-2">Top Selling Brands </span>
</div>
<div className="container ">
   <div className="row carousel" data-flickity='{"wrapAround" : true,"autoplay" : true,"pageDots":false}'>
        {this.showAllModels()}
   </div>
</div>
{/* TOP SELLING MODELS ENDS */}

{/* FAQS STARTS */}
   <FAQHomeScreen />
{/* FAQS ENDS */}
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
  getAllBrands: (payload) => getAllBrands(payload),
  getAllModels: (payload) => getAllModels(payload)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);