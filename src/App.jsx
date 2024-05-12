import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AiChat from "./pages/AiChat.jsx";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chat" element={<AiChat />} />
      </Routes>
    </Router>
  );
}

export default App;
