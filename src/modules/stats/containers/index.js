import { connect } from 'react-redux';
import Stats from '../components';
import fetchAccount from '../actions/fetchAccount';
import updateInput from '../actions/updateInput';
import fetchBegin from '../actions/fetchBegin';
import fetchDone from '../actions/fetchDone';
import fetchProfile from '../actions/fetchProfile';
import fetchAllData from '../actions/fetchAllData';
import fetchCharacter from '../actions/fetchCharacter';

const mapStateToProps = state => ({
    ...state.Stats
});

const actionCreators = {
    fetchAccount,
    updateInput,
    fetchBegin,
    fetchDone,
    fetchProfile,
    fetchAllData,
    fetchCharacter
};

export default connect(mapStateToProps, actionCreators)(Stats);
