import React from "react";

import SingleInfo from './components/SingleInfo';
import SingleStep from './components/SingleStep';
import TrackingTitle from './components/TrackingTitle';

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{


    return (
      <div className="main_container">
        <div class="container">
          <TrackingTitle Title={"Tracking Order No - "} Number={"001698653lp"}/>
          <div class="card">
            <div class="tracking__main">
              <div class="tracking__main--info d-flex flex-wrap flex-sm-nowrap justify-content-between py-3  ">
              <SingleInfo infoName={"Shipped Via:"} infoDetails={"UPS Ground"}/>
              <SingleInfo infoName={"Status:"} infoDetails={"Checking Quality"}/>
              <SingleInfo infoName={"Expected Date:"} infoDetails={"APR 27, 2021"}/>
              </div>
            </div>
          
            <div class="card-body">
              <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                <SingleStep StepStatus={"completed"} StepIcon={"fa fa-shopping-cart"} StepTitle={"Ordered"}/>
                <SingleStep StepStatus={"completed"} StepIcon={"fa fa-truck"} StepTitle={"In Transit"}/>
                <SingleStep StepStatus={""} StepIcon={"fa fa-car"} StepTitle={"Out of delivery"}/>
                <SingleStep StepStatus={""} StepIcon={"fa fa-home"} StepTitle={"Delivered"}/>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    );
}
export default App;