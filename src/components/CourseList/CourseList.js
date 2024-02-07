import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const CourseList = () => {
    const [courses,setCourses]=useState([]);
    const courseRef=useRef();
    const [searchtext,setSearchtext]=useState('');
    const handleCourseAdd=()=>{
        
        const courseName=courseRef.current.value;
        fetch('http://localhost:5000/addCourse',{
            method:'POST',
            headers: {
                
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({courseName})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                
        }
        });

        courseRef.current.value='';
                alert('Course Successfully Added');

    }

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
            <input className='border-4' onChange={(e)=>searchOptions(e.target.value)} type="text" name="" id="" placeholder='Search to Filter Options'/>
            
            <br />
            <input className='border-4' type="text" name="" id="" placeholder='Course-Code' ref={courseRef}/>
            <button onClick={handleCourseAdd}
  class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
  ADD COURSE
</button>

        <div className='mt-12 '>
        {
        searchtext==''?courses.map(course=><div className='p-12 border-2 border-lime-500' key={course._id}>
           <div>
           {course.name}
           </div>
            
            <Link className='mt-24' to={`/class/${course._id}`}><button>Enter</button></Link>
        </div>):courses.filter(course => 
        course.name.toLowerCase().includes(searchtext.toLowerCase())
      ).map(course=><div className='p-12 border-2 border-lime-500' key={course._id}>
            {course.name}
            
            <Link to={`/class/${course._id}`}><button>Enter</button></Link>
        </div>)
        
        }
        </div>

        </div>
    );
};

export default CourseList;