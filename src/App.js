import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import About from "./routes/About";
import Poems from "./routes/Poems";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Missing from "./routes/Missing";


function App() {

  const isLoggedIn = document.cookie.includes("token");
  //console.log(isLoggedIn); useffect to handle to avoid reload. 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="poems" element={<Poems isLoggedIn={isLoggedIn} /> } /> 
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
