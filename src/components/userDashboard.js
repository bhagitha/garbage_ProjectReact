import React, { Component } from 'react';
import User_Nav from './user_nav'


// const sampleJSON = {
//   "arrOfData":[
//       {"name":"asdf",
//       "location":"Calicut",
//       "waste_type":"Bio waste",
//       "gender":"Female"},
      
//       {"name":"zxc",
//       "location":"Kannur",
//       "waste_type":"Bio waste"},

//       {"name":"iop",
//       "location":"Calicut",
//       "waste_type":"Bio waste"},

//       {"name":"iop",
//       "location":"Calicut",
//       "waste_type":"Bio waste"}
//   ]
// }




class userDashboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
              
          documentName:"",
          token:"",

          "arrOfData":[{}
            // {"name":"asdf",
            // "location":"Calicut",
            // "waste_type":"Bio waste",
            // },
            
            // {"name":"zxc",
            // "location":"Kannur",
            // "waste_type":"Bio waste"},
      
            // {"name":"iop",
            // "location":"Calicut",
            // "waste_type":"Bio waste"},
      
            // {"name":"iop",
            // "location":"Calicut",
            // "waste_type":"Bio waste"}
        ]
         
        }
      }


      componentDidMount=()=>{

        const documentData = JSON.parse(localStorage.getItem('logindata'));
        const session_data=  window.sessionStorage.getItem("isLoggedIn")

        console.log("LOGIN_DATA====",documentData)
        console.log("SESSION_DATA====",session_data)

       
          this.GetUserSinglePayment(documentData?.token)

      }

 GetUserSinglePayment=(id)=>{

  console.log("IDD===",id)

  fetch('http://localhost:3000/waste/single-user-payment', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+id,
    },
})
.then(res => res.json())
.then((data) => {console.log("RESULT========",data)
   
        if(data.success==true)
       {
         this.setState({
           arrOfData:data.Userdetails[0].wasteData
         })

       }



});

 }

 CheckStatus=(status)=>{
   if(status==0)
   {
     alert("Request Sended..")
   }
   else if(status==1)
   {
     alert("Request Processing..")
   }
   else if(status==2)
   {
     alert("Recycling Completing..")
   }
 }

      

    render() {
        return (
            <div style={{height:500,}}>
                <User_Nav/>
                
                {this.state.arrOfData.map((item,i)=> { 
               return <div style={{width:"102%",paddingLeft:60,padding:45,}}>
                <div class="card" style={{borderWidth:2,borderRadius:12}}>
  {/* <div class="card-header">
    Featured
  </div> */}
  <div class="card-body">
    <h4 class="card-title" key={i}>{item.type}</h4>
    <h5 class="card-title" key={i}>{item.quantity}</h5>
    <p class="card-text" key={i}>{item.waste_type}</p>
    <p class="card-text">{item.gender}</p>
    <a onClick={()=>this.CheckStatus(item.status)} class="btn" style={{backgroundColor:'#129b05',color:'white'}}>
      Bin Status</a>
  </div>
</div>
            </div> }
            
            )}
            </div>
        );
    }
}

export default userDashboard;