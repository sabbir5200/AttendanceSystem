import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StuCourseList = () => {
    const [courses,setCourses]=useState([]);
    const [searchtext,setSearchtext]=useState('');
    const searchOptions=(word)=>{
        setSearchtext(word);
}
    useEffect(()=>{
        fetch('http://localhost:5000/getCourses')
        .then(res=>res.json())
        .then(data=>setCourses(data.courses));
    },[])
    
    return (
        <div>
            <input onChange={(e)=>searchOptions(e.target.value)} type="text" name="" id="" placeholder='Search to Filter Options'/>
            
            <br />

            {
        searchtext==''?courses.map(course=><div key={course._id}>
            {course.name}
            
            <Link to={`/stuclass/${course._id}`}><button>Enter</button></Link>
        </div>):courses.filter(course => 
        course.name.toLowerCase().includes(searchtext.toLowerCase())
      ).map(course=><div key={course._id}>
            {course.name}
            
            <Link to={`/stuclass/${course._id}`}><button>Enter</button></Link>
        </div>)
        
        }

        </div>
    );
};

export default StuCourseList;