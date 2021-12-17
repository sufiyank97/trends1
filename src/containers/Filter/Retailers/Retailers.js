import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import IntlMessages from '../../../components/utility/IntlMessages';
import * as Comps from './Retailers.style';
import refreshIcon from '../../../assets/images/refresh-icon.svg';
import submitIcon from '../../../assets/images/correct-symbol.svg';

class Retailers extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Comps.Wrapper>
        <Comps.Headbar>
          <Comps.CategoryFilter>
            <form>
              <input type="text" placeholder="Filter for a category" />
              <Button
                type="submit"
                variant="outlined"
                classes={{ root: classes.button }}
              >
                <img src={submitIcon} alt="Submit icon" />
                <IntlMessages id="trends.retailers.setFilter" />
              </Button>
              <Button
                type="reset"
                variant="outlined"
                classes={{ root: classes.button }}
              >
                <img src={refreshIcon} alt="Refresh icon" />
                <IntlMessages id="trends.retailers.reset" />
              </Button>
            </form>
          </Comps.CategoryFilter>
        </Comps.Headbar>
        <Comps.ContentWrapper>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Comps.ContentWrapper>
      </Comps.Wrapper>
    );
  }
}

export default withStyles(Comps.styles)(Retailers);
