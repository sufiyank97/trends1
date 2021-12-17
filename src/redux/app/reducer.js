import actions from './actions';

const initState = {
  brandsData: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_BRANDS_DATA:
      return {
        ...state,
        brandsData: action.data
      };
    default:
      return state;
  }
};

export default reducer;
