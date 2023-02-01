import React, { useEffect, useState } from 'react'
import "./Contact.css"


export default function Contact({change,submit,editdata,deleteicon,upda}) {
  console.log(editdata)
  const[Update,setUpdate]=useState({})
  const [updatestatus,setUpdatestatus]=useState(false)

  useEffect(()=>{
    if(editdata[0]?.name !==undefined){
      console.log("hai")
      setUpdate(editdata[0])
      console.log("editdata===>",Update)
    }
  },[editdata])

  const updatecontacts=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUpdate({...Update,[name]:value})
    console.log(Update)
  }

  const updatesubmit=(e)=>{
    e.preventDefault();
    deleteicon(editdata[0]?.name)
    setUpdatestatus(true)
  }
  useEffect(() => {
    if(updatestatus==true){
      upda(Update)
      window.location.reload()
    }
    
  }, [updatestatus])
  
 
  return (
    <>
    {editdata[0]?.name==null ?
<div className='Maincontainer'>

<h1>Contact form</h1>
 <form onSubmit={submit}> <br></br> 
 <input type="text" placeholder='Name' name='name'  onChange={change}></input>
 <br></br><br></br>
 <input type="text" placeholder='Email'  name='email'onChange={change}></input>
 <br></br><br></br>
 <button >Submit</button>
 </form>
</div>:
<div className='Maincontainer'>

   <h1>Edit form</h1>
    <form onSubmit={updatesubmit}> <br></br> 
    <input type="text" placeholder='Name'name='name' value={Update?.name}  onChange={updatecontacts}></input>
    <br></br><br></br>
    <input type="text" placeholder='Email'  name='email'  value={Update?.email} onChange={updatecontacts}></input>
    <br></br><br></br>
    <button >update</button>
    </form>
 </div>
    }
 
 
 </>
  )
}
