import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Error from "./Components/Error";
import Detail from "./Routes/Detail";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Error />} />
       
        <Route path="/producto/" element={<Detail />}>
          <Route path="/producto/:id" element={<Detail />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
