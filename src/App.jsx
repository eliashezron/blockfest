import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact={true} element={<Landing />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
