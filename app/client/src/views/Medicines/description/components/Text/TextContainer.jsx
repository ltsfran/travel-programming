import { connect } from 'react-redux';
import { Text } from './Text';
import * as selectMedicine from '@app/src/views/Medicines/description/state/medicine/selectors';

function mapStateToProps(state) {
  return {
    text: selectMedicine.getDescription(state)
  }
};

export const TextContainer = connect(
  mapStateToProps
)(Text);