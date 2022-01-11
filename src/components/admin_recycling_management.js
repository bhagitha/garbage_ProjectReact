import React, { Children, Component } from 'react';
import Admin_nav from './admin_nav';
import axios from 'axios';

// const sampleJSON = {
//     "arrOfData":[
//         {"name":"qw","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
//         {"name":"aa","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
//         {"name":"qqq","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"}
//     ]
//   }


class admin_recycling_management extends Component {
  constructor (props) {
    super(props);
    this.state = {

      "arrOfData":[
        // {"name":"qw","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
        // {"name":"aa","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
        // {"name":"qqq","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"}
    ]

     
    }
  }

  componentDidMount=()=>
  {
    this.GetUsersPayment()
  }


  GetUsersPayment=()=>
  {
    const url="http://localhost:3000/waste/user-payment"

    axios.get(url)
    .then((response)=> {
    console.log("USERS PAYMENTS======",response);


         if(response.data.success==true)
         {
           this.setState({
             arrOfData:response.data.Userdetails
           })

            //console.log("PAYMENT======",this.state.arrOfData)
         }
    

  })
  .catch((error) => {
    console.log(error);
   
  });
  }

  AcceptRequest=(id,status)=>{
    console.log("ID",id)
    console.log("STATUS",status)

    const url="http://localhost:3000/volunteers/accept-request/"+id

    console.log("url",url)

    axios.get(url)
    .then((response)=> {
    console.log("REQUEST======",response);


    if(response.data.success==true)
    {
      this.setState({
        message:response.data.message
      })

      alert(this.state.message)

      this.GetUsersPayment()
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
               
               {/* <div style={{backgroundColor:'white',marginTop:30,height:50}}>
                   <h3 style={{textAlign:'center',color:'black'}}>Payment Summary</h3>
               </div> */}
                  <div style={{backgroundColor:'white',marginTop:30,height:50}}>
                   <h3 style={{textAlign:'center',color:'black'}}>Recycling Management</h3>
               </div>
               {this.state.arrOfData.map(item=>   
              <div style={{width:"102%",paddingLeft:60,padding:45,}}>
              <div class="card text-dark bg-light mb-3" style={{borderWidth:2,borderRadius:12,}}>
  
  <div class="card-body" >
  <h5 class="card-title" >Name : {item.username}</h5>
  {item.wasteData.map(item2=>
  <div>
    {item2.status==2?
  <div>
  <h5 class="card-title" >Waste type :{item2.type} </h5>
  <h5 class="card-title" >Quantity :{item2.quantity} </h5>
  {/* <h5>{item2.status}</h5> */}
  </div>:null}
   
   {/* {item2.status==1?
    <a onClick={()=>this.AcceptRequest(item2._id)} class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Accept Request</a>:
    <a  class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Accepted</a>}  */}
    </div>
    )}
  </div>

</div>
</div>
               )}        
            </div>
       
        );
    }
}

export default admin_recycling_management;