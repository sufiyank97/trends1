const actions = {
  ADD_NEW_ITEM_REQUEST: 'ADD_NEW_ITEM_REQUEST',
  ADD_NEW_ITEM: 'ADD_NEW_ITEM',
  addNewItemRequest: () => ({
    type: actions.ADD_NEW_ITEM_REQUEST
  }),
  addNewItem: () => ({
    type: actions.ADD_NEW_ITEM
  })
};

export default actions;
