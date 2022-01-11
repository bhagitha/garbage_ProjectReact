import React, { Component } from 'react';

import axios from 'axios';
import Admin_nav from './admin_nav';

// const sampleJSON = {
//     "arrOfData":[
//         {"name":"qw","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
//         {"name":"aa","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
//         {"name":"qqq","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"}
//     ]
//   }


class admin_bin_status extends Component {

  constructor (props) {
    super(props);
    this.state = {

      "arrOfData":[
        {"name":"qw","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
        {"name":"aa","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
        {"name":"qqq","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"}
    ]

     
    }
  }

  componentDidMount=()=>{

    const documentData = JSON.parse(localStorage.getItem('logindata'));
  const session_data=  window.sessionStorage.getItem("isLoggedIn")

    console.log("DATA====",documentData);


    this.GetBin()
  }

  GetBin=()=>{
    const url="http://localhost:3000/bin/view-bin"

    axios.get(url)
    .then((response)=> {
    console.log("VIEW BIN======",response);
      
    if(response.data.success==true)
    {
      this.setState({
        arrOfData:response.data.data
      })
    }

  })
  .catch((error) => {
    console.log(error);
   
  });
  }

  BinStatusFromDevice=()=>{
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
     else if(this.state.field=="1,50")
     {
       alert("Bin is 50% Filled")
     }
     else if(this.state.field=="1,90")
     {
       alert("90% of Bin is free")
     }


  })
  .catch((error) => {
    console.log(error);
   
  });
  }


  BinStatus=(id)=>{
    console.log("idddddd",id)
  }
    render() {
        return (
            <div>

              <Admin_nav/>
               
               {/* <div style={{backgroundColor:'white',marginTop:30,height:50}}>
                   <h3 style={{textAlign:'center',color:'black'}}>Waste Bin Monitoring</h3>
               </div> */}

               {/* <div class="card-body">
               <a href="/admin_add_bin" class="btn" style={{backgroundColor:'#129b05',color:'white',marginLeft:33}}>Add Waste Bin</a>   
               </div> */}
   <div style={{backgroundColor:'white',marginTop:30,height:50}}>
                   <h3 style={{textAlign:'center',color:'black'}}>Bin status</h3>
               </div>
<div style={{width:"102%",paddingLeft:60,padding:45,}}>
                <div class="card text-dark bg-light mb-3" style={{borderWidth:2,borderRadius:12}}>
  {/* <div class="card-header">
    Featured
  </div> */}
  <div class="card-body">
    <h4 class="card-title" >Bin 1</h4>
    <h5 class="card-title" >Calicut</h5>
    {/* <h5 class="card-title" key={i}>{item.latitude}</h5>
    <p class="card-text" key={i}>{item.waste_type}</p>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
    <a onClick={()=>this.BinStatusFromDevice()} class="btn" style={{backgroundColor:'#129b05',color:'white'}}>VIEW STATUS</a> 
    {/* <a href="#" class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Delete</a> */}
  </div>
</div>
            </div>
              
               {this.state.arrOfData.map((item,i)=> { 
               return <div style={{width:"102%",paddingLeft:60,padding:45,}}>
                <div class="card text-dark bg-light mb-3" style={{borderWidth:2,borderRadius:12}}>
  {/* <div class="card-header">
    Featured
  </div> */}
  <div class="card-body">
    <h4 class="card-title" key={i}>{item.bin_name}</h4>
    <h5 class="card-title" key={i}>{item.place}</h5>
    {/* <h5 class="card-title" key={i}>{item.latitude}</h5>
    <p class="card-text" key={i}>{item.waste_type}</p>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
    <a onClick={()=>this.BinStatus(item._id)} class="btn" style={{backgroundColor:'#129b05',color:'white'}}>VIEW STATUS</a> 
    {/* <a href="#" class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Delete</a> */}
  </div>
</div>
            </div>})}
            </div>
        );
    }
}

export default admin_bin_status;