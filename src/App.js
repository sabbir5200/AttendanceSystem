import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList/CourseList';
import ClassList from './components/ClassList/ClassList';
import StudentList from './components/StudentList/StudentList';
import AttendancePerClass from './components/AttendancePerClass/AttendancePerClass';
import StuAttendancePerClass from './components/StuAttendancePerClass/StuAttendancePerClass';
import StuClassList from './components/StuClassList/StuClassList';
import StuCourseList from './components/StuCourseList/StuCourseList';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import FrontPage from './components/FrontPage/FrontPage';
import Assignqr from './components/Assignqr/Assignqr';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<HomePage></HomePage>}></Route>
        <Route exact path='/frontpage' element={<FrontPage></FrontPage>}></Route>
        <Route exact path='/assignqr' element={<Assignqr></Assignqr>}></Route>
        <Route exact path='/courselist' element={<CourseList></CourseList>}></Route>
        <Route exact path='/stucourselist' element={<StuCourseList></StuCourseList>}></Route>
        <Route exact path='/class/:courseId' element={<ClassList></ClassList>}></Route>
        <Route exact path='/stuclass/:courseId' element={<StuClassList></StuClassList>}></Route>
        <Route exact path='/student/:classId' element={<StudentList></StudentList>}></Route>
        <Route exact path='/perclassattendance/:classId' element={<AttendancePerClass></AttendancePerClass>}></Route>
        <Route exact path='/stuperclassattendance/:classId' element={<StuAttendancePerClass></StuAttendancePerClass>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
