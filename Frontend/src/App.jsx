import './App.css'
import ProtectedRoute from './components/ProtectedRoute';
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
import ScrollToTop from './components/ScrollToTop';
import Quotes from './Pages/Quotes';
import SetuChapters from './Pages/SetuChapters/setuChapters';
import ChapterDetail from './components/ChapterDetail';
function App() {
  return (
    <Router>
      <div className="app-container"> {/* ✅ Flex container */}
        <ScrollToTop />
        <Navbar />

        <div className="main-content"> {/* ✅ Grows to push footer */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/charanpooja' element={<CharanPooja />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/history' element={<History />} />
            <Route path='/important-notes' element={<ProtectedRoute><ImportantNotes /></ProtectedRoute>} />
            <Route path='/other' element={<ProtectedRoute><Other /></ProtectedRoute>} />  
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />   
            <Route path='/prayer' element={<ProtectedRoute><Prayer /></ProtectedRoute>} /> 
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />   
            <Route path='/terms-and-conditions' element={<TermsCondition />} /> 
            <Route path='/forgotpassword' element={<ForgotPassword />} />   
            <Route path='/otppage' element={<OTPPage />} /> 
            <Route path='/createpassword' element={<CreatePassword />} />
            <Route path='/qna-section' element={<ProtectedRoute><QnaSection /></ProtectedRoute>} />
            <Route path='/sadhna' element={<ProtectedRoute><Sadhna /></ProtectedRoute>} />
            <Route path='/about' element={<About />} />
            <Route path='/quotes' element={<ProtectedRoute><Quotes /></ProtectedRoute>} />
            <Route path='/setu-chapters' element={<ProtectedRoute><SetuChapters /></ProtectedRoute>} />
            <Route path='/chapters/:slug' element={<ProtectedRoute><ChapterDetail /></ProtectedRoute>} />
          </Routes>
        </div>

        {/* Toast Container outside Routes */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

        <Disclaimer />
        <Footer /> {/* ✅ Footer sticks at bottom */}
      </div>
    </Router>
  )
}

export default App;
