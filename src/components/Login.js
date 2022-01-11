
import React, { Component } from 'react';
import Navbar from './navbar';
import Alert from "react-bootstrap/Alert";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Garbage from '../assets/smart_bin.jpg'

import axios from 'axios';

import "./styles.css"

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
         
            userData : {
                username:props.username,
                password:props.password,
                
            },
            
            
        }
      }



      handleUserNameChanged(event) {

        var userData        = this.state.userData;
        userData.username  = event.target.value;
    
        this.setState({ userData: userData });
      }
      

    
      handlePasswordChanged(event) {
        var userData      = this.state.userData;
        userData.password = event.target.value;
    
        this.setState({ userData: userData });
      }
    
     
    
      handleButtonClicked() {

        if(this.state.userData.username==null)
        {

            //alert("Username is empty!")
            toast.warning("Please enter your Username!!",{autoClose:2000,theme:'dark'})
            
        }
        
        else if(this.state.userData.password==null)
        {

            //alert("Password is empty!")
            toast.warning("Please enter your Password!!",{autoClose:2000,theme:'dark'})

        }
        else
        {
           console.log("USERNAME=======",this.state.userData.username);
           console.log("PASSWORD=======",this.state.userData.password);

          
           const url="http://localhost:3000/login/logindata";

           const header = {
            'Content-Type': 'application/json',
           }


           const params = {
            username:this.state.userData.username,
            password:this.state.userData.password,
           
          }

          axios.post(url,params,header)
          .then((response)=> {
          console.log("LOGIN RESULT======",response);

             if(response.data.success==true)
             {
                 this.setState({
                  data:{
                        role:response.data.userRole,
                        login_id:response.data.loginId,
                        token:response.data.token,
                        cname:response.data.name
                    }
                 })

                 console.log("dataaaaaaa",this.state.data)

                 if(this.state.data.role==0)
                 {
                    this.props.history.push("/admin_dashboard");
                    localStorage.setItem('logindata',JSON.stringify(this.state.data));
                    window.sessionStorage.setItem("isLoggedIn",true)
                 }
                 else if (this.state.data.role==1)
                 {
                    this.props.history.push("/volunteer_accept_request");
                    localStorage.setItem('logindata',JSON.stringify(this.state.data));
                    window.sessionStorage.setItem("isLoggedIn",true)
                 }
                 else if (this.state.data.role==2)
                 {
                    this.props.history.push("/user_dashboard");
                    localStorage.setItem('logindata',JSON.stringify(this.state.data));
                    window.sessionStorage.setItem("isLoggedIn",true)
                 }
                 else if (this.state.data.role==3)
                 {
                     this.props.history.push("/recycler_dashboard");
                     localStorage.setItem('logindata',JSON.stringify(this.state.data));
                     window.sessionStorage.setItem("isLoggedIn",true)
                 }
             }

             else{
                 alert("Bad Credentials")
             }

        })
        .catch((error) => {
          console.log(error);
          alert("Bad Credentials");
        });
  

         
        }
        
      } 

      
      componentDidMount=()=>{
      
           var dd=JSON.parse(localStorage.getItem("logindata"));
          
            console.log("LOCALSTORAGE===",dd)

        if(localStorage.getItem("logindata"))
        {
            console.log("had a localstorage",dd.role)
            if(dd.role==2)
            {
                window.location.href = "/user_dashboard"
            }
            else if(dd.role==1)
            {
                window.location.href = "/volunteer_accept_request"
            }
            else if(dd.role==3)
            {
                window.location.href = "/recycler_dashboard"
            }
            else if(dd.role==0)
            {
                window.location.href = "/admin_dashboard"
            }
        }
        else{
            console.log("no localstorage")
        }
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
                <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                    
                    </div>
                    <div className="row px-3 mb-4">
                       
                    </div>
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Username</h6>
                        </label> <br/>
                        <input 
                        style={{borderRadius:10}}
                        className="mb-4" 
                        type="text" 
                        name="username" 
                        placeholder="Enter a valid email address"
                        value={this.state.userData.username}
                        onChange={this.handleUserNameChanged.bind(this)}
                        /> </div>
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Password</h6>
                        </label> <br/>
                        <input 
                        style={{borderRadius:10}}
                        type="password" 
                        name="password"  
                        placeholder="Enter password"
                        value={this.state.userData.password}
                        onChange={this.handlePasswordChanged.bind(this)}
                        /> </div>
                    <div className="row px-3 mb-4">
                        
                    </div>
                    <div className="row mb-3 px-3"> <button type="submit"  className="btn btn-blue text-center" onClick={this.handleButtonClicked.bind(this)}>Login</button> </div>
                    <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a className="text-danger" onClick={()=>this.props.history.push('/register')}>Register</a></small> </div>
                    {/* <Alert 
       show={this.state.calert}
       transition={false}
       dismissible={true}
       onClose={()=>this.setState({calert:false})}
      variant="success" style={{ width: "50rem",marginTop:30,height:"4rem" }}>
          This is a success alert which has green background
      </Alert> */}
                    <ToastContainer/>
                   
                </div>
            </div>
        </div>
       
    </div>

    


        );
    }
}

export default Login;