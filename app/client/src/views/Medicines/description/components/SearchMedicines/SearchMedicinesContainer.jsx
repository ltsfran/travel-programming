import { connect } from 'react-redux';
import { SearchMedicines } from './SearchMedicines';
import { fetchMedicine } from '@app/src/views/Medicines/description/state/medicine/actions';

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => dispatch(fetchMedicine())
  }
};

export const SearchMedicinesContainer = connect(
  null,
  mapDispatchToProps
)(SearchMedicines);