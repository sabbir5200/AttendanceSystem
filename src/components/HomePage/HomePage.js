import React, { createContext, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const MyContext=createContext('mydrills');

const HomePage = () => {
const {user,setUser,signinUsingGoogleforStudent,signinUsingGoogleforTeacher,signinUsingEmailPassword}=useFirebase();

    const [profession,setProfession]=useState('teacher');
    const [isLogin,setIsLogin]=useState(false);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    
    const [error,setError]=useState('');
    const auth=getAuth();
    const handleSubmit=()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user);
            navigate('/courselist');
        }).catch(err=>{
            setError(err.message);
        })
    }
    const professionHandle=(e)=>{
        setProfession(e.target.value);

    }
    const toggleLogin=(e)=>{
            setIsLogin(e.target.checked);
    }
  
   const handleEmail=(e)=>{
        setEmail(e.target.value);
   }
   const handlePassword=(e)=>{
        setPassword(e.target.value);
   } 
    
    return (
        <MyContext.Provider value={[profession,setProfession]}>
        <div>
        


            <div className='mt-5 mb-4'>
            <h3 className='text-xl'>Please {isLogin?<span>Register</span>:<span>Login</span>}</h3>
            </div>
           <form onSubmit={handleSubmit}>
           <div className='mb-3'>
            <label htmlFor="email">E-mail: </label>
            <input className='btn btn-outline' onChange={handleEmail} type="email" name="" id="" />
            </div>
            <br />
            <div>
            <label htmlFor="password">Password: </label>
            <input className='btn btn-outline' onChange={handlePassword} type="password" name="" id="" />
            </div>
            <br />
            <div className=''>
           <select className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ' name="" id="" onChange={professionHandle}>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
           </select>
           </div>

            {/* <details className="dropdown">
  <summary className="m-1 btn">Login As</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Teacher</a></li>
    <li><a>Student</a></li>
  </ul>

           
           {isLogin?<input type="submit" value="Register" />:<input type="submit" value="" />}
           </details> */}
           
          
           </form>

           
           <br />
           <input onChange={toggleLogin} type="checkbox" name="" id=""  />
           <label htmlFor="">New User.Not Registered</label>
           <br />
           <button className="btn btn-wide mt-3">Log In With Google</button>
            
        </div>
        </MyContext.Provider>
    );
};

export default HomePage;