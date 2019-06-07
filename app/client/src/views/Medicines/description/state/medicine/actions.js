import * as actionTypes from './actionTypes';
import { serviceMedicine } from './services';

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

export function fetchMedicine() {
  return async function(dispatch) {
    dispatch(fetchMedicineRequest());

    try {
      const data = await serviceMedicine.getData();
      dispatch(fetchMedicineSuccess(data));
    } catch(e) {
      dispatch(fetchMedicineFailure(e.errorMessage));
    }
  }
}