import React, { useContext, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import '../../../src/STYLE/createBook.css';
import imgBackground from '/public/logo_make_11_06_2023_141.jpg';
import { Link, useNavigate } from 'react-router-dom';
import contextCreater from '../../Store/Context';

const CreateBook = () => {
  const navi = useNavigate();
  const { state, dispatch } = useContext(contextCreater);
  let initialValue = {
    title: '',
    Author: '',
    Isbn: '',
    Publish_Date: '',
  };
  let submitHandler = (value) => {
    dispatch({
      type: 'createBook',
      payLoad: {
        id: state.length,
        title: value.title,
        Author: value.Author,
        Isbn: value.Isbn,
        Publish_Date: value.Publish_Date,
      },
    });
    navi('/');
  };
  let validation = yup.object({
    title: yup
      .string()
      .min(5, 'Title Must GreaterThan 5 Character')
      .required('Required'),
    Author: yup.string().required('Required'),
    Isbn: yup.number().required('Required'),
    Publish_Date: yup.date().required('Required'),
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
                  <Link to="/createAuthor" className="btn btn-primary">
                    NEWAUTHOR
                  </Link>
                  <Link to="/" className="btn btn-primary ms-2">
                    HOME
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="background-full">
        <div className="row">
          <div className="col-sm-6">
            <Formik
              initialValues={initialValue}
              onSubmit={submitHandler}
              validationSchema={validation}
            >
              {({ errors, touched }) => (
                <Form>
                  <label
                    htmlFor="title"
                    className="form-label text-white  h6 mt-2"
                  >
                    Title:
                  </label>
                  <Field
                    type="text"
                    placeholder="Enter The Title"
                    name="title"
                    className="form-control w-100"
                  />
                  {errors.title && touched.title ? (
                    <p className="text-white text-remover">{errors.title}</p>
                  ) : (
                    <p className="text-dark text-remover">.</p>
                  )}
                  <label
                    htmlFor="Author"
                    className="form-label text-white  h6 mt-2"
                  >
                    Author
                  </label>
                  <Field
                    type="text"
                    placeholder="Enter The Author Name"
                    name="Author"
                    className="form-control w-100"
                  />
                  {errors.Author && touched.Author ? (
                    <p className="text-white text-remover">{errors.Author}</p>
                  ) : (
                    <p className="text-dark text-remover">.</p>
                  )}
                  <label
                    htmlFor="Isbn"
                    className="form-label text-white  h6 mt-2"
                  >
                    Isbn Number
                  </label>
                  <Field
                    type="text"
                    placeholder="Enter The Isbn Number"
                    name="Isbn"
                    className="form-control w-100"
                  />
                  {errors.Isbn && touched.Isbn ? (
                    <p className="text-white text-remover">{errors.Isbn}</p>
                  ) : (
                    <p className="text-dark text-remover">.</p>
                  )}
                  <label
                    htmlFor="Publish_Date"
                    className="form-label text-white  h6 mt-2"
                  >
                    Publish Date
                  </label>
                  <Field
                    type="date"
                    name="Publish_Date"
                    className="form-control w-100"
                  />
                  {errors.Publish_Date && touched.Publish_Date ? (
                    <p className="text-remover text-white">
                      {errors.Publish_Date}
                    </p>
                  ) : (
                    <p className="text-dark text-remover">.</p>
                  )}
                  <button className="btn btn-info mt-2" type="submit">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-sm-6">
            <img
              src={imgBackground}
              className="img img-fluid mt-4 d-sm-none d-md-block d-sm-block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBook;
