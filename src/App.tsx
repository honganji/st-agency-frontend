import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Service from "./pages/service/service";
import Contact from "./pages/contact/contact";
import BottomBar from "./components/bottom-bar/bottomBar";

function App() {
  const color = "#240750"
  return (
    <div className="flex h-screen flex-col overscroll-y-none text-white" style={{backgroundColor: color}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <BottomBar/>
      </BrowserRouter>
    </div>
  );  
}

export default App;
