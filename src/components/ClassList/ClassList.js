import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpecificClass from '../SpecificClass/SpecificClass';

const ClassList = () => {
    const [classes,setClasses]=useState([]);
    const {courseId}=useParams();
    const classRef=useRef();

    const handleClassAdd=()=>{
        const className=classRef.current.value;

        fetch(`http://localhost:5000/addClass/${courseId}`,{
            method:'POST',
            headers: {
                
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({className})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                
        }});

        classRef.current.value='';
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/getCourses/${courseId}`)
        .then(res=>res.json())
        .then(data=>{
            setClasses( data.classes);
         
        });
    },[courseId]);

    
    
    

    return (
        <div>
             <input type="text" name="" id="" placeholder='Class Date' ref={classRef}/>
            <button onClick={handleClassAdd}>ADD CLASS</button>

            {
               classes.map(classId=><SpecificClass key={classId} classId={classId}></SpecificClass>) 
            }

        </div>
    );
};

export default ClassList;