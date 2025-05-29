import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About';
import Home from './Pages/Home'
import CharanPooja from './Pages/CharanPooja'
import Contact from './Pages/Contact'
import History from './Pages/History'
import ImportantNotes from './Pages/ImportantNotes'
import Footer from './components/Footer'
import Disclaimer from './components/Disclaimer'
import Other from './Pages/Other'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Prayer from './Pages/Prayer'
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsCondition from './Pages/TermsCondition';
import ForgotPassword from './Pages/ForgotPassword';
import OTPPage from './Pages/OTPPage';
import CreatePassword from './Pages/CreatePassword';
import Sadhna from './Pages/Sadhna';
import QnaSection from './Pages/QnaSection';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/charanpooja' element={<CharanPooja />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/history' element={<History />} />
        <Route path='/important-notes' element={<ImportantNotes />} />  
        <Route path='/other' element={<Other />} />  
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />   
        <Route path='/prayer' element={<Prayer />} /> 
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />   
        <Route path='/terms-and-conditions' element={<TermsCondition />} /> 
        <Route path='/forgotpassword' element={<ForgotPassword />} />   
        <Route path='/otppage' element={<OTPPage />} /> 
        <Route path='/createpassword' element={<CreatePassword />} />
        <Route path='/qna-section' element={<QnaSection />} />
        <Route path='/sadhna' element={<Sadhna />} />
        <Route path='/about' element={<About />} />
      </Routes>

      {/* Toast Container should be outside Routes */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <Disclaimer />
      <Footer />
    </Router>
  )
}

export default App;
