// @flow
import {compose} from "ramda";
import {connect} from 'react-redux';

import Home from './home.component';
import * as ActionsNames       from "./home.constants";

const mapStateToProps = (state: any) => ({
  worldList: state.homeState.worldList
});

const mapDispatchToProps = dispatch => ({
  applyWorldList: (worldList) => dispatch({type: ActionsNames.WORLDS_APPLY_LIST, worldList}),
});


export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
