
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import AuthenComp from './Components/AuthenComponent/AuthenComp';
import Home from './Components/Home/Home'
import Lectures from './Components/Teachers Section/Lectures/Lectures';
import MessageList from './Components/Teachers Section/Messages/MessageList'
import ProfileView from './Components/Teachers Section/Profile/ProfileView';
import StudentInfo from './Components/Student Section/StudentInfo/StudentInfo';
import StudentInfoDetails from './Components/Student Section/StudentInfoDetails/StudentInfoDetails';
import StudentResult from './Components/Student Section/Student Results/StudentResult';
import TeachersNotes from './Components/Teachers Section/TechersNotes/TeachersNotes';
import LeavesSection from './Components/Teachers Section/Leaves/LeavesSection';
import AddLeavesPage from './Components/Teachers Section/Leaves/AddLeavesPage';
import HomeWorkPage from './Components/Teachers Section/HomeWorks/HomeWorkPage';
import SeeHomeWorkStatus from './Components/Teachers Section/HomeWorks/SeeHomeWorkStatus';
import StudentAttendance from './Components/Student Section/StudetAttendance/StudentAttendance';
import Notice from './Components/Teachers Section/Notice/Notice';
import FeeSection from './Components/Student Section/Fee Section/FeeSection';
import FeeSectionDetails from './Components/Student Section/Fee Section/FeeSectionDetails';
import BusLocationTrack from './Components/Student Section/BusLocation/BusLocationTrack';
import TrackBusExtended from './Components/Student Section/BusLocation/TrackBusExtended';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentHomeWork from './Components/Student Section/StudentHomeWork/StudentHomeWork';
import FeesPaymentCheck from './Components/Teachers Section/FeesPaymentCheck/FeesPaymentCheck';
import TeachersAlert from './Components/Teachers Section/TeachersAlert/TeachersAlert';
import CalenderSection from './Components/Calender/CalenderSection'
import LibrarySection from './Components/Library/LibrarySection';
import PrivateComponent from './Components/PrivateComponent/PrivateComponent';
import MoreExtended from './Components/MoreExtendedComponent/MoreExtended';
import AchivementSection from './Components/MoreExtendedComponent/AchivementSection/AchivementSection';
import Datesheet from './Components/MoreExtendedComponent/DateSheet/Datesheet';
import SyllabusSection from './Components/MoreExtendedComponent/SyllabusSection/SyllabusSection';
import TransportSection from './Components/MoreExtendedComponent/TransportSection/TransportSection';


function App() {
  return (
    <div className="App">
       <ToastContainer />
      <Routes>
        <Route path='/' element={<AuthenComp/>} />


        <Route  element={<PrivateComponent/>}>
        <Route path='/TeachersHome' element={<Home/>} />
        <Route path='/LectureList' element={<Lectures/>} />
        <Route path='/MessageList' element={<MessageList/>} />
        <Route path='/ProfileView' element={<ProfileView/>} />
        <Route path='/StudentInfo' element={<StudentInfo/>} />
        <Route path='/StudentDetails' element={<StudentInfoDetails/>} />
        <Route path='/StudentResults' element={<StudentResult/>} />
        <Route path='/TeachersNotes' element={<TeachersNotes/>} />
        <Route path='/LeaveSection' element={<LeavesSection/>} />
        <Route path='/AddLeavesPage' element={<AddLeavesPage/>} />
        <Route path='/HomeWorkPage' element={<HomeWorkPage/>} />
        <Route path='/StudentHomeWork' element={<StudentHomeWork/>} />
        <Route path='/SeeHomeWorkStatus' element={<SeeHomeWorkStatus/>} />
        <Route path='/StudentAttendance' element={<StudentAttendance/>} />
        <Route path='/NoticeSection' element={<Notice/>} />
        <Route path='/FeeSection' element={<FeeSection/>} />
        <Route path='/FeeDetails' element={<FeeSectionDetails/>} />
        <Route path='/TeachersFeeCheck' element={<FeesPaymentCheck/>} />
        <Route path='/BusLocation' element={<BusLocationTrack/>} />
        <Route path='/TrackBusExtended' element={<TrackBusExtended/>} />
        <Route path='/TeachersAlert' element={<TeachersAlert/>} />
        <Route path='/CalenderSection' element={<CalenderSection/>} />
        <Route path='/LibrarySection' element={<LibrarySection/>} />
        <Route path='/Moreextended' element={<MoreExtended/>} />
        <Route path='/AchivementSection' element={<AchivementSection/>} />
        <Route path='/DateSheetSection' element={<Datesheet/>} />
        <Route path='/SyllabusSection' element={<SyllabusSection/>} />
        <Route path='/TransportSection' element={<TransportSection/>} />
        <Route path='/ExtendedFeeSection' element={<TransportSection/>} />
        </Route>
    
      </Routes>
      
    </div>
  );
}

export default App;
