import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { authorcontextCreater } from '../../../Store/Context';
import '../../../STYLE/EditAuthor.css';

const EditAuthor = () => {
  const navi = useNavigate();
  let { AuthorReference, authdispatch } = useContext(authorcontextCreater);
  const initialValue = {
    authorName: AuthorReference.author,
    dateOfBirth: AuthorReference.dob,
    bioGraphy: AuthorReference.bio,
  };
  const updateSubmitHandler = (value) => {
    let valuePayload = {
      id: AuthorReference.id,
      author: value.authorName,
      dob: value.dateOfBirth,
      bio: value.bioGraphy,
    };
    authdispatch({ type: 'editAuthor', payLoad: valuePayload });
    navi('/ShowAuthor');
  };
  const validation = yup.object({
    authorName: yup.string().required('Required'),
    dateOfBirth: yup.date().required('Required'),
    bioGraphy: yup.string().required('Required'),
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center h2">Edit Author</h1>
            <Formik
              initialValues={initialValue}
              onSubmit={updateSubmitHandler}
              validationSchema={validation}
            >
              {({ errors, touched }) => (
                <Form>
                  <label className="text-black h6 mt-2 form-label">
                    Author:
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="authorName"
                  />
                  {errors.authorName && touched.authorName ? (
                    <p className="error-message">{errors.authorName}</p>
                  ) : (
                    <p className="error-message text-white">.</p>
                  )}
                  <label className="text-black h6 mt-2 form-label">
                    DateOfBirth:
                  </label>
                  <Field
                    type="date"
                    className="form-control"
                    name="dateOfBirth"
                  />
                  {errors.dateOfBirth && touched.dateOfBirth ? (
                    <p className="error-message">{errors.dateOfBirth}</p>
                  ) : (
                    <p className="error-message text-white">.</p>
                  )}
                  <label className="text-black h6 mt-2 form-label">Bio:</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="bioGraphy"
                  />
                  {errors.bioGraphy && touched.bioGraphy ? (
                    <p className="error-message-last">{errors.bioGraphy}</p>
                  ) : (
                    <p className="error-message-last text-white">.</p>
                  )}
                  <button type="submit" className="btn btn-secondary mt-1">
                    Update
                  </button>
                  <Link
                    to="/ShowAuthor"
                    className="btn btn-secondary ms-2 mt-1"
                  >
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

export default EditAuthor;
