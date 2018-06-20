import { connect } from 'react-redux';
import Button from '../components/Button';
import { dropLineItem } from '../ducks/cart';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(dropLineItem(ownProps.product.id))
});

const DropButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default DropButton;
