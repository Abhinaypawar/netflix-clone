import React, { useState } from 'react'
import{Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'


function Login() {
  
   const[email,setEmail]=useState("")
   const[password,setPassword]=useState("")


   const {user,logIn}= UserAuth();
   const navigate=useNavigate();



    const handleFormsubmit=async (e)=>{
    e.preventDefault();

   try {
   await logIn(email,password);
   navigate("/"); 
   } catch (error) {
    console.log(err);
   }
   };

   
  return (
   <>
   <div className='w-full h-screen'>
    <img 
    className='absolute sm:block   w-full h-full object-cover'
    src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt=""
     />
     <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'>
      <div className='fixed w-full px-4 py-24 z-20'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-nsans-bold'>login</h1>

            <form  
                onSubmit={handleFormsubmit}
                className='w-full flex flex-col py-4'> 
              <input
                className='p-3 my-2 bg-gray-700 rounded'
                type="email"
                placeholder='email'
                autoComplete='email' 
                value={email}
                 onChange={(e)=>setEmail(e.target.value)}
              />

             <input
               className='p-3 my-2 bg-gray-700 rounded'
               type="password"
               placeholder='password'
               autoComplete='current-password'
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
             />

              <button className='bg-red-600 font-nsans-bold py-3 my-4 rounded'>login</button>

              
              <p className='my-4'>
                <span className='text-gray-600'>
                 new to netflix
                </span>
                <Link to="/signup">   sign up </Link>
              </p>
            </form>
          </div>
        </div>

      </div>

     </div>

   </div>
   </>
  )
}

export default Login