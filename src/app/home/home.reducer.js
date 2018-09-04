// @flow
import * as Actions            from './home.actions';
import * as ActionsNames       from "./home.constants";
import {HOME_INITIAL_STATE}    from "./home.state";
import {HomeAction, HomeState} from "./home.types";


const homeReducer = (state: HomeState = HOME_INITIAL_STATE, action: HomeAction) => {
  switch (action.type) {
    case ActionsNames.WORLDS_APPLY_LIST: {
      return Actions.applyWorldList(state, action);
    }
    default :
      return state;
  }
};

export default homeReducer;
