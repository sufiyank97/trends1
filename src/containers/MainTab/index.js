import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

import Header from 'components/UI/Header/Header';
import AppLocale from 'languageProvider';
import { theme } from 'settings/themes/defaultTheme';
import { Wrapper } from './style';
import { sidebarConfig } from '../../settings/config';
import Sidebar from 'components/Sidebar/Sidebar';
import SubTab from '../SubTab';
import getContent from 'components/utility/getContent';
import './global.css';

const Layout = ({ locale, structure }) => {
  const currentAppLocale = AppLocale[locale];
  const layout = structure.tabs
    ? Object.keys(structure.tabs).map(tabKey => (
        <Route
          key={structure.tabs[tabKey].id}
          path={`/${structure.tabs[tabKey].id}`}
          exact
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              {structure.tabs[tabKey].subTabs ? (
                <SubTab structure={structure.tabs[tabKey].subTabs} />
              ) : (
                getContent(
                  structure.tabs[tabKey]
                    ? structure.tabs[tabKey].contentId
                    : 'empty'
                )
              )}
            </Suspense>
          )}
        />
      ))
    : null;

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Sidebar structure={structure.tabs} tempConfig={sidebarConfig} />
          <div className="content-wrapper">
            <Header />
            <Switch>
              {layout}
              <Redirect from="*" to="/dashboard" />
            </Switch>
          </div>
        </Wrapper>
      </ThemeProvider>
    </IntlProvider>
  );
};

const mapStateToProps = state => ({
  locale: state.lang.language.locale,
  structure: state.structure.structure
});

export default withRouter(connect(mapStateToProps)(Layout));
