import { connect } from 'react-redux';
import Link from '../components/Link';
import { setView } from '../ducks/views';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setView(ownProps.view, ownProps.itemId))
});

const StateLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default StateLink;
