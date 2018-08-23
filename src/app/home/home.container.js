// @flow
import {compose} from "ramda";
import {connect} from 'react-redux';

import Home from './home.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({});


export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
