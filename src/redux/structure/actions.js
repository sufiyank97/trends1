const actions = {
  SET_STRUCTURE: 'SET_STRUCTURE',
  setStructure: (structure, team_id) => ({
    type: actions.SET_STRUCTURE,
    payload: {
      structure,
      team_id
    }
  })
};

export default actions;
