import React, { Component } from 'react';
import User_nav from './user_nav';

import Add_request from '../assets/add_request.jpg'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

class User_add_request extends Component {
    constructor (props) {
        super(props);
        this.state = {
         
            userDataReg : {
                name:props.name,
                phone:props.phone,
                waste:props.waste,
                quantity:props.quantity
            },
          
          
        }
      }

      handleQuantityChanged(event) {
        var userDataReg        = this.state.userDataReg;
        userDataReg.quantity  = event.target.value;

       
        this.setState({ userDataReg: userDataReg });
      }

     

    //   handlePhoneChanged(event) {
    //       var userDataReg = this.state.userDataReg;
    //       userDataReg.phone=event.target.value;
    //       this.setState({ userDataReg: userDataReg });
    //   }

      handleNameChanged(event) {
          var userDataReg = this.state.userDataReg;
          userDataReg.name=event.target.value;

            this.setState({ userDataReg: userDataReg });
         
      }

      handleWasteChanged(event)
      {

        var userDataReg = this.state.userDataReg;
        userDataReg.waste=event.target.value;

          this.setState({ userDataReg: userDataReg });

      }

      handleButtonClicked() {

        //var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        // if(this.state.userDataReg.name==null)
        // {
        //     toast.warning("Please fill name!!",{autoClose:3000,theme:'dark'})
        // }
        // else if(this.state.userDataReg.phone==null)
        // {
        //     toast.warning("Please fill phone number!!",{autoClose:3000,theme:'dark'})
        // }
       
         if(this.state.userDataReg.waste==null)
        {
            toast.warning("Please choose type of waste!!",{autoClose:3000,theme:'dark'})
        }
        else if(this.state.userDataReg.quantity==null)
        {
            toast.warning("Please choose quantity!!",{autoClose:3000,theme:'dark'})

        }
        
        else{

        //console.log("NAME=======",this.state.userDataReg.name);
        //console.log("PHONE=======",this.state.price);
        console.log("WASTE=======",this.state.userDataReg.waste);
        console.log("QUANTITY=======",this.state.userDataReg.quantity);
        //console.log("PRICE===",this.state.tprice)

        

        this.props.history.push({
            pathname:"/user_payment",
            state:{
               waste_type:this.state.userDataReg.waste,
               quantity:this.state.userDataReg.quantity
            }
        })
        
        }
      }  


    //   componentDidMount() {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.watchPosition(function(position) {
    //         console.log("Latitude========", position.coords.latitude);
    //         console.log("Longitude=======", position.coords.longitude);
    //       });
    //     }
    //   }

    render() {
        return (
            <div>
                 <User_nav/>
                 
            <div className="row d-flex">
            <div className="col-lg-6">
                <div className="card1 pb-5">
                    <div className="row">  </div>
                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={Add_request} className="image"/> </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5">
                    
                    <div className="row px-3 mb-4">
                        
                        {/* <div className="line"></div> <small className="or text-center">Or</small>
                        <div className="line"></div> */}
                    </div>
                    
                        {/* <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Phone Number</h6>
                        </label> 
                        <input 
                        style={{borderRadius:10}}
                        className="mb-4" 
                        type="text" 
                        name="phone" 
                        placeholder="Enter  Phone Number"
                        value={this.state.userDataReg.phone}
                        onChange={this.handlePhoneChanged.bind(this)}
                        /> 
                        </div> */}
                    {/* <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Username</h6>
                        </label> <input className="mb-4" type="text" name="email" placeholder="Enter  Username"/> </div> */}
                    {/* <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Password</h6>
                        </label> 
                        <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter Password"
                        value={this.state.userDataReg.password}
                        onChange={this.handlePasswordChanged.bind(this)}
                        /> 
                        </div> */}
                    <div className="row px-3 mb-4">


                    <div className=" row px-3 mb-4" style={{marginTop:10,marginRight:80}}>
                        
                    <select 
                    style={{borderRadius:10}}
                    className="form-select" 
                    aria-label="Default select example"
                    value={this.state.userDataReg.waste}
                        onChange={this.handleWasteChanged.bind(this)}
                    >
                         <option selected>Choose Waste Type</option>
                        <option value="bio-waste">Bio Waste</option>
                        <option value="plastics">Plastics</option>
                    </select>
                    </div>

                    <div className=" row px-3 mb-4" style={{marginTop:10,}}>
                    <select 
                    style={{borderRadius:10}}
                    className="form-select" 
                    aria-label="Default select example"
                    value={this.state.userDataReg.quantity}
                        onChange={this.handleQuantityChanged.bind(this)}
                    >
                         <option selected>Choose Quantity Type</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    </div>

                    {/* <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Price</h6>
                        </label> 
                        <input 
                        style={{borderRadius:10}}
                        className="mb-4" 
                        type="text" 
                        name="name" 
                        placeholder="Price"
                        value={this.state.tprice}
                        //onChange={this.handleNameChanged.bind(this)}
                        /> 
                        </div> */}

                        
                    </div>
                    <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center" onClick={this.handleButtonClicked.bind(this)}>ADD REQUEST</button> </div>
                    
                </div>
            </div>
        </div>
        <ToastContainer/>
        
    </div>
        );
    }
}

export default User_add_request;