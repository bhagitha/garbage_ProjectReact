import React, { Component } from 'react';
import Navbar from './navbar';

import Garbage from '../assets/smart_bin.jpg'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import axios from 'axios';

class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
         
            userDataReg : {
                name:props.name,
                address:props.address,
                phone:props.phone,
                username:props.usernam,
                password:props.password,
                role:props.role
            }
        }
      }

      handleRoleChanged(event) {
        var userDataReg        = this.state.userDataReg;
        userDataReg.role  = event.target.value;

       
        this.setState({ userDataReg: userDataReg });
      }

      handlePasswordChanged(event) {
          var userDataReg = this.state.userDataReg;
          userDataReg.password=event.target.value;
          this.setState({ userDataReg: userDataReg });
      }

      handlePhoneChanged(event) {
          var userDataReg = this.state.userDataReg;
          userDataReg.phone=event.target.value;
          this.setState({ userDataReg: userDataReg });
      }

      handleNameChanged(event) {
          var userDataReg = this.state.userDataReg;
          userDataReg.name=event.target.value;

            this.setState({ userDataReg: userDataReg });
              
      }

      handleAddressChanged(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.address=event.target.value;

          this.setState({ userDataReg: userDataReg });
            
    }

    handleUsernameChanged(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.username=event.target.value;

          this.setState({ userDataReg: userDataReg });
            
    }


      handleButtonClicked() {

        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


        if(this.state.userDataReg.name==null)
        {
            
            toast.warning("Please fill your name!!",{autoClose:3000,theme:'dark'})
        }
        else if(this.state.userDataReg.address==null)
        {
            toast.warning("Please fill your address!!",{autoClose:3000,theme:'dark'})
        }
        else if(this.state.userDataReg.phone==null)
        {
           
            toast.warning("Please fill your phone number!!",{autoClose:3000,theme:'dark'})
        }

        else if(!phoneno.test(this.state.userDataReg.phone))
        {
            toast.warning("Please enter a valid  phone number!!",{autoClose:3000,theme:'dark'})
        }
       
        else if(this.state.userDataReg.username==null)
        {
            toast.warning("please fill the username!!",{autoClose:3000,theme:'dark'})
        }
        else if(this.state.userDataReg.password==null)
        {
            //alert("Password is empty!")
            toast.warning("Please fill your password!!",{autoClose:3000,theme:'dark'})
        }
        else if(this.state.userDataReg.role==null)
        {
            //alert("Role not selected")
            toast.warning("Please choose your role!!",{autoClose:3000,theme:'dark'})
        }
        else{

        console.log("NAME=======",this.state.userDataReg.name);
        console.log("ADRESS===",this.state.userDataReg.address);
        console.log("PHONE=======",this.state.userDataReg.phone);
        console.log("USERNAME===",this.state.userDataReg.username)
        console.log("PASSWORD=======",this.state.userDataReg.password);
        console.log("ROLE=======",this.state.userDataReg.role);

        
        const url="http://localhost:3000/api/register";

        const params = {
          username:this.state.userDataReg.username,
          password:this.state.userDataReg.password,
          role:this.state.userDataReg.role,
          name:this.state.userDataReg.name,
          address:this.state.userDataReg.address,
          phone:this.state.userDataReg.phone
        }

        const header ={
         'Content-Type': 'application/json',
         
        }

        console.log("PARAMS====",params)

        axios.post(url,params,header)
       .then((response)=> {
         console.log("REGISTER RESULT======",response);


         if(response.data.success==true)
         {
             this.setState({
                 result_message:response.data.message});

             alert(this.state.result_message);

             this.props.history.push("/");

         }

         else
         {
             alert("Registration Failed!")

         }


         
       })
       .catch((error) => {
         console.log(error);
       });



        
        // localStorage.setItem("data",JSON.stringify(this.state.userDataReg));
        // this.props.history.push("/");
        
        }
      }  


      componentDidMount() {
        // if (navigator.geolocation) {
        //   navigator.geolocation.watchPosition(function(position) {
        //     console.log("Latitude========", position.coords.latitude);
        //     console.log("Longitude=======", position.coords.longitude);
        //   });
        // }
        //alert("hi")
      }

    render() {
        return (
            <div>
                 <Navbar/>
                 
            <div className="row d-flex">
            <div className="col-lg-6">
                <div className="card1 pb-5">
                    <div className="row">  </div>
                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={Garbage} className="image"/> </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5" >
                   
                    <div className="row px-3"> <label className="mb-1">
                        <h6 className="mb-0 text-sm">Name</h6>
                        </label> <br/>
                        <input 
                        style={{borderRadius:10}}
                        className="mb-4" 
                        type="text" 
                        name="name" 
                        placeholder="Enter  Name"
                        value={this.state.userDataReg.name}
                        onChange={this.handleNameChanged.bind(this)}
                        /> 
                        </div>

                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Address</h6>
                        </label> <br/>
                        <input 
                        style={{borderRadius:10}}
                        className="mb-4" 
                        type="text" 
                        name="address" 
                        placeholder="Enter Address"
                        value={this.state.userDataReg.address}
                        onChange={this.handleAddressChanged.bind(this)}
                        /> 
                        </div>

                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Phone Number</h6>
                        </label> <br/>
                        <input 
                        style={{borderRadius:10}}
                        className="mb-4" 
                        type="text" 
                        name="phone" 
                        placeholder="Enter  Phone Number"
                        value={this.state.userDataReg.phone}
                        onChange={this.handlePhoneChanged.bind(this)}
                        /> 
                        </div>

                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">UserName</h6>
                        </label> <br/>
                        <input 
                        style={{borderRadius:10}}
                        className="mb-4" 
                        type="text" 
                        name="username" 
                        placeholder="Enter  Username"
                        value={this.state.userDataReg.username}
                        onChange={this.handleUsernameChanged.bind(this)}
                        /> 
                        </div>


                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Password</h6>
                        </label> <br/>
                        <input 
                        style={{borderRadius:10}}
                        type="password" 
                        name="password" 
                        placeholder="Enter Password"
                        value={this.state.userDataReg.password}
                        onChange={this.handlePasswordChanged.bind(this)}
                        /> 
                        </div>
                    <div className="row px-3 mb-4">


                    <div className=" row px-3 mb-4" style={{marginTop:30,}}>
                    <select 
                    name="role"
                    style={{borderRadius:10}}
                    className="form-select" 
                    aria-label="Default select example"
                    value={this.state.userDataReg.role}
                        onChange={this.handleRoleChanged.bind(this)}
                    >
                         <option selected>Choose Your Role</option>
                        <option value="2">User</option>
                        <option value="1">Volunteer</option>
                        <option value="3">Recycler</option>
                    </select>
                    </div>



                        {/* <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a> */}
                    </div>
                    <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center" onClick={this.handleButtonClicked.bind(this)}>Register</button> </div>
                    <div className="row mb-4 px-3"> <small className="font-weight-bold">Already Registered? <a className="text-danger" onClick={()=>this.props.history.push('/')}>Login</a></small> </div>
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

export default Register;