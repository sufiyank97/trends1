import actions from './actions';

const initState = {
  team_id: '',
  structure: {}
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SET_STRUCTURE:
      return {
        ...state,
        structure: action.payload.structure,
        team_id: action.payload.team_id
      };
    default:
      return state;
  }
};

export default reducer;
