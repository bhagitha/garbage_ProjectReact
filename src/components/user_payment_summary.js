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




class user_payment_summary extends Component {
    constructor (props) {
        super(props);
        this.state = {
              
          documentName:"",
          token:"",

          "arrOfData":[
            {"name":"asdf",
            "location":"Calicut",
            "waste_type":"Bio waste",
            },
            
            {"name":"zxc",
            "location":"Kannur",
            "waste_type":"Bio waste"},
      
            {"name":"iop",
            "location":"Calicut",
            "waste_type":"Bio waste"},
      
            {"name":"iop",
            "location":"Calicut",
            "waste_type":"Bio waste"}
        ]
         
        }
      }


      componentDidMount=()=>{

        const documentData = JSON.parse(localStorage.getItem('logindata'));
        const session_data=  window.sessionStorage.getItem("isLoggedIn")

        console.log("LOGIN_DATA====",documentData)
        console.log("SESSION_DATA====",session_data)

        // this.setState({
        //   documentName:documentData.cname,
        //   token:documentData.token
        // })

          console.log("====TOKENNNN====",documentData?.token,"=====NAME=====",documentData?.cname)
       
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
           arrOfData:data.Userdetails[0].paymentData
         })

       }



});

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
    <h5 class="card-title" key={i}>Amount : <i className="fa fa-inr"></i> {item.amount}</h5>
    {/* <h5 class="card-title" key={i}>{item.quantity}</h5>
    <p class="card-text" key={i}>{item.waste_type}</p> */}
    <p class="card-text">{item.gender}</p>
    {/* \<a onClick={()=>console.log(item.status)} class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Bin Status</a> */}
  </div>
</div>
            </div>})}
            </div>
        );
    }
}

export default user_payment_summary;