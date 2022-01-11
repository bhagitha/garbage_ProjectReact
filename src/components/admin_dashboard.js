import React, { Component } from 'react';
import Admin_nav from './admin_nav';
import axios from 'axios';

// const sampleJSON = {
//     "arrOfData":[
//         {"name":"qw","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
//         {"name":"aa","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
//         {"name":"qqq","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"}
//     ]
//   }


class admin_dashboard extends Component {

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


  DeleteBin=(id)=>{
     console.log("bin_id",id)

     const url="http://localhost:3000/bin/delete/"+id
     console.log("url",url)

     axios.get(url)
     .then((response)=> {
     console.log("DELETE BIN======",response);
       
     if(response.data.success==true)
     {
       this.setState({
         message:response.data.message
       })
       alert(this.state.message)
       this.GetBin()
     }
 
   })
   .catch((error) => {
     console.log(error);
    
   });
  }
    render() {
        return (
            <div>
                <Admin_nav/>
               
               <div style={{backgroundColor:'white',marginTop:30,height:50}}>
                   <h3 style={{textAlign:'center',color:'black'}}>Waste Bin Monitoring</h3>
               </div>

               <div class="card-body">
               <a href="/admin_add_bin" class="btn" style={{backgroundColor:'#129b05',color:'white',marginLeft:33}}>Add Waste Bin</a>   
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
    <a onClick={()=>this.DeleteBin(item._id)} class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Delete</a> 
    {/* <a href="#" class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Delete</a> */}
  </div>
</div>
            </div>})}
            </div>
        );
    }
}

export default admin_dashboard;