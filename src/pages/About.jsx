import {useEffect,useReducer,useState} from 'react'
import axios from 'axios';

const defaultState={
  user:[],
  isError:false,
  isLoading:true,
}
const reducer=(state,action)=>{
  if(action.type ==="FETCH"){
    return{...state,user:action.payload}
  }
  if(action.type==="ERROR"){
    return{...state,isError:true}
  }
  if(action.type==="LOADING"){
    return{...state,isLoading:false}
  }
}
const About = () => {
  const [state,dispatch]= useReducer(reducer,defaultState);
  const url="https://api.github.com/users";
  useEffect(()=>{
    const fetchData= async ()=>{
      try {
        const {data} = await axios(url);
        dispatch({type:"FETCH",payload:data})
        // setUser(data);
        // const respone= await fetch(url);
        // const data= await respone.json();
        // setUser(data);
        // if(!respone.ok){
        //   const smg = respone.status;
        //   throw new Error(smg);
        // }
      } catch (error) {
        dispatch({type:"ERROR"})
        // setIsError(true)
      }
      // setIsLoading(false);
      dispatch({type:"LOADING"})
    }
    fetchData();
  },[])
  if(state.isLoading){
    return <h2>Loading...</h2>
  }
  if(state.isError){
    return <h2>Something went wrong</h2>
  }
  return (
    <div className='user-container'>
      {state.user.map(({id,avatar_url,html_url,login})=>{
        return(
          <article key={id} className='user-card'>
            <img className='user-img' src={avatar_url} alt={login} />
            <h3 className='user-title'>{login}</h3>
            <a className='user-btn' href={html_url}>See Profile</a>
          </article>
        )
      })}
    </div>
  )
}

export default About
