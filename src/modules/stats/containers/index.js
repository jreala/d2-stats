import { connect } from 'react-redux';
import Stats from '../components';
import fetchAccount from '../actions/fetchAccount';
import updateInput from '../actions/updateInput';

function mapStateToProps(state) {
    return {
        ...state.Stats
    };
}

const actionCreators = {
    fetchAccount,
    updateInput
};

export default connect(mapStateToProps, actionCreators)(Stats);
