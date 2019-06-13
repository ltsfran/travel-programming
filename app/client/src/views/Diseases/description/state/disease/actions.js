import * as actionTypes from './actionTypes';
import { serviceDisease } from './services';
import { STATUS_CODE } from './constants';

export function fetchDiseaseRequest() {
  return {
    type: actionTypes.FETCH_DISEASES_REQUEST
  }
}

export function fetchDiseaseFailure(errorMessage) {
  return {
    type: actionTypes.FETCH_DISEASES_FAILURE,
    errorMessage
  }
}

export function fetchDiseaseSuccess(data) {
  return {
    type: actionTypes.FETCH_DISEASES_SUCCESS,
    data
  }
}

export function fetchDisease(params) {
  return async function(dispatch) {
    !!params && dispatch(fetchDiseaseRequest());
    try {
      const data = !!params && await serviceDisease.getData(params.toUpperCase());
      if(data.code === STATUS_CODE.OK) {
        dispatch(fetchDiseaseSuccess(data));
      }
      if(data.code === STATUS_CODE.ERROR) {
        dispatch(fetchDiseaseFailure(data));
      }
    } catch(e) {
      dispatch(fetchDiseaseFailure(e.errorMessage));
    }
  }
}
