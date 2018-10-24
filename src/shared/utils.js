// @flow

// const API = 'https://ema-backend-dev.appspot.com/_ah/api/nina/';
// const API = 'http://localhost:8080/api/';
const API = 'https://social-music-api-rjnwpizwca.now.sh/api/';

export const RESTResolve = (restEndpoint: string) => API + restEndpoint;
