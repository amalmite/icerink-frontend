import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/Home/HomePage';
import Details from './components/Details';
import AfterPayment from './components/Payment/AfterPayment';
import Header from './frontend_components/Header';
import Footer from './frontend_components/Footer';
import UserDetails from './components/UserDetails/UserDetails';
import Login from './components/Login';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Mycontext } from './components/context';
import { useState } from 'react';


const MainLayout = ({ children }) => (
  <>
    <Header />
    <div style={{ paddingTop: '80px' }}>
      {children}
    </div>
    <Footer />
  </>
);


function App() {
  const [booking, setBooking] = useState([])
    const[total,setTotal]=useState(0)
    const [userData, setUserData] = useState({
      fullName: "",
      email: "",
      mobileNumber: "",
      address: "",
    });



  return (

    <div>
      <Router>
      <Mycontext.Provider value={{booking,setBooking,setTotal,total,userData,setUserData}}>
        <Routes>
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/details/:id" element={<MainLayout><Details /></MainLayout>} />
          <Route path="/user" element={<MainLayout><UserDetails /></MainLayout>} />
          <Route path="/payment" element={<MainLayout><AfterPayment /></MainLayout>} />
          <Route path='/about' element={<MainLayout><About/></MainLayout>}/>
          <Route path='/contact' element={<MainLayout><Contact/></MainLayout>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
        </Mycontext.Provider>
      </Router>
    </div>
  );
}

export default App;
