import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import StuSpecificClass from '../StuSpecificClass/StuSpecificClass';

const StuClassList = () => {
    const [classes,setClasses]=useState([]);
    const {courseId}=useParams();
    

    useEffect(()=>{
        fetch(`http://localhost:5000/getCourses/${courseId}`)
        .then(res=>res.json())
        .then(data=>{
            setClasses( data.classes);
         
        });
    },[courseId]);

    
    
    

    return (
        <div>
             

            {
               classes.map(classId=><StuSpecificClass key={classId} classId={classId}></StuSpecificClass>) 
            }

        </div>
    );
};

export default StuClassList;