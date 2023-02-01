import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Store from './components/Store';
import React, { useEffect } from 'react';
import {useState} from 'react';
// import { Alert } from '@mui/material';

function App() {
  const [ContactList,setContactList]=useState(JSON.parse(localStorage.getItem("contact")) || [])
  const[Edit,setEdit]=useState([])

  const[State,setState]=useState({
   name:'',
   email:''

  })

  
// fetch("lo",{
//   body:JSON.stringify(State),
//   method:"POST",
//   headers:{}
// })

const buttonsubmit=(e)=>{
  
  e.preventDefault();
  console.log("ContactListbeforeee====>",ContactList);
  setContactList([...ContactList,{...State}])
  console.log("ContactListafter====>",ContactList)

var mailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!mailformat(State)){
  alert("invalid email")


}else{
  alert("registration successful")
}
}



const inputchange=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setState({...State,
    [name]:value})
  console.log(State)


}



 console.log(State)

 const deleteitem=(itemname)=>{
  console.log("Delete data====>",itemname);
  const filterdata=ContactList.filter(item=>{
   return item.name!==itemname
   
  })
  setContactList(filterdata)

  console.log("filterdata====>",filterdata);
  // setContactList(filterdata)
  
 }
const edititem=(e)=>{
  const editdata=ContactList.filter(contact=>{
  return contact.name === e;
})
setEdit(editdata)
console.log("edit====>",editdata)
}

const updatedata=(update)=>{
  console.log("Updatestate",update);
  setContactList([...ContactList,{...update}])
  console.log("ContactListafter====>",ContactList)
  
    
}

useEffect(() => {
  localStorage.setItem("contact",JSON.stringify(ContactList))
}, [ContactList])


  return (
    <React.Fragment>
    <div className='contact'>
  <Contact change={inputchange}  submit={buttonsubmit} editdata={Edit} deleteicon={deleteitem}  upda={updatedata}/>
  </div>
 <div className='store'>
  <Store value={ContactList}  deleteicon={deleteitem} editicon={edititem} />
  </div>
  </React.Fragment>
  );
}

export default App;
