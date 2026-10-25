import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../src/Authantication/Register";
import Login from "../src/Authantication/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Register Page (Main Page) */}
        <Route path="/" element={<Register />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;