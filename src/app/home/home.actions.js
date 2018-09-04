// @flow
import {HomeState, HomeAction} from './home.types';

export const applyWorldList = (state: HomeState, action: HomeAction) => ({
  ...state,
  worldList: action.worldList
});
