import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css"

function App() {

  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
