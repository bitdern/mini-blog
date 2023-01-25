import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPoast from "./Components/NewPoast";
import BlogDetails from "./Components/blogdetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/newpoast" element={<NewPoast />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
