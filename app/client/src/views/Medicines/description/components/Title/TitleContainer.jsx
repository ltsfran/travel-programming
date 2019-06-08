import { connect } from 'react-redux';
import { Title } from '@app/src/components/Title';
import * as selectMedicine from '@app/src/views/Medicines/description/state/medicine/selectors';

function mapStateToProps(state) {
  return {
    text: selectMedicine.getTitle(state)
  }
};

export const TitleContainer = connect(
  mapStateToProps
)(Title);