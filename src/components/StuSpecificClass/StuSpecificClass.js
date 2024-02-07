import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StuSpecificClass = (props) => {

   const [classlist,setClasslist]=useState({});
        const classId=props.classId;
        
   useEffect(()=>{
    fetch(`http://localhost:5000/getClasses/${classId
}`)
.then(res=>res.json())
.then(classs=>setClasslist(classs))
   },[]);

   
    return (
        <div>
            {classlist.name}
            
            <Link to={`/stuperclassattendance/${classId}`}><button>Display Attendance For this Class</button></Link>
        </div>
    );
};

export default StuSpecificClass;