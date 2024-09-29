import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import contextCreater from '../../Store/Context';

const ShowBook = () => {
  const { state, dispatch, setreference } = useContext(contextCreater);
  return (
    <>
      <h5 className="text-center text-primary">BOOK DETAILS</h5>
      <table className="table table-hover table-dark bg-dark">
        <thead>
          <tr>
            <th className="col text-center">TITLE</th>
            <th className="col text-center">AUTHOR</th>
            <th className="col text-center">ISBN NUMBER</th>
            <th className="col text-center">PUBLISH DATE</th>
            <th className="col text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((dataElement, ind) => (
            <tr key={ind}>
              <td className="text-center">{dataElement.title}</td>
              <td className="text-center">{dataElement.Author}</td>
              <td className="text-center">{dataElement.Isbn}</td>
              <td className="text-center">{dataElement.Publish_Date}</td>
              <td className="d-flex gap-1 justify-content-center">
                <Link
                  to="/editBook"
                  className="btn btn-primary"
                  onClick={() => setreference(dataElement)}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    dispatch({
                      type: 'deleteBook',
                      payLoad: { id: dataElement.id },
                    })
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowBook;
