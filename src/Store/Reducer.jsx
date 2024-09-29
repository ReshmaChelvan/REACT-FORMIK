export const initialState = [
  {
    id: 0,
    title: 'PHP',
    Author: 'Pooja',
    Isbn: '123213',
    Publish_Date: '1959-05-23',
  },
  {
    id: 1,
    title: 'DOT NET',
    Author: 'Priya',
    Isbn: '123122131233321',
    Publish_Date: '1984-05-20',
  },
];

export const bookReducer = (state, action) => {
  if (action.type === 'createBook') {
    return [...state, action.payLoad];
  } else if (action.type === 'deleteBook') {
    let updatedState = state.filter((filterData) => {
      if (filterData.id !== action.payLoad.id) {
        return filterData;
      }
    });
    state = updatedState;
    return state;
  } else if (action.type === 'editBook') {
    let value = state.map((element) => {
      if (element.id === action.payLoad.id) {
        element = action.payLoad;
        return element;
      } else {
        return element;
      }
    });
    state = value;
    return state;
  }
};

//Author
export const authorInitialState = [
  {
    id: 0,
    author: 'Reshma',
    dob: '2000-06-20',
    bio: 'Good Writer',
  },
  {
    id: 1,
    author: 'SriMathi',
    dob: '2001-04-20',
    bio: 'She Is a Writer',
  },
];

export const authorReducer = (state, action) => {
  if (action.type === 'createAuthor') {
    return [...state, action.payLoad];
  } else if (action.type === 'deleteAuthor') {
    let updatedState = state.filter((filterData) => {
      if (filterData.id !== action.payLoad.id) {
        return filterData;
      }
    });
    state = updatedState;
    return state;
  } else if (action.type === 'editAuthor') {
    let value = state.map((element) => {
      if (element.id === action.payLoad.id) {
        element = action.payLoad;
        return element;
      } else {
        return element;
      }
    });
    state = value;
    return state;
  }
};
