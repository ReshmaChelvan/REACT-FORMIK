import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from './Header/Navigation';
import '../STYLE/Home.css';

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="container-fluid" id="img-color">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center mt-3 gap-3">
            <NavLink
              to="/"
              className="btn btn-outline border-top-0 fw-bold text-white-50"
            >
              SHOWBOOK
            </NavLink>
            <NavLink
              to="/ShowAuthor"
              className="btn btn-outline border-top-0 fw-bold text-white-50"
            >
              SHOWAUTHOR
            </NavLink>
          </div>
          <div className="col-sm-12">
            <div className="card text-white bg-dark mt-1 p-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
