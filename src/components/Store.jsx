import React from 'react'
import "./Store.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Store({value,deleteicon,editicon}) {
   console.log(value)
  //  console.log("name====>",value.name)
  //  console.log("email====>",value.email)
        
  return (
  
    <div className='storecontainer'>
         {value.map((d,key)=>
      <div className='main'>
<div className='nametext'>
        <p className='nametext'>{d.name}</p>
        </div>
        <div className='emailtext'>
        <p className='emailtext'>{d.email}</p>
        </div>
<div className='editicon' onClick={()=>{editicon(d.name)}}>
<EditIcon />



</div>
<div className='deleteicon' onClick={()=>{deleteicon(d.name)}}>

<DeleteIcon />

  
  
</div>


        </div>)}
    
     
     
     
    </div> 
  )
}
