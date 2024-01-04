
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import AuthenComp from './Components/AuthenComponent/AuthenComp';
import StudentHome from './Components/Student Section/StudentHome/StudentHome';

function App() {
  return (
    <div className="App">
      {/* <AuthenComp/>
      <StudentHome/> */}
      <Routes>
        <Route path='/' element={<AuthenComp/>} />
        <Route path='/studentHome' element={<StudentHome/>} />
    
      </Routes>
      
    </div>
  );
}

export default App;
