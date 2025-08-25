import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import GetStarted from "./pages/GetStarted.jsx";
import GermanLayout from "./pages/german/GermanLayout.jsx";
import GermanHome from "./pages/german/GermanHome.jsx";
import GermanAlphabet from "./pages/german/GermanAlphabet.jsx";
import GermanAdjectives from "./pages/german/GermanAdjectives.jsx";

function App() {
    const hideNavbar = location.pathname.startsWith("/germanlayout") || location.pathname.startsWith("/chichewa");
  return (
          <>
              {!hideNavbar && <Navbar />}
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/start" element={<GetStarted/> } />
                    <Route path="/germanlayout" element={<GermanLayout/>} >
                        <Route index element={<GermanHome/>}/>
                        <Route path="germanalphabet" element={<GermanAlphabet/>}/>
                        <Route path="germanadjectives" element={<GermanAdjectives/>}/>
                    </Route>
                </Routes>
            </Router>
        </>
  )
}

export default App
