
import { useState } from 'react';
import Nav from './Component/Nav';
import Login from './Component/Login';
import Shop from './Component/Shop';
import Contact from './Component/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [User,setUser]=useState("User");
  const [logged,setLogged]=useState(false);
  const updateUser = (newUser) => {
    setUser(newUser);
    setLogged(true); // User is now logged in
  };
  return (
    <div className="App">
       <Router>
       <Nav User={User}></Nav>
       <Routes>
        <Route path="/" element={<Login setUser={updateUser} logged={logged} setLogged={setLogged} ></Login>} /> 
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
     
     
    </div>
  );
}

export default App;
