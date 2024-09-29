import React from 'react';
import { useContext } from 'react';
import { authorcontextCreater } from '../../Store/Context';
import { Link } from 'react-router-dom';

const ShowAuthor = () => {
  const { authState, authdispatch, setAuthorReference } =
    useContext(authorcontextCreater);
  return (
    <>
      <h5 className="text-center text-primary">AUTHOR DETAILS</h5>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th className="col text-center">AUTHOR</th>
            <th className="col text-center">DateOfBirth</th>
            <th className="col text-center">BioGraphy</th>
            <th className="col text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {authState.map((dataElement, ind) => (
            <tr key={ind}>
              <td className="text-center">{dataElement.author}</td>
              <td className="text-center">{dataElement.dob}</td>
              <td className="text-center">{dataElement.bio}</td>
              <td className="d-flex justify-content-center gap-2">
                <Link
                  to="/editAuthor"
                  onClick={() => setAuthorReference(dataElement)}
                  className="btn btn-info"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    authdispatch({
                      type: 'deleteAuthor',
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

export default ShowAuthor;
