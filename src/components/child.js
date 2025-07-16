import React from 'react'

const Child = ({innput,change}) => {
    function handler(e){
        let x=e.target.value
        change(x)
    }
  return (
    <div style={{display:"flex",flexDirection:'column',gap:"50px",backgroundColor:"red",height:"50%",width:"80%",}}>
       <h2>Child Component</h2>
        <input class="child" type="text" onChange={handler} style={{width:"30%",height:"50px"}} value={innput}/>
    </div>
  )
}

export default Child