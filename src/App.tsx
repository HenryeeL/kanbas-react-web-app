import Labs from "./Labs";
import Kanbas from "./Kanbas";
import LandingPage from './Landing';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}