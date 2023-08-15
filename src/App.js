import './App.css';

//import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Order from './Components/Order/Order';
import Blog from './Components/Blogs/Blog';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';

//const auth = getAuth(app);


function App() {


  return (
    <div>

      <Header></Header>


      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        {/* <Route path="/about" element={<About></About>}></Route> */}
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* <Route path="/blogs" element={<Blog></Blog>}></Route> */}
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/order" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>




      </Routes>
      <Footer></Footer>


    </div>

  );
}

export default App;
