import React, { Children, Component } from 'react';
import Volunteer_nav from './volunteer_nav';
import axios from 'axios';
import add from './volunteer_bin_status';
import volunteer_bin_status from './volunteer_bin_status';

// const sampleJSON = {
//     "arrOfData":[
//         {"name":"qw","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
//         {"name":"aa","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
//         {"name":"qqq","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"}
//     ]
//   }


class volunteer_accept_request extends Component {
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
    this.GetUsersPayment();
    this.BinStatusFromDevice();
    // this.props.status()
   
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

     if(this.state.field=="1,90")
     {
       alert("Bin1 is 90% Filled")
     }
    })
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
                <Volunteer_nav/>
               
               {/* <div style={{backgroundColor:'white',marginTop:30,height:50}}>
                   <h3 style={{textAlign:'center',color:'black'}}>Payment Summary</h3>
               </div> */}
               
               {this.state.arrOfData.map(item=>   
              <div style={{width:"102%",paddingLeft:60,padding:45,}}>
              <div class="card text-dark bg-light mb-3" style={{borderWidth:2,borderRadius:12}}>
  
  <div class="card-body">
  <h5 class="card-title" >Name : {item.username}</h5>
  {item.wasteData.map(item2=>
  <div>
    {item2.status==0?
  <div>
  <h5 class="card-title" >Waste type :{item2.type} </h5>
  <h5 class="card-title" >Quantity :{item2.quantity} </h5>
  {/* <h5>{item2.status}</h5> */}
  </div>:null}
   
   {item2.status==0?
    <a onClick={()=>this.AcceptRequest(item2._id)} class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Accept Request</a>:
    <a  class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Accepted</a>} 
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

export default volunteer_accept_request;