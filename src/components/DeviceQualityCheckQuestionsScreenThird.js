import React, { Component } from "react";
//import { AvRadioGroup, AvRadio } from "availity-reactstrap-validation";
//import { ProblemData } from "./ProblemData"
import "./style.css"
import {  HOST_URL } from "../utils/constants";

class DeviceQualityCheckQuestionsScreenThird extends Component {
    constructor(props) {
        super(props);
        this.state = {
        //     phone_problem_2: {
        //         phone_problem_id: 2,
        //         answers:[]
        //   },
        //   phoneDead: '',
        //   totalPrice: 5000
        };
      }



showProblems=()=>{
    const {phone_problem_2, problemsData} = this.props;
    const {answers} = phone_problem_2;
    let problem = null
    if(problemsData.length>0){
        problem =  problemsData[1].options.map((item, index) =>{
            return(
<div class=" my-2 mx-2 col-sm-6 col-md-3" key ={index}  style={{width: "11.8rem"}}>
<label class="label-class">
    <input type="checkbox" checked={answers.includes(item.id)} onClick={()=>{this.props.handleProblem2(item.id, item.price)}} />
    <span class="span-class">
        <div class="card ">
            <img class="card-img-top" src={`${HOST_URL}${item.image}`} alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text">{item.name}</p>
            </div>
        </div>
    </span>
</label>
</div>
            )
        })
    }
        return problem;    
      }

    render() {
        return (
          <>
                <div class="container-fluid d-inline align-content-center text-center">
                    <div class="row">
                        {this.showProblems()}
                    </div>
                </div>
          </>
        )
    }
}
export default DeviceQualityCheckQuestionsScreenThird;