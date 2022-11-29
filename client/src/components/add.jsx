import React, { useState } from "react";
import axios from "axios"
let Add = (props) => {
  const [number,setNumber]=useState(0)
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [imageUrl,setImageurl]=useState("")
    const [note,setNote]=useState(0)
  var apps=()=>{
    
    axios.post(`http://localhost:4000/food`,{number:number,name:name,description:description,imageUrl:imageUrl,note:note})
    .then((res)=>{
      console.log("doen")
    })
    .catch(err=>{console.log(err)
  })
  window.location.reload(false)
  }
  return (
    <div className="add" id="words">Add your recomandation <br></br>
<input type="text" className="add"  placeholder="number" onChange={(e)=>setNumber(e.target.value)}/><br></br>
<input type="text" className="add" placeholder="name" onChange={(e)=>setName(e.target.value)}/><br></br>
<input type="text" className="add" placeholder="description" onChange={(e)=>setDescription(e.target.value)}/><br></br>
<input type="text" className="add" placeholder="imageurl" onChange={(e)=>setImageurl(e.target.value)}/><br></br>
<input type="text" className="add" placeholder="note" onChange={(e)=>setNote(e.target.value)}/><br></br>
<button className="button" onClick={()=>{return apps()}}>submit</button><br></br>

    </div>
  );
};


export default Add;