import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./project/components/Header";
import Home from "./project/pages/Home";
import About_Page from "./project/pages/About_Page";
import Services_Page from "./project/pages/Services_Page";
import Contact_Page from "./project/pages/Contact_Page";
import Booking_Page from "./project/pages/Booking_Page";
import Not_Found from "./project/pages/Not_Found";

export default function App() {
  return (
    <BrowserRouter>
    
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About_Page/>} />
        <Route path="/services" element={<Services_Page/>} />
        <Route path="/contact" element={<Contact_Page/>} />
        <Route path="/booking" element={<Booking_Page/>} />
        <Route path="*" element={<Not_Found />} />
      </Routes>

    </BrowserRouter>
  );
}
