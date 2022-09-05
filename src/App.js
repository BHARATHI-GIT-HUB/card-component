import "./App.css";
import Applied from "./Routers/Applied.jsx/applied";
import Main from "./Layout/Main/main";
import CardDetail from "./Routers/CardDetail/CardDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header/primaryHeader";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Card-detail/:id" element={<CardDetail />} />
        <Route path="/Applied" element={<Applied />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
