import { connect } from 'react-redux';
import StatCard from '../components/StatCard';
import search from '../actions/searchAccount';

function mapStateToProps(state) {
    return {
        ...state.Stats,
        poopy: 'butt'
    };
}

const actionCreators = {
    search
};

export default connect(mapStateToProps, actionCreators)(StatCard);
