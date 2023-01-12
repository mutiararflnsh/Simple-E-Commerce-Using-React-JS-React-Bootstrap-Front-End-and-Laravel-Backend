import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProducts from './AddProducts';
import UpdateProducts from './UpdateProducts';
import Protected from './Protected';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>} />
       </Routes>

       <Routes>
            <Route path="/register" element={<Register/>} />
       </Routes>

       <Routes>
            <Route path="/add" element={<Protected Cmp={AddProducts}/>} />
       </Routes>

       <Routes>
            <Route path="/update" element={<Protected Cmp={UpdateProducts}/>} />
       </Routes>

       <Routes>
            <Route path="/" element={<Protected Cmp={ProductList}/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
