import { GET_DATA } from './actionTypes';

const initialState = {
  data: []
};

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                data: action.data
            };
        default:
            return state;
    }
};
