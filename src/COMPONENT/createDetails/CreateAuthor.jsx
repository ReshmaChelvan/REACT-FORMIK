import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import '../../../src/STYLE/createAuthor.css';
import { authorcontextCreater } from '../../Store/Context';

const CreateAuthor = () => {
  const navi = useNavigate();
  const { authState, authdispatch } = useContext(authorcontextCreater);
  const initialValue = {
    authorName: '',
    dateOfBirth: '',
    bioGraphy: '',
  };
  function onSubmitHandler(value) {
    authdispatch({
      type: 'createAuthor',
      payLoad: {
        id: authState.length,
        author: value.authorName,
        dob: value.dateOfBirth,
        bio: value.bioGraphy,
      },
    });
    navi('/ShowAuthor');
  }
  let validation = yup.object({
    authorName: yup.string().required('Required'),
    dateOfBirth: yup.date().required('Required'),
    bioGraphy: yup.string().required('Required'),
  });

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
                  <Link to="/" className="btn btn-primary ms-2">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12">
            <Formik
              initialValues={initialValue}
              validationSchema={validation}
              onSubmit={onSubmitHandler}
            >
              {({ errors, touched }) => (
                <Form>
                  <label className="form-label h6 mt-2">AUTHORNAME:</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="authorName"
                    placeholder="Enter The Author Name"
                  />
                  {errors.authorName && touched.authorName ? (
                    <p className="error-para text-danger">
                      {errors.authorName}
                    </p>
                  ) : (
                    <p className="error-para text-white">.</p>
                  )}
                  <br />
                  <label className="form-label h6 mt-2">DATEOFBIRTH</label>
                  <Field
                    type="date"
                    className="form-control"
                    name="dateOfBirth"
                    placeholder="Enter The Date Of Birth"
                  />
                  {errors.dateOfBirth && touched.dateOfBirth ? (
                    <p className="error-para text-danger">
                      {errors.dateOfBirth}
                    </p>
                  ) : (
                    <p className="error-para text-white">.</p>
                  )}
                  <br />
                  <label className="form-label h6 mt-2">BIOGRAPHY</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="bioGraphy"
                    placeholder="Give Some Short BioGraphy"
                  />
                  {errors.bioGraphy && touched.bioGraphy ? (
                    <p className="error-paras text-danger">
                      {errors.bioGraphy}
                    </p>
                  ) : (
                    <p className="error-paras text-white">.</p>
                  )}
                  <button type="submit" className="btn btn-secondary mt-2 ">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAuthor;
