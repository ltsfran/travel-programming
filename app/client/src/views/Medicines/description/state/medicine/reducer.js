import * as actionTypes from './actionTypes';

const initialState = {
  data: {
    code: null,
    message: '',
    data: {
      title: '',
      description: ''
    }
  },
  isFetching: false
}

export function medicine(state=initialState, action) {
  switch(action.type) {
    case actionTypes.FETCH_MEDICINES_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.FETCH_MEDICINES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case actionTypes.FETCH_MEDICINES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    default: 
      return state;
  }
}