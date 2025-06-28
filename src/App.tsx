import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/LandingPage"
import CustomizePage from "./pages/CustomizePage"

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/customize" element={<CustomizePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
