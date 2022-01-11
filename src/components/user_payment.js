import React, { Component } from 'react';
import User_nav from './user_nav';

import Payment from '../assets/payment.png'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import axios from 'axios';

class user_payment extends Component {
    constructor (props) {
        super(props);
        this.state = {
         
            userDataReg : {
                card_number:props.card_number,
                expiry_date:props.expiry_date,
                cvv:props.cvv,
                customer_name:props.customer_name,
                price:props.price
            }
        }
      }

      handleCustomerNameChanged(event) {
        var userDataReg        = this.state.userDataReg;
        userDataReg.customer_name  = event.target.value;

       
        this.setState({ userDataReg: userDataReg });
      }

      handleCvvChanged(event) {
          var userDataReg = this.state.userDataReg;
          userDataReg.cvv=event.target.value;
          this.setState({ userDataReg: userDataReg });
      }

      handleExpiryDateChanged(event) {
          var userDataReg = this.state.userDataReg;
          userDataReg.expiry_date=event.target.value;
          this.setState({ userDataReg: userDataReg });
      }

      handleCardNumberChanged(event) {
          var userDataReg = this.state.userDataReg;
          userDataReg.card_number=event.target.value;

            this.setState({ userDataReg: userDataReg });
          

         
      }

      handleButtonClicked() {


        if(this.state.userDataReg.card_number==null)
        {
            toast.warning("Please fill card number!!",{autoClose:3000,theme:'dark'})
        }
        else if(this.state.userDataReg.expiry_date==null)
        {
            toast.warning("Please fill expiry date!!",{autoClose:3000,theme:'dark'})
        }
        else if(this.state.userDataReg.cvv==null)
        {
            toast.warning("Please fill CVV!!",{autoClose:3000,theme:'dark'})
        }
        else if(this.state.userDataReg.customer_name==null)
        {
            toast.warning("Please fill customer name!!",{autoClose:3000,theme:'dark'})
        }
        else{

        console.log("CARD NUMBER=======",this.state.userDataReg.card_number);
        console.log("EXPIRY_DATE=======",this.state.userDataReg.expiry_date);
        console.log("CVV=======",this.state.userDataReg.cvv);
        console.log("CUSTOMER_NAME=======",this.state.userDataReg.customer_name);
        console.log("PRICE======",this.state.tprice);


        // const url="http://localhost:3000/waste/add";

        // const header = {
        //  'Content-Type': 'application/json',
        // }
         

        const params = {
         type:this.props.location.state.waste_type,
         quantity:this.props.location.state.quantity,
         amount:this.state.tprice
        
       }

       console.log("params",params)
      
       fetch('http://localhost:3000/waste/add', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+this.state.token
        },
    })
    .then(res => res.json())
    .then((data) => {console.log("Result========",data)
  
    if(data.success==true)
    {
        this.setState({
            message:data.message
        })

        alert(this.state.message)
        this.props.history.push("/user_dashboard")
    }
    else{
        alert("Failed!")
    }
      
}); 


        }
      }  

      


      componentDidMount() {


        const documentData = JSON.parse(localStorage.getItem('logindata'));
        const session_data=  window.sessionStorage.getItem("isLoggedIn")



        console.log("LOGIN_DATA====",documentData);
        console.log("SESSION_DATA====",session_data);

        this.setState({
            token:documentData.token
        })
           
        console.log("wastetype===",this.props.location.state.waste_type)
        console.log("quantity===",this.props.location.state.quantity)

        if(this.props.location.state.quantity=="low")
        {
           console.log("price===","30")
           this.setState({
               tprice:"30"
           })
        }
        else if(this.props.location.state.quantity=="medium")
        {
            console.log("price===","60")
            this.setState({
                tprice:"60"
            }) 
        }

        else if(this.props.location.state.quantity=="high")
        {
            console.log("price===","90")
            this.setState({
                tprice:"90"
            })
        }
      }

    render() {
        return (
            <div>
                 <User_nav/>
                 
            <div className="row d-flex">
            <div className="col-lg-6">
                <div className="card1 pb-5">
                    <div className="row">  </div>
                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={Payment} className="image"/> </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                        
                    </div>
                    <div className="row px-3 mb-4">
                        
                    </div>
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Card Number</h6>
                        </label> 
                        <input 
                        style={{borderRadius:10}}
                        className="mb-4" 
                        type="text" 
                        name="card_number" 
                        placeholder="Enter Card Number"
                        value={this.state.userDataReg.card_number}
                        onChange={this.handleCardNumberChanged.bind(this)}
                        /> 
                        </div>
                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Expiry Date</h6>
                        </label> 
                        <input 
                        style={{borderRadius:10}}
                        className="mb-4" 
                        type="text" 
                        name="expiry_date" 
                        placeholder="Enter Expiry Date"
                        value={this.state.userDataReg.expiry_date}
                        onChange={this.handleExpiryDateChanged.bind(this)}
                        /> 
                        </div>
                    {/* <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Username</h6>
                        </label> <input className="mb-4" type="text" name="email" placeholder="Enter  Username"/> </div> */}
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">CVV</h6>
                        </label> 
                        <input 
                        style={{borderRadius:10}}
                        type="text" 
                        name="cvv" 
                        placeholder="Enter CVV"
                        value={this.state.userDataReg.cvv}
                        onChange={this.handleCvvChanged.bind(this)}
                        /> 
                        </div>
                    <div className="row px-3 mb-4">
                    </div>

                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Card Holder Name</h6>
                        </label> 
                        <input 
                        style={{borderRadius:10}}
                        type="text" 
                        name="password" 
                        placeholder="Enter Card Holder Name"
                        value={this.state.userDataReg.customer_name}
                        onChange={this.handleCustomerNameChanged.bind(this)}
                        /> 
                        </div>

                        <div className="row px-3 mb-4">
                    </div>

                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Price</h6>
                        </label> 
                        <input 
                        style={{borderRadius:10}}
                        type="text" 
                        name="password" 
                        placeholder="Enter Price"
                        value={this.state.tprice}
                        //onChange={this.handleCustomerNameChanged.bind(this)}
                        /> 
                        </div>

                    <div className="row px-3 mb-4">
                    </div>

                    <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center" onClick={this.handleButtonClicked.bind(this)}>PAY NOW</button> </div>
                    {/* <div className="row mb-4 px-3"> <small className="font-weight-bold">Already Registered? <a className="text-danger" onClick={()=>this.props.history.push('/')}>Login</a></small> </div> */}
                </div>
            </div>
        </div>
        {/* <div className="bg-blue py-4">
            <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm"></span> <span className="fa fa-google-plus mr-4 text-sm"></span> <span className="fa fa-linkedin mr-4 text-sm"></span> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
            </div>
        </div> */}
        <ToastContainer/>
    </div>
        );
    }
}

export default user_payment;