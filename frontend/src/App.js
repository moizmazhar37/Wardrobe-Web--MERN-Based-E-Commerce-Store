import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import AdminAuth from './components/AdminAuth';
import CustomerAuth from './components/CustomerAuth';
import AdminDashboard from './components/AdminDashboard';
import AddProduct from './components/AddProducts';
import CustomerRegisteration from './components/CustomerRegisteration';
import Home from './components/Home';
import WardrobeStates from './contexts/WardrobeStates';
import ViewCart from './components/ViewCart';

function App() {
  return (
    <div className="App">
        <WardrobeStates>
        <BrowserRouter>
          <Routes>                
            <Route path="/" element={<Homepage/>} />
            <Route path="/admin" element={<AdminAuth/>} />
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />
            <Route path="/addProducts" element={<AddProduct/>} />
            <Route path="/customer" element={<CustomerAuth/>} />
            <Route path="/Customer/Registeration" element={<CustomerRegisteration/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/ViewCart" element={<ViewCart/>} />
          </Routes>
        </BrowserRouter>
        </WardrobeStates>
    </div>
  );
}

export default App;


