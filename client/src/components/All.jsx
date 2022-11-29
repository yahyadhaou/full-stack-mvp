import axios from "axios";
import React ,{useState} from "react";
var All = (props) => {
const [note,setNote]=useState("")
  var deleted=(id)=>{
  axios.delete(`http://localhost:4000/delete/${id}`)
  .then((res)=>{
    console.log("tfaskhet")
  })
  .catch(err=>{console.log(err)
})
window.location.reload(false)
}
var update=(id)=>{
  axios.put(`http://localhost:4000/update/${id}`,{note})
  .then((res)=>{
    console.log("hello")
  })
  .catch(err=>{console.log(err)
})
window.location.reload(false)

}

console.log(note);
return(
<div>
  {props.data.map((element)=>{
    console.log(element.note)
    return (
<div className="resto" key={element._id}>
  <ul>
    <div>
      <li>
        <h0>
        <h1>{element.name}</h1>
      <span><img src={element.imageUrl} /></span>
      <span><h2>{element.description}</h2></span>
       <h3>{element.note}</h3>
       </h0>
       <h4><h5>if you visited give your note please </h5>
  <input type="text" className="add" onChange={(e)=>setNote(e.target.value)}/> <button className="button" onClick={()=> update(element._id)}>update</button></h4>
      <button className="button" onClick={()=>deleted(element._id)}>delete</button>
      
      </li>
 </div>
  </ul>
  </div>
    )
  })
}
</div>
)
}
export default All