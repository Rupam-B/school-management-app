
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import AuthenComp from './Components/AuthenComponent/AuthenComp';
import TeachersHome from './Components/Teachers Section/TeachersHome/TeachersHome';
import Lectures from './Components/Teachers Section/Lectures/Lectures';
import MessageList from './Components/Teachers Section/Messages/MessageList'
import ProfileView from './Components/Teachers Section/Profile/ProfileView';
import StudentInfo from './Components/Student Section/StudentInfo/StudentInfo';
import StudentInfoDetails from './Components/Student Section/StudentInfoDetails/StudentInfoDetails';
import StudentResult from './Components/Student Section/Student Results/StudentResult';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AuthenComp/>} />
        <Route path='/TeachersHome' element={<TeachersHome/>} />
        <Route path='/LectureList' element={<Lectures/>} />
        <Route path='/MessageList' element={<MessageList/>} />
        <Route path='/ProfileView' element={<ProfileView/>} />
        <Route path='/StudentInfo' element={<StudentInfo/>} />
        <Route path='/StudentDetails' element={<StudentInfoDetails/>} />
        <Route path='/StudentResults' element={<StudentResult/>} />
    
      </Routes>
      
    </div>
  );
}

export default App;
