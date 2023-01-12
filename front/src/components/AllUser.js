import {getUsers} from '../services/api';
import { useState } from 'react';
import React from 'react';
const AllUser=()=> {
  const [user,setUser]=useState(getUsers);
  
    return (
      <div style={{margin:'40px'}} >
     <h1 style={{color:'green'}}> Geeks For Geeks </h1>
<p> Mapping Data to component in React js. </p>
 
     {user.map((e)=>{
       return (
       <h3> {e.name}</h3>
     );})}
    </div>
      );
}
export default AllUser;
