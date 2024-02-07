import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QrReader } from "react-qr-reader";

const StudentList = () => {
    const {classId}=useParams();
    const studentRef=useRef();

  const scanneref=useRef();
    const [scanResult, setResult] = useState('');
  const [isStart, setIsStart] = useState(false);
  
useEffect(()=>{
  if(scanneref.current.innerText.length>0){

    fetch(`http://localhost:5000/addStudent/${classId}`,{
      method:'POST',
      headers: {
          
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({text:scanneref.current.innerText})
  })
  .then(res=>res.json())
  .then(data=>{
      if(data.insertedId){
          alert('Attendance Done');
  }});

  }


},[scanResult])
  const handlePlay = () => {
    setResult('');
    setIsStart(!isStart);
  };
  const handleQr = (result) => {
    
    if (!!result) {
      if(result?.text){
        scanneref.current.innerText=result.text;
        if(scanneref.current.innerText!=scanResult)
        setResult(result?.text);
        
  
      
      console.log(result)
      }
      
    }
    // console.log(result,'vhvvk')
  };



const handleStudent=()=>{
  const studentId=studentRef.current.value;
  fetch(`http://localhost:5000/addStudent/${classId}`,{
        method:'POST',
        headers: {
            
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({studentId})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            
    }});
    studentRef.current.value='';
        alert('Attendance Done');
    
}
    
    return (
        <main>
          <input ref={studentRef} type="text" name="" id="" placeholder='Type Your ID'/>
          <button onClick={handleStudent}>ADD STUDENT</button>
          <br />
      <div className="content-box w-11/12 mx-auto min-h-screen gap-5 flex-wrap flex justify-center items-center">
        <div>
          <button onClick={handlePlay} className=" btn btn-primary">
            {isStart ? "Stop Scanning" : "Scan Now"}
          </button>
          <p ref={scanneref}></p>
        </div>

        {isStart && (
          <div className="relative w-[400px] shadow-inner shadow-black bg-slate-200 rounded-lg border-8 px-10">
            <QrReader
              onResult={(result) => handleQr(result)}
              
            />
            <div className="p-px line absolute z-10 left-0 w-full top-0 bg-red-600 shadow shadow-white"></div>
          </div>
        )}
      </div>
    </main>
    );
};

export default StudentList;