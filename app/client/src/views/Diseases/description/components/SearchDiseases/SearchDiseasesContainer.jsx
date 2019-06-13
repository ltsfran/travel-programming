import { connect } from 'react-redux';
import { SearchDiseases } from './SearchDiseases';
import { fetchDisease } from '@app/src/views/Diseases/description/state/disease/actions';
import * as selectDisease from '@app/src/views/Diseases/description/state/disease/selectors';

function mapStateToProps(state) {
  return {
    items: selectDisease.getItems(state)
  }
};

function mapDispatchToProps(dispatch) {
  return {
    handleChange: (e) => dispatch(fetchDisease(e.target.value))
  }
};

export const SearchDiseasesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchDiseases);
