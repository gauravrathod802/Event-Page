import { Route, Routes } from "react-router-dom";
import EventPage from "./Components/EventPage";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Registration from "./Components/Registration";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<EventPage/>}/>
        <Route path="/registration/:index" element={<Registration/>} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
