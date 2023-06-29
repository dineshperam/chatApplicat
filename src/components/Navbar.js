import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
import Modal from '../Modal';

export default function Navbar() {
  const [cartView, setCartView] = useState(false)
  let data = useCart();
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');

    navigate("/login")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
                style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">HungryVerse</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {(localStorage.getItem("token")) ?
                <li className="nav-item">
                  <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/myOrder" >My Orders</Link>  {/* index.css - nav-link color white */}
                </li> : ""}
            </ul>
            {(!localStorage.getItem("token")) ?
              <div className='d-flex'>
                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
              </div>
              :
              <div>
                <div className="btn bg-white text-success mx-2" onClick={()=>{setCartView(true)} }>
                  <Badge color="secondary" badgeContent={data.length} >
                    <ShoppingCartIcon />
                  </Badge>
                  Cart
                </div>
                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
                <div onClick={handleLogout} className="btn bg-white text-danger mx-2">
                  Logout
                </div>
              </div>}
          </div>
        </div>
      </nav>
    </div>
  )
}
