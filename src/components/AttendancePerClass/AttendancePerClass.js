import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AttendancePerClassOnePerson from '../AttendancePerClassOnePerson/AttendancePerClassOnePerson';

const AttendancePerClass = () => {
const {classId}=useParams();
const [studentlist,setStudentlist]=useState([]);


    useEffect(()=>{
        fetch(`http://localhost:5000/getClasses/${classId
    }`)
    .then(res=>res.json())
    .then(classs=>setStudentlist(classs.students))
       },[]);
       
    return (
        <div>
           
            {
                studentlist.map(student=><AttendancePerClassOnePerson studentId={student}></AttendancePerClassOnePerson>)
            }
        </div>
    );
};

export default AttendancePerClass;