import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Userdashboard from './components/userDashboard';
import user_payment from './components/user_payment';
import testfile from './components/testfile';
import Welcome from './components/welcome';
import User_add_request from './components/User_add_request';
import user_bin_status from './components/user_bin_status';
import volunteer_accept_request from './components/volunteer_accept_request';
import volunteer_bin_status from './components/volunteer_bin_status';
import recycler_dashboard from './components/recycler_dashboard';
import admin_dashboard from './components/admin_dashboard';
import admin_waste_monitoring from './components/admin_waste_monitoring';
import admin_manage_volunteer from './components/admin_manage_volunteer';
import admin_manage_user from './components/admin_manage_user';
import admin_payment_summary from './components/admin_payment_summary';
import admin_add_bin from './components/admin_add_bin';
import user_payment_summary from './components/user_payment_summary';
import recycler_bin_status from './components/recycler_bin_status';
import admin_recycling_management from './components/admin_recycling_management';
import admin_bin_status from './components/admin_bin_status';
import axios from 'axios';

 const BinStatusFromDevice=()=>{
    const url="https://api.thingspeak.com/channels/1565688/fields/1.json?api_key=5B18A32D5FY2QQXM&results=1";

    axios.get(url)
    .then((response)=> {
    console.log("REQUEST======",response);


     this.setState({
       field:response.data.feeds[0].field1
     })

     console.log("FIELD===",this.state.field)

     if(this.state.field=="1,10")
     {
       alert("Bin is 90% Filled")
     }
    })
  }

const App = () => (
  
  <Router>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/register" component={Register} />
      <Route path="/user_dashboard" component={Userdashboard} />
      <Route path="/user_payment" component={user_payment} />
      <Route path="/user_add_request" component={User_add_request} />
      <Route path="/user_bin_status" component={user_bin_status} />
      {/* <Route path="/volunteer_accept_request" component={()=><volunteer_accept_request status={BinStatusFromDevice}/>}/> */}
      <Route path="/volunteer_accept_request" component={volunteer_accept_request }/>
      <Route path="/volunteer_bin_status" component={volunteer_bin_status} />
      <Route path="/recycler_dashboard" component={recycler_dashboard}/>
      <Route path="/admin_dashboard" component={admin_dashboard}/>
      <Route path="/admin_waste_monitoring" component={admin_waste_monitoring} />
      <Route path="/admin_manage_volunteer" component={admin_manage_volunteer} />
      <Route path="/admin_manage_user" component={admin_manage_user} />
      <Route path="/admin_payment_summary" component={admin_payment_summary} />
      <Route path="/admin_add_bin" component={admin_add_bin} />
      <Route path="/user_payment_summary" component={user_payment_summary} />
      <Route path="/recycler_bin_status" component={recycler_bin_status} />
      <Route path="/admin_recycling_management" component={admin_recycling_management} />
      <Route path="/admin_bin_status" component={admin_bin_status} />
      <Route path="/testfile" component={testfile} />
      
      
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));