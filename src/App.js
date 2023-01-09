import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './components/Home';
import AllBrands from './components/AllBrands'
import AllModels from './components/AllModels';
import SelectedModel from './components/SelectedModel';
import DeviceQualityCheckQuestions from './components/DeviceQualityCheckQuestions';
import PlaceOrderScreen from './components/PlaceOrderScreen';
import orderSuccessScreen from "./components/orderSuccessScreen";
import LoginScreen from './components/LoginScreen';
import ChatScreen from './components/ChatScreen';
import Error from "./components/Error";
import { connect } from "react-redux";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Warranty from './components/Warranty';
import Career from './components/Career';
import ContactUs from "./components/ContactUs"
import Support from './components/Support';
import Company from './components/Company';
import ChatWithUs from './components/ChatWithUs';
import Services from './components/Services';
import MoreInfo from './components/MoreInfo';
import SellDevice from './components/SellDevice';
import UserProfile from './components/UserProfile';

class App extends Component {
  buy = () => {
    window.open(
      "https://store.gocashit.com/",
      "_blank"
    );
  };
  render() {
    const {greenMobileStore} = this.props;
    //const {token} = greenMobileStore;
    const token = sessionStorage.getItem("green-mobile-token");
    return (
    <Router basename={"/" || ""} >
        <div>
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav ms-auto">
            <li><Link to={'/home'} className="nav-link"> Home </Link></li>
            <li><Link to={'/order-placed'} className="nav-link">Orders</Link></li>
            <li>{!token?<Link to={'/login'} className="nav-link">Login</Link>:<Link to={'#'} className="nav-link">Welcome, User</Link>}</li>
          </ul>
          </nav> */}
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid ">
           
                <a class="navbar-brand" href="#">
                    <img src="/images/LOGO 02.png" class="img-fluid" style={{width: "50px"}} alt=""/>

                </a>
          

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            {/* <i class="fa-solid show-icon p-4 fa-bag-shopping"></i> */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  m-auto mb-2 mb-lg-0" style={{"margin-left":"30px"}}>
                <li class="nav-item" ><Link style={{"color":"grey"}} to={'/home'} className="nav-link"> Home </Link></li>
                    {/* <li class="nav-item">
                        <a class="nav-link" style={{"color":"grey"}} href="#">BUY</a>
                    </li> */}
                <li class="nav-item" >< Link to={'#'}  onClick={() => this.buy()} style={{"color":"grey"}} className="nav-link"> Buy </Link></li>
                   
                <li class="nav-item" ><Link to={'/career'} style={{"color":"grey"}} className="nav-link">  Career </Link></li>

                <li class="nav-item" ><Link to={'/about-us'} style={{"color":"grey"}} className="nav-link"> About Us </Link></li>

                <li class="nav-item" ><Link to={'/warranty'} style={{"color":"grey"}} className="nav-link"> Warranty </Link></li>
                    
                <li class="nav-item" ><Link to={'/contact-us'} style={{"color":"grey"}} className="nav-link"> Contact Us </Link></li>

                </ul>

            </div>
            <div>
                {/* <i class="fa-solid no-icon p-4 fa-magnifying-glass" style={{"font-size": "20px"}}></i> */}
                <Link to={token === "null" || token === null?'/login':'/user'} > <i class="fa-solid no-icon fa-circle-user" style={{"font-size":"25px"}}></i></Link>
                <Link to={'/order-placed'} > <i class="fa-solid no-icon p-4 fa-bag-shopping" style={{"font-size":"25px"}}></i></Link>
            </div>
        </div>
    </nav>
          <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/all-brands' component={AllBrands} />
              <Route exact path='/models/:id' component={AllModels} />
              <Route exact path='/selected-model/:id' component={SelectedModel} />
              <Route exact path='/quality-check/:id' component={DeviceQualityCheckQuestions} />
              <Route exact path='/place-order' component={PlaceOrderScreen} />
              <Route exact path='/order-placed' component={orderSuccessScreen} />LoginScreen
              <Route exact path='/login' component={LoginScreen} />
              <Route exact path='/chat/:id' component={ChatScreen} />
              <Route exact path='/about-us' component={AboutUs} />
              <Route exact path='/warranty' component={Warranty} />
              <Route exact path='/career' component={Career} />
              <Route exact path='/contact-us' component={ContactUs} />
              <Route exact path='/service' component={Services} />
              <Route exact path='/info' component={MoreInfo} />
              <Route exact path='/sell-device' component={SellDevice} />
              <Route exact path='/support' component={Support} />
              <Route exact path='/chat-with-us' component={ChatWithUs} />
              <Route exact path='/company' component={Company} />
              <Route exact path='/user' component={UserProfile} />
              <Route path="/error" exact component={Error}  />
              <Redirect from="/" exact to={"/home"}  />
              <Redirect to="/error" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

//export default App;
const mapStateToProps = ({ greenMobileStore }) => {
  return {
    greenMobileStore
  };
};

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);