import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StuAttendancePerClassOnePerson from '../StuAttendancePerClassOnePerson/StuAttendancePerClassOnePerson';


const StuAttendancePerClass = () => {
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
                studentlist.map(student=><StuAttendancePerClassOnePerson studentId={student}></StuAttendancePerClassOnePerson>)
            }
        </div>
    );
};

export default StuAttendancePerClass;