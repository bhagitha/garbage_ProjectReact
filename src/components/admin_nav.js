import React, { Component } from 'react';

class admin_nav extends Component {

  constructor (props) {
    super(props);
    this.state = {

     
    }
  }

  logout=()=>
  {
    localStorage.clear();
    window.sessionStorage.clear();
    window.location.href = "/"
  }
  
    render() {
        return (
            <div>
                <div>
              <nav class="navbar navbar-expand-lg navbar-light"  style={{padding:15,backgroundColor:'#129b05'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/admin_dashboard" style={{paddingLeft:20,color:'white'}}>Garbage</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/admin_waste_monitoring" style={{paddingLeft:30,color:'white'}}>Waste Bin Monitoring</a>
        </li> */}

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/admin_manage_volunteer" style={{paddingLeft:30,color:'white'}}>Manage Volunteer</a>
        </li> 

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/admin_manage_user" style={{paddingLeft:30,color:'white'}}>Manage Users</a>
        </li> 

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/admin_payment_summary" style={{paddingLeft:30,color:'white'}}>Payment Summary</a>
        </li> 

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/admin_recycling_management" style={{paddingLeft:30,color:'white'}}>Recycling Management</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/admin_bin_status" style={{paddingLeft:30,color:'white'}}>Bin Status</a>
        </li> 
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/user_payment"> Payment</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={()=>this.logout()} style={{paddingLeft:30,color:'white'}}>Logout</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex">
      <a class="nav-link active" aria-current="page"  style={{paddingLeft:80,color:'white'}}>Admin  </a>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>     
            </div>
            </div>
        );
    }
}

export default admin_nav;