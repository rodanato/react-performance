// @flow

import {compose}         from "ramda";
import {connect}         from 'react-redux';

import Home      from './home.component';
import * as ActionsNames from "../reservations-actions.constants";

const mapStateToProps = (state) => (  {
});

const mapDispatchToProps = dispatch => ({
});


export default compose(SAVE_RESERVATION_LIST
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
