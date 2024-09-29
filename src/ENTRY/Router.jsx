import React, { useReducer, useState } from 'react';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import Home from '../COMPONENT/Home';
import ShowAuthor from '../COMPONENT/exisitingDetails/ShowAuthor';
import ShowBook from '../COMPONENT/exisitingDetails/ShowBook';
import CreateBook from '../COMPONENT/createDetails/CreateBook';
import CreateAuthor from '../COMPONENT/createDetails/CreateAuthor';
import contextCreater, { authorcontextCreater } from '../Store/Context';
import {
  bookReducer,
  initialState,
  authorReducer,
  authorInitialState,
} from '../Store/Reducer';
import EditBook from '../COMPONENT/exisitingDetails/edit/EditBook';
import EditAuthor from '../COMPONENT/exisitingDetails/Edit/EditAuthor';

const Router = () => {
  //useReducer For Book
  const [state, dispatch] = useReducer(bookReducer, initialState);
  //useReducer For Author
  const [authState, authdispatch] = useReducer(
    authorReducer,
    authorInitialState
  );
  const [reference, setreference] = useState({});
  const [AuthorReference, setAuthorReference] = useState({});
  return (
    <contextCreater.Provider
      value={{ state, dispatch, setreference, reference }}
    >
      <authorcontextCreater.Provider
        value={{ authState, authdispatch, AuthorReference, setAuthorReference }}
      >
        <Routers>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<ShowBook />} />
              <Route path="/ShowAuthor" element={<ShowAuthor />} />
            </Route>
            <Route path="/createBook" element={<CreateBook />} />
            <Route path="/createAuthor" element={<CreateAuthor />} />
            <Route path="/editBook" element={<EditBook />} />
            <Route path="/editAuthor" element={<EditAuthor />} />
          </Routes>
        </Routers>
      </authorcontextCreater.Provider>
    </contextCreater.Provider>
  );
};

export default Router;
