const actions = {
  GET_BRANDS_DATA: 'GET_BRANDS_DATA',
  getBrandsData: data => ({
    type: actions.GET_BRANDS_DATA,
    data
  })
};

export default actions;
