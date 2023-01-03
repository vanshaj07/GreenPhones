import React, { Component } from "react";
//import { AvRadioGroup, AvRadio } from "availity-reactstrap-validation";
import "./style.css"

class DeviceQualityCheckQuestionsScreenFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
        //   quesAns: {
        //   },
        //   phoneDead: '',
        //   totalPrice: 5000
        };
      }

//  handleRadio=(quesId, value)=>{
//           const {quesAns} = this.state;
//             quesAns[quesId] = value;

//             this.setState({ quesAns });
//       }

showQuestions=()=>{
        const{quesAns, phoneDead, quetionsData} = this.props;
        let ques =  quetionsData.map((item, index) =>{
            return(
<div className="container mb-5" hidden={phoneDead !== false} key={`${item.id}`}>
<div className="container">
    <p className="fw-bold">{`${index+1}. ${item.description}`}</p>
    {/* <small>{item.description}</small> */}
</div>
<br/>
<div className="form-check form-check-inline" value={false}  key={`${item.id}_No`}>
    <div className="container"><input className="form-check-input" type="radio" name={`inlineRadioOptions_${item.id}`}
            id={`${item.id}_No`}  onChange={()=>{}}  key={`${item.id}_No`} value={quesAns[item.id]} checked={quesAns[item.id]===false} onClick={()=>{this.props.handleRadio(item.id, false, item.price)}}/>
        <label  className="form-check-label" htmlFor="inlineRadio1">No</label>
    </div>
</div>
<div className="form-check form-check-inline" key={`${item.id}_yes`}>
    <input className="form-check-input" type="radio" name={`inlineRadioOptions_${item.id}`} id={`${item.id}_yes`}
       key={`${item.id}_yes`} onChange={()=>{}}  value={quesAns[item.id]} checked={quesAns[item.id]===true} onClick={()=>{this.props.handleRadio(item.id, true, item.price)}}/>
    <label className="form-check-label" htmlFor="inlineRadio2">Yes</label>
</div>
</div>

            )
        })
        return ques;    
      }

    render() {
        const {phoneDead} = this.props;
        return (
          <>
                <div className="container mb-5">
<div className="container">
    <p className="fw-bold">Is your phone is Dead?</p>
</div>
<br/>
<div className="form-check form-check-inline">
    <div className="container"><input className="form-check-input" type="radio" name={`inlineRadioOptions_DeadNo`}
            id={`Dead_No`}  onChange={()=>{}} value={phoneDead} checked={phoneDead===false} onClick={()=>{this.props.setDeadPhone(false)}}/>
        <label  className="form-check-label" htmlFor="inlineRadio1">No</label>
    </div>
</div>
<div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name={`inlineRadioOptions_DeadYes`} id={`Dead_yes`}
        onChange={()=>{}}  value={phoneDead} checked={phoneDead===true} onClick={()=>{this.props.setDeadPhone(true)}}/>
    <label className="form-check-label" htmlFor="inlineRadio2">Yes</label>
</div>
</div>
            {this.showQuestions()}
          </>
        )
    }

}
export default DeviceQualityCheckQuestionsScreenFirst;