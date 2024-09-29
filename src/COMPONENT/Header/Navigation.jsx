import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 bg-dark text-white">
            <div className="p-3">
              <div className="d-flex justify-content-between align-items-center ">
                <h3>Harrys Library</h3>
                <div className="">
                  <Link to="/createBook" className="btn btn-primary">
                    NEWBOOK
                  </Link>
                  <Link to="/createAuthor" className="btn btn-primary ms-2">
                    NEWAUTHOR
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
