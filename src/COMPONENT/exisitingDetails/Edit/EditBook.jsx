import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useContext } from 'react';
import * as yup from 'yup';
import contextCreater from '../../../Store/Context';
import { Link, useNavigate } from 'react-router-dom';
import '../../../STYLE/EditBook.css';

const EditBook = () => {
  let navi = useNavigate();
  const { reference, dispatch } = useContext(contextCreater);
  let initialValue = {
    id: reference.id,
    updatetitle: reference.title,
    updateAuthor: reference.Author,
    updateIsbn: reference.Isbn,
    updatePublish_Date: reference.Publish_Date,
  };

  let submitHandler = (value) => {
    dispatch({
      type: 'editBook',
      payLoad: {
        id: reference.id,
        title: value.updatetitle,
        Author: value.updateAuthor,
        Isbn: value.updateIsbn,
        Publish_Date: value.updatePublish_Date,
      },
    });
    navi('/');
  };

  const validationSchema = yup.object({
    updatetitle: yup.string().required('Required'),
    updateAuthor: yup.string().required('Required'),
    updateIsbn: yup.number().required('Required'),
    updatePublish_Date: yup.date().required('Required'),
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center">Edit Book</h1>
            <Formik
              initialValues={initialValue}
              validationSchema={validationSchema}
              onSubmit={submitHandler}
            >
              {({ errors, touched }) => (
                <Form>
                  <label className="form-label h6 mt-2">Title</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="updatetitle"
                  />
                  {errors.updatetitle && touched.updatetitle ? (
                    <p className="text-error">{errors.updatetitle}</p>
                  ) : (
                    <p className="text-error text-white">.</p>
                  )}
                  <label className="form-label h6 mt-2">Author</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="updateAuthor"
                  />
                  {errors.updateAuthor && touched.updateAuthor ? (
                    <p className="text-error">{errors.updateAuthor}</p>
                  ) : (
                    <p className="text-error text-white">.</p>
                  )}
                  <label className="form-label h6 mt-2">Isbn</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="updateIsbn"
                  />
                  {errors.updateIsbn && touched.updateIsbn ? (
                    <p className="text-error">{errors.updateIsbn}</p>
                  ) : (
                    <p className="text-error text-white">.</p>
                  )}
                  <label className="form-label h6 mt-2">DateOfPublish</label>
                  <Field
                    type="date"
                    className="form-control"
                    name="updatePublish_Date"
                  />
                  {errors.updatePublish_Date && touched.updatePublish_Date ? (
                    <p className="text-error">{errors.updatePublish_Date}</p>
                  ) : (
                    <p className="text-error text-white">.</p>
                  )}
                  <button type="submit" className="btn mt-2 btn-secondary">
                    Update
                  </button>
                  <Link to="/" className="btn btn-dark mt-2 ms-1">
                    Cancel
                  </Link>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBook;
