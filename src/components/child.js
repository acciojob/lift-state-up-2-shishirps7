import React from 'react'

const child = ({change}) => {
    function handler(e){
        let x=e.target.value
        change(x)
    }
  return (
    <div style={{display:"flex",flexDirection:'column',gap:"50px",backgroundColor:"red",height:"70%",width:"100%"}}>
       <h2>Child Component</h2>
        <input type="text" onChange={handler} />
    </div>
  )
}

export default child