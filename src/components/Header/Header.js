import React, { useContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import { Link } from 'react-router-dom';
import HomePage, { MyContext } from '../HomePage/HomePage';
const Header = () => {
    const {user,logout}=useFirebase();
    const [profession,setProfession]=useContext(MyContext);
    console.log(profession)
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        <Link to='/'>Homepage</Link>
        {profession=='teacher'?<Link to='/courselist'>CourseList</Link>:<Link to='/stucourselist'>CourseList</Link>}
        
        <Link to='/assignqr'>My QR Code</Link>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">HSTU Attendance System</a>
  </div>
  <div className="navbar-end">
  {user?.displayName}
  {user?.email ? <button className='ml-8' onClick={logout}>Logout</button>:<Link to='/'>LogIn</Link>}
  </div>
</div>
        // <div>
        //     <Link to='/courselist'>CourseList</Link>
        //     <span>{user?.displayName}</span>
        //     {user?.email ? <button onClick={logout}>Logout</button>:<Link to='/'>LogIn</Link>}
        // </div>
    );
};

export default Header;