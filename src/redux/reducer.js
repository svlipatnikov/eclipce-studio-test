const { SET_DATA } = require('./types');

const initState = {
  valute: {},
};

const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, valute: action.payload };

    default:
      return state;
  }
};

export default mainReducer;
