import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Incomplete from "./pages/Incomplete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/complete" element={<Completed/>}/>
        <Route path="/incomplete" element={<Incomplete/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
