import React, { Component } from 'react';
import User_Nav from './user_nav'
import payment_img from '../assets/payment.png'

class user_bin_status extends Component {
    render() {
        return (
            <div>
                <User_Nav/>
                <div className="row d-flex">
            <div className="col-lg-6">
                <div className="card1 pb-5">
                    <div className="row">  </div>
                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://www.bayonnenj.org/_Content/img/pages-covers/garbage-recycling.jpg" className="image"/> </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                        {/* <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                        <div className="facebook text-center mr-3">
                            <div className="fa fa-facebook"></div>
                        </div>
                        <div className="twitter text-center mr-3">
                            <div className="fa fa-twitter"></div>
                        </div>
                        <div className="linkedin text-center mr-3">
                            <div className="fa fa-linkedin"></div>
                        </div> */}
                    </div>
                    <div className="row px-3 mb-4">
                        <div></div>
                        {/* <div className="line"></div> <small className="or text-center">Or</small>
                        <div className="line"></div> */}
                    </div>
                    <div className="row px-3"><br/><br/> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Bin Status</h6>
                        </label> 
                        <input 
                        style={{height:120}}
                        className="mb-6" 
                        type="text" 
                        name="email" 
                        placeholder="Bin Status"
                        /> 
                        </div>
                        {/* <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Bin 2</h6>
                        </label> 
                        <input 
                        className="mb-4" 
                        type="text" 
                        name="email" 
                        placeholder="Enter Bin 2"
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
                        /> 
                        </div> */}
                    <div className="row px-3 mb-4">

                        {/* <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a> */}
                    </div>
                    {/* <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center" >Register</button> </div> */}
                    {/* <div className="row mb-4 px-3"> <small className="font-weight-bold">Already Registered? <a className="text-danger" onClick={()=>this.props.history.push('/')}>Login</a></small> </div> */}
                </div>
            </div>
        </div>
            </div>
        );
    }
}

export default user_bin_status;