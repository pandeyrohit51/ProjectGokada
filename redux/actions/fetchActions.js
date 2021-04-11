import {
  FETCH_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from './../constants';

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch({ type: FETCHING_DATA_SUCCESS, data: json }))
      .catch((err) => dispatch({ type: FETCHING_DATA_FAILURE }));
  }, 1000);
};
