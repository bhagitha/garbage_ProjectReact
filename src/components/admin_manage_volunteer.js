import React, { Component } from 'react';
import Admin_nav from './admin_nav';
import axios from 'axios';

const sampleJSON = {
    "arrOfData":[
        {"name":"qw","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
        {"name":"aa","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"},
        {"name":"qqq","location":"Calicut","waste_type":"Bio waste","age":"qw","date":"Calicut","salary":"Bio waste"}
    ]
  }

  


class admin_manage_volunteer extends Component {
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

      componentDidMount(){
          console.log("qwerty");

          this.GetVolunteer()
      }

      GetVolunteer=()=>{
          
          const url="http://localhost:3000/volunteers/view-volunteers"

          axios.get(url)
          .then((response)=> {
          console.log("VOLUNTEER======",response);

          if(response.data.success==true)
          {
            
              this.setState({
                  arrOfData:response.data.details
              })
                  
              console.log("VOL_DATA",this.state.arrOfData)
               

            }
        })
        .catch((error) => {
          console.log(error);
         
        });
      }

      DeleteVolunteer=(id)=>{
         console.log("volunteeridd",id)

         const url="http://localhost:3000/volunteers/delete/"+id
         console.log("url",url)
    
         axios.get(url)
         .then((response)=> {
         console.log("DELETE VOLUNTEER======",response);

         if(response.data.success==true)
         {
             this.setState({
                 message:response.data.message
             })

             alert(this.state.message)
             this.GetVolunteer()
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
                   <h3 style={{textAlign:'center',color:'black'}}>Manage Volunteer</h3>
               </div>
               {this.state.arrOfData.map((item,i)=> { 
                   console.log(item,"======ddd")
              
                   return(<div style={{width:"102%",paddingLeft:60,padding:45,}}>
                   <div className="card text-dark bg-light mb-3" style={{borderWidth:2,borderRadius:12}}>
         {/* <div class="card-header">
         Featured
         </div> */}
        
         <div class="card-body">
         <h3 class="card-title" key={i}>Name : {item?.registerdetails[0]?.name}</h3>
         <h5 class="card-title" key={i}>Contact : {item?.registerdetails[0]?.phone}</h5>
         <h5 class="card-text" key={i}>Address : {item?.registerdetails[0]?.address}</h5>
         {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
         <a onClick={()=>this.DeleteVolunteer(item._id)} class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Delete</a> 
         {/* <a href="#" class="btn" style={{backgroundColor:'#129b05',color:'white'}}>Delete</a> */}
                  
         </div>
        
         </div>
               </div>)
                   })}
            
            </div>
               
        );
    }
}

export default admin_manage_volunteer;