import "./App.css";

import Main from "./Layout/Main/main";
import CardDetail from "./Routers/CardDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Card-detail/:id" element={<CardDetail />} />
      </Routes>
      {/* <Main /> */}
    </BrowserRouter>
  );
}

export default App;
