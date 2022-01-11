// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class testfile extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: -1.2884,
//             lng: 36.8233
//           }
//         }
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE'
// })(testfile);


// import React, { Component } from 'react';

// class testfile extends Component {
//     render() {
//         return (
//             <div style={{width:"102%",paddingLeft:60,padding:45,}}>
//                 <div class="card">
//   {/* <div class="card-header">
//     Featured
//   </div> */}
//   <div class="card-body">
//     <h4 class="card-title">Special title treatment</h4>
//     <h5 class="card-title">Special title treatment</h5>
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <a href="#" class="btn btn-primary">Check Status</a>
//   </div>
// </div>
//             </div>
//         );
//     }
// }

// export default testfile;




// import React, { Component } from 'react';

// const sampleJSON = {
//     "arrOfNumbers": [1, 2, 3, 4],
//     "arrOfStrings": ["a", "b", "c", "d"],
//     "arrOfObjects": [{ "a": 1, "b": 1 }, { "a": 2, "b": 2 }, { "a": 3, "b": 3 }]
//   }
  

// class testfile extends Component {
//     render() {
//         return (
//             <div>
                
//                 <h2>Array of Numbers:</h2>
//       <ul>
//         {sampleJSON.arrOfNumbers.map((item, i) => {
//           return <li key={i}>{item}</li>
//         })}
//       </ul>
        
//       <h2>Array of Strings:</h2>
//       <ul>
//         {sampleJSON.arrOfStrings.map((item, i) => {
//           return <li key={i}>{item}</li>
//         })}
//       </ul>

//       <h2>Array of Objects:</h2>
//       <ul>
//         {sampleJSON.arrOfObjects.map((item, i) => {
//           return <li key={i}>{item.a} - {item.b}</li>
//         })}
//       </ul>

//             </div>
//         );
//     }
// }

// export default testfile;


// import React, { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

//   const notify = () => toast("Wow so easy!");

// class testfile extends Component {
//   render() {
//     return (
//       <div>
//          <button onClick={notify}>Notify!</button>
//         <ToastContainer style={{backgroundColor:'red'}} />
//       </div>
//     );
//   }
// }

// export default testfile;


// import React, { Component } from 'react';
// import { Button,Alert } from 'react-bootstrap';


// class testfile extends Component {

//   constructor (props) {
//     super(props);
//     this.state = {
     
//         calert:false
        
//     }
//   }

//   Click=()=>{
    
//     this.setState({calert:true},()=>
//     {window.setTimeout(()=>{this.setState({calert:false})
//   },2000)
//   });
//   }

  
//   render() {
//     return (
//       <div style={{backgroundColor:'white',marginTop:30,marginLeft:50}}>
//         <>
//   <Button variant="primary" onClick={()=>this.Click()}>Primary</Button>{' '}
//   <Button variant="secondary">Secondary</Button>{' '}
//   <Button variant="success">Success</Button>{' '}
//   <Button variant="warning">Warning</Button>{' '}
//   <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
//   <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
//   <Button variant="link">Link</Button>
// </>

//       <Alert 
//        show={this.state.calert}
//        transition={false}
//        dismissible={true}
//        onClose={()=>this.setState({calert:false})}
//       variant="success" style={{ width: "50rem",marginTop:30,height:"4rem" }}>
//         {/* <Alert.Heading> */}
//           This is a success alert which has green background
//         {/* </Alert.Heading> */}
//       </Alert>
//       </div>
//     );
//   }
// }

// export default testfile;



// import React, { Component } from 'react';
// import Navbar from './navbar';
// import Alert from "react-bootstrap/Alert";

// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

// import Garbage from '../assets/smart_bin.jpg'

// import "./styles.css"
// import axios from 'axios';

// class testfile extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
         
//             userData : {
//                 username:props.username,
//                 password:props.password,
                
//             },
//             calert:false
            
//         }
//       }



//       handleUserNameChanged(event) {

//         var userData        = this.state.userData;
//         userData.username  = event.target.value;
    
//         this.setState({ userData: userData });
//       }
      

    
//       handlePasswordChanged(event) {
//         var userData      = this.state.userData;
//         userData.password = event.target.value;
    
//         this.setState({ userData: userData });
//       }
    
     
    
//       handleButtonClicked() {

//         if(this.state.userData.username==null)
//         {

