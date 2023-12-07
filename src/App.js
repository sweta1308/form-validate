import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Form } from "./pages/Form";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App flex justify-center items-center min-h-screen">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
