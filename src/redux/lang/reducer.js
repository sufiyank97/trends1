import { getCurrentLanguage, languageConfig } from '../../settings/config';
import actions from './actions';

const initState = {
  language: getCurrentLanguage(languageConfig.defaultLanguage || 'english')
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SWITCH_LANGUAGE:
      return { ...state, language: action.language };
    default:
      return state;
  }
};

export default reducer;
