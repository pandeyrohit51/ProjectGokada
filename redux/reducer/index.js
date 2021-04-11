import {
  FETCH_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from '../constants';

const initialState = {
  isLoading: false,
  usersData: [],
  isError: false,
};

export default FetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        usersData: action.data,
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        usersData: [],
      };
  }
};
