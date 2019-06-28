import * as actionTypes from './actionTypes';

const initialState = {
  data: {
    code: null,
    message: '',
    data: [{
      title: ''
    }]
  },
  isFetching: false,
  error: false
}

export function disease(state=initialState, action) {
  switch(action.type) {
    case actionTypes.FETCH_DISEASES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case actionTypes.FETCH_DISEASES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage,
        error: true,
        data: {
          code: 205,
          message: 'Failed message',
          data: [{
            title: 'No se encontró resultados'
          }]
        }
      };
    case actionTypes.FETCH_DISEASES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        data: action.data
      }
    default:
      return state;
  }
}
