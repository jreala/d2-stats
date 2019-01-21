import { connect } from 'react-redux';
import StatCard from '../components/StatCard';
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

export default connect(mapStateToProps, actionCreators)(StatCard);
