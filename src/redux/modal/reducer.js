import actions from './actions';

const initState = {
  productType: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SHOW_PRODUCT_TYPE_MODAL:
      return { ...state, productType: true };
    case actions.HIDE_PRODUCT_TYPE_MODAL:
      return { ...state, productType: false };
    default:
      return state;
  }
};

export default reducer;
