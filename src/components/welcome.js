import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import Navbar from './navbar';
import Garbage from '../assets/img/hero-bg.jpg'


class welcome extends Component {
    render() {
        return (
            <div>
               <Navbar/> 
               <img src={Garbage}  alt="..." style={{width:'64.3%'}}></img>
            </div>
        );
    }
}

export default welcome;