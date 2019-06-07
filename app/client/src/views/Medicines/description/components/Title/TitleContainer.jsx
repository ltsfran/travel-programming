import { connect } from 'react-redux';
import { Title } from './Title';
import * as selectMedicine from '@app/src/views/Medicines/description/state/medicine/selectors';
import { fetchMedicine } from '@app/src/views/Medicines/description/state/medicine/actions';

function mapStateToProps(state) {
  return {
    title: selectMedicine.getTitle(state)
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(fetchMedicine())
  }
}

export const TitleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);