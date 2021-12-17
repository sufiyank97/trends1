const actions = {
  SHOW_PRODUCT_TYPE_MODAL: 'SHOW_PRODUCT_TYPE_MODAL',
  HIDE_PRODUCT_TYPE_MODAL: 'HIDE_PRODUCT_TYPE_MODAL',
  showProductTypeModal: () => ({
    type: actions.SHOW_PRODUCT_TYPE_MODAL
  }),
  hideProductTypeModal: () => ({
    type: actions.HIDE_PRODUCT_TYPE_MODAL
  })
};

export default actions;
