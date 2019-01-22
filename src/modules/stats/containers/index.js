import { connect } from 'react-redux';
import Stats from '../components';
import fetchAccount from '../actions/fetchAccount';
import updateInput from '../actions/updateInput';
import fetchBegin from '../actions/fetchBegin';
import fetchDone from '../actions/fetchDone';

const mapStateToProps = state => ({
    ...state.Stats
});

const actionCreators = {
    fetchAccount,
    updateInput,
    fetchBegin,
    fetchDone
};

export default connect(mapStateToProps, actionCreators)(Stats);
