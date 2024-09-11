import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import MyAppointment from './pages/MyAppointment';
import NavBar from './components/NavBar';
import MyProfile from './pages/MyProfile';
import Appointment from './pages/Appointment';

const App = () => {
  return (
<>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
      </>
  );
};

export default App;
