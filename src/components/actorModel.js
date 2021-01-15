import logo from './logo.svg';
import './App.css';

import React from 'react';
import Container from 'react-bootstrap/Container';



class ActorModel {
    constructor(fname, lname, birthday, imageurl, IMDBlink, age){
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.imageurl = imageurl;
        this.IMDBlink = IMDBlink;
        this.age = age;

        
    } 
    ageClac() {
        
    }
}

export default ActorModel;