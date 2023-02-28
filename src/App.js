import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SingIn from './pages/SingIn';

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path='/' element={<Explore/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path="/profile" element={<PrivateRoute> <Profile /> </PrivateRoute>} />
          <Route path='/sign-in' element={<SingIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
        </Routes>
        <Navbar/>
      </Router>
      <ToastContainer autoClose='3000'/>
    </>
  );
}

export default App;