//             //alert("Username is empty!")
//             toast.warning("Please enter your Username!!",{autoClose:2000,theme:'dark'})
            
//         }
        
//         else if(this.state.userData.password==null)
//         {

//             //alert("Password is empty!")
//             toast.warning("Please enter your Password!!",{autoClose:2000,theme:'dark'})

//         }
//         else
//         {
//            console.log("USERNAME=======",this.state.userData.username);
//            console.log("PASSWORD=======",this.state.userData.password);

//            const url="http://localhost:3000/api/register";

//            const databody = {
//              "username":"aj",
//              "password":"123",
//              "role":"1",
//              "name":"aj123",
//              "address":"qwerty",
//              "phone":"1234567890"
//            }

//            const header ={
//             'Content-Type': 'application/x-www-form-urlencoded',
            
//            }

//            console.log("DATABODY====",databody)

//            axios.post(url,databody,header)
//           .then((response)=> {
//             console.log("RESULT======",response);
//           })
//           .catch((error) => {
//             console.log(error);
//           });

           

//         }
//       }

//     render() {
//         return (
//             <div>
//                <Navbar/>
//             <div className="row d-flex">
//             <div className="col-lg-6">
//                 <div className="card1 pb-5">
//                     <div className="row">  </div>
//                     <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={Garbage} className="image"/> </div>
//                 </div>
//             </div>
            
            
//             <div className="col-lg-6">
//                 <div className="card2 card border-0 px-4 py-5">
//                     <div className="row mb-4 px-3">
                    
//                     </div>
//                     <div className="row px-3 mb-4">
                       
//                     </div>
//                     <div className="row px-3"> <label className="mb-1">
//                             <h6 className="mb-0 text-sm">Username</h6>
//                         </label> <br/>
//                         <input 
//                         style={{borderRadius:10}}
//                         className="mb-4" 
//                         type="text" 
//                         name="email" 
//                         placeholder="Enter a valid email address"
//                         value={this.state.userData.username}
//                         onChange={this.handleUserNameChanged.bind(this)}
//                         /> </div>
//                     <div className="row px-3"> <label className="mb-1">
//                             <h6 className="mb-0 text-sm">Password</h6>
//                         </label> <br/>
//                         <input 
//                         style={{borderRadius:10}}
//                         type="password" 
//                         name="password"  
//                         placeholder="Enter password"
//                         value={this.state.userData.password}
//                         onChange={this.handlePasswordChanged.bind(this)}
//                         /> </div>
//                     <div className="row px-3 mb-4">
                        
//                     </div>
//                     <div className="row mb-3 px-3"> <button type="submit"  className="btn btn-blue text-center" onClick={this.handleButtonClicked.bind(this)}>Login</button> </div>
//                     <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a className="text-danger" onClick={()=>this.props.history.push('/register')}>Register</a></small> </div>
//                     {/* <Alert 
//        show={this.state.calert}
//        transition={false}
//        dismissible={true}
//        onClose={()=>this.setState({calert:false})}
//       variant="success" style={{ width: "50rem",marginTop:30,height:"4rem" }}>
//           This is a success alert which has green background
//       </Alert> */}
//                     <ToastContainer/>
                   
//                 </div>
//             </div>
//         </div>
       
//     </div>

    


//         );
//     }
// }

// export default testfile;


// import React, { Component } from 'react';  
// import ReactTable from "react-table";  
// //import "react-table/react-table.css";  
  
// class testfile extends Component {  
//   render() {  
//      const data = [{  
//         name: 'Ayaan',  
//         age: 26  
//         },{  
//          name: 'Ahana',  
//          age: 22  
//          },{  
//          name: 'Peter',  
//          age: 40      
//          },{  
//          name: 'Virat',  
//          age: 30  
//          },{  
//          name: 'Rohit',  
//          age: 32  
//          },{  
//          name: 'Dhoni',  
//          age: 37  
//          }]  
//      const columns = [{  
//        Header: 'Name',  
//        accessor: 'name'  
//        },{  
//        Header: 'Age',  
//        accessor: 'age'  
//        }]  
//     return (  
//           <div>  
//               <ReactTable  
//                   data={data}  
//                   columns={columns}  
//                   defaultPageSize = {2}  
//                   pageSizeOptions = {[2,4, 6]}  
//               />  
//           </div>        
//     )  
//   }  
// }  
// export default testfile;