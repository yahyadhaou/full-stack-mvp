import React, { Component,useEffect,useState } from 'react';
import axios from "axios"
import All from "./components/All.jsx"
import Add from "./components/add.jsx"
let App=()=>{
  const [data,setData]=useState([])
  const [text,setText]=useState("")
  useEffect(()=>{axios.get('http://localhost:4000/food').then((res)=>{
    console.log(data)
    setData(res.data)}
    )
  },[])
  
  return (
    <div>
      <div className='header'>FOOD RECOMMANDATION</div>
   <Add />
    <All data={data} />
  </div>
  );
}

export default App; 
