import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import actions from '../../redux/lang/actions';
import * as configs from '../../settings/config';
import * as Comps from './LanguageSwitcher.style';

const Highcharts = require('highcharts');

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        '&::after': {
          display: 'none',
        },
        '&::before': {
          display: 'none',
        },
      },
    },
    MuiSelect: {
      select: {
        paddingRight: '0',
      },
      icon: {
        display: 'none',
      },
    },
  },
});

class LanguageSwitcher extends Component {
  state = {
    lang: '',
  };

  componentDidMount() {
    this.setState({ lang: this.props.language.languageId });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Comps.Wrapper className="language-switcher">
          <Select value={this.state.lang}>
            {configs.languageConfig.options.map((option) => {
              const { languageId, icon } = option;
              return (
                <MenuItem value={languageId}>
                  <Comps.Button
                    type="button"
                    disabled={this.props.language.languageId === languageId}
                    key={languageId}
                    onClick={() => {
                      this.props.onSwitchLanguage(languageId);
                      Highcharts.setOptions(option.changeHighchartsLocale);
                    }}
                  >
                    <img src={process.env.PUBLIC_URL + icon} alt="flag" />
                  </Comps.Button>
                </MenuItem>
              );
            })}
          </Select>
        </Comps.Wrapper>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  language: state.lang.language,
});

const mapDispatchToProps = dispatch => ({
  onSwitchLanguage: clickedLanguage => dispatch(actions.switchLanguage(clickedLanguage)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageSwitcher);
