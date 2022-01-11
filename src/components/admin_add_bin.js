
import React, { Component } from 'react';

import Alert from "react-bootstrap/Alert";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Garbage from '../assets/admin_bin.jpg'

import axios from 'axios';

import "./styles.css"
import Admin_nav from './admin_nav';

class admin_add_bin extends Component {
    constructor (props) {
        super(props);
        this.state = {
         
            userData : {
                username:props.username,
                password:props.password,
                
            },

            latitude:"",
            longitude:""
            
            
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
            toast.warning("Please enter a Bin name!!",{autoClose:2000,theme:'dark'})
            
        }
        
        else if(this.state.userData.password==null)
        {

            //alert("Password is empty!")
            toast.warning("Please enter your place!!",{autoClose:2000,theme:'dark'})

        }
        else
        {
           console.log("USERNAME=======",this.state.userData.username);
           console.log("PASSWORD=======",this.state.userData.password);

          
           const url="http://localhost:3000/bin/add";

           const header = {
            'Content-Type': 'application/json',
           }


           const params = {
            name:this.state.userData.username,
            place:this.state.userData.password,
            lati:this.state.latitude,
            long:this.state.longitude

           
          }
          console.log("PARAMS",params)

          axios.post(url,params,header)
          .then((response)=> {
          console.log("ADD BIN RESULT======",response);

            if(response.data.success==true)
            {
                this.setState({
                    message:response.data.message
                })

                alert(this.state.message)
                this.props.history.push("/admin_dashboard")
            }
            else
            {
                alert("Adding Bin Failed!")
            }

        })
        .catch((error) => {
          console.log(error);
          alert("Adding Bin Failed!")
        });
  

         
        }
        
      } 

      
      componentDidMount=()=>{
              if (navigator.geolocation) {
          navigator.geolocation.watchPosition((position)=> {
            console.log("POSITION=====",position)
            console.log("Latitude========", position.coords.latitude);
            console.log("Longitude=======", position.coords.longitude);
            this.setState({
                latitude:position.coords.latitude,
                longitude:position.coords.longitude,
            })

          });
        }
      }

    render() {
        return (
            <div>
               <Admin_nav/>
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
                            <h6 className="mb-0 text-sm">Bin Name</h6>
                        </label> <br/>
                        <input 
                        style={{borderRadius:10}}
                        className="mb-4" 
                        type="text" 
                        name="name" 
                        placeholder="Enter a Bin name"
                        value={this.state.userData.username}
                        onChange={this.handleUserNameChanged.bind(this)}
                        /> </div>
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Place</h6>
                        </label> <br/>
                        <input 
                        style={{borderRadius:10}}
                        type="text" 
                        name="place"  
                        placeholder="Enter Place"
                        value={this.state.userData.password}
                        onChange={this.handlePasswordChanged.bind(this)}
                        /> </div>
                    <div className="row px-3 mb-4">
                        
                    </div>
                    <div className="row mb-3 px-3"> <button type="submit"  className="btn btn-blue text-center" onClick={this.handleButtonClicked.bind(this)}>Add Bin</button> </div>
                    {/* <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a className="text-danger" onClick={()=>this.props.history.push('/register')}>Register</a></small> </div> */}
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

export default admin_add_bin;