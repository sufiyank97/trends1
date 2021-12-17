import { getCurrentLanguage } from '../../settings/config';

const actions = {
  SWITCH_LANGUAGE: 'SWITCH_LANGUAGE',
  switchLanguage: clickedLanguage => ({
    type: actions.SWITCH_LANGUAGE,
    language: getCurrentLanguage(clickedLanguage)
  })
};

export default actions;
