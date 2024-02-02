import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/Aboutpage/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectPage/ProjectsPage'
import BlogPage from './pages/BlogPage/BlogPage'
import ContactPage from './pages/ContactPage'
import TopNav from './component/GlobalComponent/topNav/TopNav'
import Footer from './component/GlobalComponent/Footer/Footer'

function App () {
  return (
    <div className='App'>
      <Router>
        <div>
          <TopNav />
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/AboutPage' element={<AboutPage />} />
            <Route path='/ServicesPage' element={<ServicesPage />} />
            <Route path='/ProjectsPage' element={<ProjectsPage />} />
            <Route path='/ContactPage' element={<ContactPage />} />
            <Route path='/BlogPage' element={<BlogPage />} />
          </Routes>
        </div>
      </Router>
    <Footer></Footer>
    </div>
  )
}

export default App
