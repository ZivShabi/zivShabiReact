import { BrowserRouter as Router, Routes, Route, Navigate, useFetcher } from 'react-router-dom'
import Footer from './components/showing-Main-Page/Footer'
import Header from './components/showing-Main-Page/Header'
import NavBar from './components/showing-Main-Page/NavBar'
import Logo from './components/showing-Main-Page/Logo'
import HomePage from './project-Tagging-Pages/HomePage'
import AboutPage from './project-Tagging-Pages/AboutPage'
import ServicesPage from './project-Tagging-Pages/ServicesPage'
import ContactPage from './project-Tagging-Pages/ContactPage'
import SignUp from './project-Tagging-Pages/SignUp'
import SignIn from './project-Tagging-Pages/SignIn'
import SignUpBiz from './project-Tagging-Pages/SignUpBiz'
import SignOut from './project-Tagging-Pages/SignOut'
import { AuthProvider } from './contexts/auth.Contexts'
import { LikeProvider } from './contexts/Like.Context'
import BizCardHome from './project-Tagging-Pages/BizCardHome'
import CreateCardBiz from './project-Tagging-Pages/CreateCardBiz'
import MyCards from './project-Tagging-Pages/MyCards'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Favourites from './project-Tagging-Pages/Favourites'
import { CardProvider } from './contexts/Card.Context'
import CardDetail from './project-Tagging-Pages/CardDetail'
import { AllCardsProvider } from './contexts/AllCards.Contexts'
import { SearchProvider } from './contexts/Search.Contexts'

import './App.css'

function App() {
  return (
    <div className="app min-vh-100 d-flex flex-column gap-2">
      <Router>
        <AuthProvider>
          <LikeProvider>
            <CardProvider>
              <AllCardsProvider>
                <SearchProvider>
                  <Header className='pb-3'>
                    <NavBar />
                  </Header>

                  <main className="flex-fill container">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/sign-in" element={<SignIn />} />
                      <Route path="/sign-up" element={<SignUp />} />
                      <Route path="/sign-up-biz" element={<SignUpBiz />} />
                      <Route path="/sign-out" element={<SignOut />} />
                      <Route path="/biz-card-home" element={<BizCardHome />} />
                      <Route path="/create-card-biz" element={<CreateCardBiz />} />
                      <Route path="/my-Cards" element={<MyCards />} />
                      <Route path="/card-detail/:id" element={<CardDetail />} />
                      <Route path="/Favourites" element={<Favourites />} />
                      <Route path="*" element={<Navigate to="/" />} />
                    </Routes>

                    <ToastContainer />
                  </main>

                  <Footer>
                    <Logo />
                  </Footer>
                </SearchProvider>
              </AllCardsProvider>
            </CardProvider>
          </LikeProvider>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
