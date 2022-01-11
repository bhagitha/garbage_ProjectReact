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


class admin_manage_user extends Component {
    constructor (props) {
        super(props);
        this.state = {
         
             
                arrOfData:[
                    // {"name":"qw","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
                    // {"name":"aa","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
                    // {"name":"qqq","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"}
                ],

                VolData:[]
          
            
            
        }
      }

      componentDidMount()
      {
          this.GetUsers()
      }

      GetUsers=()=>
      {
        const url="http://localhost:3000/api/user-details"

        axios.get(url)
        .then((response)=> {
        console.log("USERS======",response);

        if(response.data.success==true)
        {
            this.setState({
                arrOfData:response.data.details
            })
                
            console.log("USER_DATA",this.state.arrOfData)
        }

    })
    .catch((error) => {
      console.log(error);
     
    });

      }

      DeleteUser=(id)=>{

        console.log("volunteeridd",id)

         const url="http://localhost:3000/api/delete/"+id
         console.log("url",url)
    
         axios.get(url)
         .then((response)=> {
         console.log("DELETE USER======",response);

         if(response.data.success==true)
         {
             this.setState({
                 message:response.data.message
             })

             alert(this.state.message)
             this.GetUsers()
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
                   <h3 style={{textAlign:'center',color:'black'}}>Manage User</h3>
               </div>
               {this.state.arrOfData.map((item,i)=> { 
               return <div style={{width:"102%",paddingLeft:60,padding:45,}}>
                <div class="card text-dark bg-light mb-3" style={{borderWidth:2,borderRadius:12}}>
  {/* <div class="card-header">
    Featured
  </div> */}
  <div class="card-body">
    <h4 class="card-title" key={i}>Name : {item?.registerdetails[0]?.name}</h4>
    <h5 class="card-title" key={i}>Contact : {item?.registerdetails[0]?.phone}</h5>
    <h5 class="card-text" key={i}>Address : {item?.registerdetails[0]?.address}</h5>
    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
    <a onClick={()=>this.DeleteUser(item._id)} class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Delete</a> 
    {/* <a href="#" class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Delete</a> */}
  </div>
</div>
            </div>})}
            </div>
        );
    }
}

export default admin_manage_user;