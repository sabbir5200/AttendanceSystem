import React, { useEffect, useState } from 'react';

const StuAttendancePerClassOnePerson = (props) => {
    const [student,setStudent]=useState({});
    const studentId=props.studentId;
    

    useEffect(()=>{
        fetch(`http://localhost:5000/getStudents/${studentId}`)
        .then(res=>res.json())
        .then(data=>setStudent(data));
    },[]);

    console.log(student)
    
    return (
        <div>
           
                <li>{student.student_ID}</li>
           
        </div>
    );
};

export default StuAttendancePerClassOnePerson;