import { Route, Router,  Routes, Link } from "react-router-dom"

import Contact from "./components/Contact"
import MainPage from "./components/MainPage"
import NotFound from "./components/NotFound"
function App() {

  return (
    <div className="h-screen w-full">
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </div>
  )
}

export default App
