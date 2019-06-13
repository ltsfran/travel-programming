import { connect } from 'react-redux';
import { Image } from '@app/src/components/Image';
import * as selectMedicine from '@app/src/views/Medicines/description/state/medicine/selectors';

function mapStateToProps(state) {
  return {
    src: selectMedicine.getImage(state)
  }
};

export const ImageContainer = connect(
  mapStateToProps
)(Image);
