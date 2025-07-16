import React,{useState} from 'react'
import child from './child'

const parent = () => {
 const [input,setInput]=useState(0)
  return (
    <div style={{display:"flex",flexDirection:'column',gap:"50px",backgroundColor:"red",height:"500px",width:"800px"}}>
        <h1>Parent Component</h1>
        {input}
        <child change={setInput}/>
    </div>
  )
}

export default parent