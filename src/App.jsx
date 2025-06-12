import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import BusinessPage from './pages/BusinessPage'
import ProductPage from './pages/ProductPage'
import RecruitmentPage from './pages/RecruitmentPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
      </Routes>
    </Router>
  )
}

export default App