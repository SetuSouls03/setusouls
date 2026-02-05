import './App.css'
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
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
import SetuNotes from './Pages/SetuNotes/SetuNotes';
import Notes from './components/Notes';
import Summary from './Pages/Summary';
import MyExperiences from './Pages/MyExperiences';
import MantraPage from './Pages/MantraPage';
import AboutSetu from './Pages/AboutSetu';
import AdminLogin from './Admin/Pages/AdminLogin';
import AdminDashboard from './Admin/Pages/AdminDashboard';

// Import Admin Components
import AdminHome from './Admin/Pages/AdminHome';
import AdminAbout from './Admin/Pages/AdminAbout';
import AdminCharanPooja from './Admin/Pages/AdminCharanPooja';
import AdminPrayer from './Admin/Pages/AdminPrayer';
import AdminImportantNotes from './Admin/Pages/AdminImportantNotes';
import AdminSummary from './Admin/Pages/AdminSummary';
import AdminOtherSection from './Admin/Pages/AdminOtherSection';
import AdminQuery from './Admin/Pages/AdminQuery';
import AdminMyExperience from './Admin/Pages/AdminMyExperience';
import AdminAboutHanudas from './Admin/Pages/AdminAboutHanudas';
import AdminHistory from './Admin/Pages/AdminHistory';
import AdminContact from './Admin/Pages/AdminContact';
import AdminPrivacyPolicy from './Admin/Pages/AdminPrivacyPolicy';
import DashboardContent from './Admin/Components/DashboardContent';

// Create a wrapper component to handle conditional rendering
function AppContent() {
  const location = useLocation();
  
  // Check if current path is admin login or admin dashboard routes
  const isAdminRoute = location.pathname === '/admin-login' || 
                       location.pathname.startsWith('/admin-dashboard');
  
  return (
    <div className="app-container">
      <ScrollToTop />
      
      {/* Conditionally render Navbar */}
      {!isAdminRoute && <Navbar />}

      {/* Apply pt-32 only for non-admin routes */}
      <div className={`main-content ${!isAdminRoute ? 'pt-32' : ''}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/charanpooja' element={<CharanPooja />} />
          <Route path='/about-setu' element={<AboutSetu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/history' element={<History />} />
          <Route path='/mantra-page' element={<MantraPage />} />
          <Route path='/important-notes' element={<ProtectedRoute><ImportantNotes /></ProtectedRoute>} />
          <Route path='/other' element={<ProtectedRoute><Other /></ProtectedRoute>} />  
          <Route path='/login' element={<Login />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/admin-dashboard/*' element={<AdminDashboard />} />
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
          <Route path='/setu-notes' element={<ProtectedRoute><SetuNotes /></ProtectedRoute>} />
          <Route path='/chapters/:slug' element={<ProtectedRoute><ChapterDetail /></ProtectedRoute>} />
          <Route path='/notes/:slug' element={<ProtectedRoute><Notes /></ProtectedRoute>} />
          <Route path='/summary' element={<ProtectedRoute><Summary /></ProtectedRoute>} />
          <Route path='/my-experiences' element={<ProtectedRoute><MyExperiences /></ProtectedRoute>} />
          
          {/* Admin Nested Routes (will be handled inside AdminDashboard) */}
          <Route path='/admin-dashboard' element={<AdminDashboard />}>
            <Route index element={<DashboardContent />} />
            <Route path="home" element={<AdminHome />} />
            <Route path="about" element={<AdminAbout />} />
            <Route path="charan-pooja" element={<AdminCharanPooja />} />
            <Route path="prayer" element={<AdminPrayer />} />
            <Route path="important-notes" element={<AdminImportantNotes />} />
            <Route path="summary" element={<AdminSummary />} />
            <Route path="other-section" element={<AdminOtherSection />} />
            <Route path="devotee-queries" element={<AdminQuery />} />
            <Route path="my-experience" element={<AdminMyExperience />} />
            <Route path="about-hanudas" element={<AdminAboutHanudas />} />
            <Route path="history" element={<AdminHistory />} />
            <Route path="contact" element={<AdminContact />} />
            <Route path="privacy-policy" element={<AdminPrivacyPolicy />} />
          </Route>
        </Routes>
      </div>

      {/* Toast Container outside Routes */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      {/* Conditionally render Disclaimer and Footer */}
      {!isAdminRoute && (
        <>
          <Disclaimer />
          <Footer />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App;