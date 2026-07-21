import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CreateCertificate from "./pages/CreateCertificate";
import VerifyCertificate from "./pages/VerifyCertificate";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCertificate />} />
        <Route path="/verify" element={<VerifyCertificate />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;