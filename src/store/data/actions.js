import axios from 'axios';

import { GET_DATA } from './actionTypes';
import { apiUrl } from 'config.js';

export function getData(data) {
    return {
        type: GET_DATA,
        data,
    }
}

export function fetchData() {
    return dispatch => {
        axios
          .get(`${apiUrl}/walking`)
          .then(response => {
              if (response.status !== 200) {
                  throw Error(response.statusText);
              }
              return response;
          })
          .then(response => {
            dispatch(getData(response.data))
          })
    };
}
