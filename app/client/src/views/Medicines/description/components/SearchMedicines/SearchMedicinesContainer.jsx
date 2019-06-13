import { connect } from 'react-redux';
import { SearchMedicines } from './SearchMedicines';
import { fetchMedicine } from '@app/src/views/Medicines/description/state/medicine/actions';
import * as selectMedicine from '@app/src/views/Medicines/description/state/medicine/selectors';

function mapStateToProps(state) {
  return {
    items: selectMedicine.getItems(state)
  }
};

function mapDispatchToProps(dispatch) {
  return {
    handleChange: (e) => dispatch(fetchMedicine(e.target.value))
  }
};

export const SearchMedicinesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMedicines);
