import { GET_DATA } from './actionTypes';

const initialState = {
  walks: []
};

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                walks: action.data
            };
        default:
            return state;
    }
};
