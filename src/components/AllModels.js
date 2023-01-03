import React, { Component } from "react";
// import { Models } from "./ModelsData";
// import { Series } from "./seriesData";
import "./style.css"
import {getAllModels,getSeriesData,getBrandModelData,getSeriesModelData, storeSelectedModelExtraData} from "../redux/greenMobile"
import { connect } from "react-redux";
import {  IMAGE_URL } from "../utils/constants";

class AllModels extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedSeries: null,
          models:[],
          series:[]
        };
      }
      
componentDidMount() {
    const {  match = {}, getSeriesData, getBrandModelData, greenMobileStore} = this.props;
  const { params = {} } = match;
  const { id = "" } = params;
   getSeriesData(id);
   getBrandModelData(id)
  }

  componentDidUpdate(prevProps) {
    const {greenMobileStore} = this.props;
    const{ brandModelData, seriesData} = greenMobileStore;
  
    if (
      prevProps.greenMobileStore.brandModelData !== brandModelData &&
      brandModelData !== null &&
      brandModelData !== false 
    ) {
      this.setState({models:brandModelData})
    }

    if (
        prevProps.greenMobileStore.seriesData !== seriesData &&
        seriesData !== null &&
        seriesData !== false 
      ) {
        this.setState({series:seriesData})
      }
  }

showAllModels=()=>{
    const {models} = this.state;
        if(Array.isArray(models)){
            let modelData =  models.map(item =>{
                return(
                    <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="card m-2  shadow border-round p-2">
                        <img src={`${IMAGE_URL}${item.image}`} alt="Card image cap" onClick={()=>{this.selectedModel(item.id,item.image)}} />
                        <p>{item.name}</p>
                    </div>
                    </div>
                )
            })
            return modelData;    
        }else{
            return models.message
        }
        
}

selectedModel=(modelId, image)=>{
    const {storeSelectedModelExtraData, greenMobileStore}  = this.props;
    const {selectedModelExtraData} = greenMobileStore;
    selectedModelExtraData.selectedModelImage = image
    storeSelectedModelExtraData(selectedModelExtraData);
    this.props.history.push(
        `/selected-model/${modelId}`
      )
}

showSeries =()=>{
    const {series} = this.state;
    let seriesData =  series.map(item =>{
        return(
            <div className="card m-2  shadow border-round p-2"  
            onClick={()=>{this.selectedSeries(item.id,item.brand_id)}} 
            style={{width: "15rem"}}
            >
            {item.name}
            </div>
        )
    })
    return seriesData; 
}

showSeletedSeries =()=>{
    const {selectedSeriesValue} = this.state;
    let showSelectedSeries =  selectedSeriesValue.map(item =>{
        return(
            <div className="card m-2  shadow border-round p-2"  
            onClick={()=>{this.unSelectedSeries()}} 
            style={{width: "15rem"}}
            >
            {item.name}
            </div>
        )
    })
    return showSelectedSeries; 
}

unSelectedSeries=()=>{  
    const {  match = {}, getBrandModelData } = this.props;
    const { params = {} } = match;
    const { id = "" } = params;
    this.setState({selectedSeriesValue: null}); 
     getBrandModelData(id)
}

selectedSeries=(seriesId,BrandId)=>{
    const{getSeriesModelData} = this.props;
    const {series} = this.state;
    let selectedSeriesValue = series.filter(item => item.id ===seriesId)
    this.setState({selectedSeriesValue})
    getSeriesModelData(seriesId)
}

    render() {
        const {selectedSeriesValue} = this.state;
        return (
          <>
           {/* <!-- SELECT SERIES STARTS --> */}

<div className="container my-4"><span className="border-left fs-2">Select Series </span>
</div>
<div className="container">
<div className={`row text-center ${selectedSeriesValue? "justify-content-left" : "justify-content-center"}`}>
   {selectedSeriesValue ?this.showSeletedSeries() : this.showSeries()}    
</div>
</div>

{/* <!-- SELECT SERIES ENDS -->  */}




{/* <!-- SELECT PRODUCT STARTS --> */}
<div className="container my-4"><span className="border-left fs-2">Select Models </span>
</div>
<div className="container">

    <div className="row text-center justify-content-center">
        {this.showAllModels()}
</div>


</div>
{/* <!-- SELECT PRODUCT ENDS --> */}
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
    getAllModels: (payload) => getAllModels(payload),
    getSeriesData: (payload) => getSeriesData(payload),
    getBrandModelData: (payload) => getBrandModelData(payload),
    getSeriesModelData: (payload) => getSeriesModelData(payload),
    storeSelectedModelExtraData: (payload) => storeSelectedModelExtraData(payload),
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllModels);