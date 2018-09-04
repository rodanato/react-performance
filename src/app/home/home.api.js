// @flow
import {RESTResolve} from "../../shared/utils";

const REST = {
  worlds: 'artists'
};

export const getWorlds = () => {
  return fetch(RESTResolve(`${REST.worlds}`), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};