import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/page1" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  );  
}

export default App;
