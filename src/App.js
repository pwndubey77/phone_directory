import React, { Component } from 'react';
// import logo from './logo.svg';
//import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    // let x1  = 6;
    // let y1 = 7;
    // let firstname = "Pawan";
    // let lastName = " Dubey!";
    return (

      <div>
        <Header/>
      <button>Add</button>
      <div>
         <span> Name</span><br/>
         <span> Phone</span>
      </div>
      </div>
      
      // <div>
      //   {
      //     /* <div className="header">
      //   Phone Directory
      // </div>
      
         
      // {/* <label htmlFor="name" >Name: </label>
      // <input id="name" type="text" placeholder="Type Here" defaultValue={x1+y1}/>
      // <p>Hello {firstname + lastName} </p> */}
      // </div>

        // <div>
        //   <p>ReactJs</p>
        // </div>
      
        // React.createElement("div",{id: "module"},
        //   React.createElement("p",null,"ReactJs") )
    
    );
  }
}

export default App;
