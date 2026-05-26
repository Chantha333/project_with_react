import { useState,useRef,use, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
const Accessory = () => {
 const inputRef=useRef(null);
 const [name,setName]= useState("");
 const [email,setEmail]=useState("");
 const [member,setMember]=useState([]);


  useEffect(()=>{
    inputRef.current.focus();
  },[member]);

 function removeMember(id){
    const fileterMember=member.filter((m)=>m.id !==id);
    setMember(fileterMember);
 }

 function onSubmit(e){
    e.preventDefault();
    if(!name || !email) return null;
    const id=Date.now();
    const addMember={id,name,email};
    const updateMember=[...member,addMember];
    setMember(updateMember);
    setName("");
    setEmail("");
 }

  return (
    <div className='form-container'>
    <form className='form-card' onSubmit={onSubmit}>
      <h3 className='form-text'>Submit Form</h3>
      <div className='form-input'>
        <label htmlFor="name">Full Name</label>
        <input className='input-1' ref={inputRef} value={name} id='name' onChange={(e)=> setName(e.target.value)} type="text" />
      </div>
      <div form-input>
        <label className='lb' htmlFor="email">Email</label>
        <input className='input-1 actice' value={email} id='email' onChange={e=>setEmail(e.target.value)} type="email" />
      </div>
      <button className='form-btn' type='submit' onClick={onSubmit}>Submite</button>
    </form>
      <ul className='form-list'>
        {member.map(({id,name,email})=>
          <li className='list' key={id}>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <button className='btn-remove' onClick={()=>removeMember(id)}><Trash2 /></button>
            </li>
          
        )}
      </ul>
    </div>
  )
}

export default Accessory;
