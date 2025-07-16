import React,{useState} from 'react'
import Child from './child'

const Parent = () => {
 const [input,setInput]=useState("")
  return (
    <div style={{display:"flex",flexDirection:'column',backgroundColor:"green",height:"500px",width:"800px",padding:"30px"}}>
        <h1>Parent Component</h1>
        <div style={{height:"50px",display:"flex",alignItems:"flex-end"}}>{input}</div>
        <Child change={setInput} innput={input}/>
    </div>
  )
}

export default Parent