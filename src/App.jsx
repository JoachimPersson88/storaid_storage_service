import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./project/components/Header";
import Home from "./project/pages/Home";
import About_Page from "./project/pages/About_Page";

export default function App() {
  return (
    <BrowserRouter>
      {/* Header visas på alla sidor */}
      <Header />

      {/* Sidbyten sker här */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About_Page/>} />
      </Routes>
    </BrowserRouter>
  );
}
