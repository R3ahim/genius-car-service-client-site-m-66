import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import HOme from './Pages/Home/HOme/HOme';
import Header from './Pages/Shared/Header/Header';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/LOgin/Login';
import Register from './Pages/Login/LOgin/Register/Register';
import RequiredAuth from './Pages/Login/LOgin/RequiredAuth/RequiredAuth';
import Checkout from './Pages/CheckOut/Checkout/Checkout';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/MangeServices/ManageService';

function App() {
  return (
    <div >

     <Header></Header>
     <Routes>
     <Route path="/" element={<HOme/>} />
     <Route path="/home" element={<HOme/>} />
     <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
     <Route path="about" element={<About />} />
     <Route path="/login" element={<Login></Login>}></Route>

     <Route path='/register' element={<Register></Register>}></Route>
     <Route path="/checkout" element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>
        }></Route>
     <Route path="/addservice" element={
          <RequiredAuth>
           <AddService></AddService>
          </RequiredAuth>
        }></Route>
     <Route path="/manageservices" element={
          <RequiredAuth>
           <ManageService></ManageService>
          </RequiredAuth>
        }></Route>
     <Route path={'*'} element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
