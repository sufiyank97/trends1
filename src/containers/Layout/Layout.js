/*
import React, { useContext, Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";

import { StructureContext } from '../../App';
import Sidebar from "./../../components/UI/Sidebar/Sidebar";
import Header from "./../../components/UI/Header/Header";
import AppLocale from "../../languageProvider/index";
import { theme } from "../../settings/themes/defaultTheme";
import { Wrapper } from "./Layout.style";
import { layoutConfig, sidebarConfig } from "../../settings/config";
import "./global.css";

const Layout = ({ locale }) => {
  const structure = useContext(StructureContext);
  const currentAppLocale = AppLocale[locale];
  const layout = layoutConfig.map((item, index) => (
    <Route
      path={item.routePath}
      exact
      render={() => (
        <Wrapper>
          <Sidebar config={sidebarConfig} />
          <div className="content-wrapper">
            <Header />
            <Suspense fallback={<div>Loading...</div>}>{item.content}</Suspense>
          </div>
        </Wrapper>
      )}
    />
  ));

  console.log(structure);

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ThemeProvider theme={theme}>
        <Switch>
          {layout}
          <Redirect from="*" to="/dashboard" />
        </Switch>
      </ThemeProvider>
    </IntlProvider>
  );
};

const mapStateToProps = state => ({
  locale: state.lang.language.locale
});

export default withRouter(connect(mapStateToProps)(Layout));
*/
