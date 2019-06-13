import * as actionTypes from './actionTypes';
import { serviceMedicine } from './services';
import { STATUS_CODE } from './constants';

export function fetchMedicineRequest() {
  return {
    type: actionTypes.FETCH_MEDICINES_REQUEST
  }
}

export function fetchMedicineFailure(errorMessage) {
  return {
    type: actionTypes.FETCH_MEDICINES_FAILURE,
    errorMessage
  }
}

export function fetchMedicineSuccess(data) {
  return {
    type: actionTypes.FETCH_MEDICINES_SUCCESS,
    data
  }
}

export function fetchMedicine(params) {
  return async function(dispatch) {
    !!params && dispatch(fetchMedicineRequest());
    try {
      const data = !!params && await serviceMedicine.getData(params.toUpperCase());
      if(data.code === STATUS_CODE.OK) {
        dispatch(fetchMedicineSuccess(data));
      }
      if(data.code === STATUS_CODE.ERROR) {
        dispatch(fetchMedicineFailure(data));
      }
    } catch(e) {
      dispatch(fetchMedicineFailure(e.errorMessage));
    }
  }
}
