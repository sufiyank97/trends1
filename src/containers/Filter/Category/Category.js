import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Modal from '@material-ui/core/Modal';
import * as Comps from './Category.style';
import IntlMessages from '../../../components/utility/IntlMessages';
import actions from '../../../redux/modal/actions';
import refreshIcon from '../../../assets/images/refresh-icon.svg';

class Category extends Component {
  state = {
    filterValue: '',
    userEmailValue: '',
    countStyle: false,
  };

  inputChangeHandler = (value, id) => {
    this.setState({ [id]: value });
  };

  inputClearHandler = (id) => {
    this.setState({ [id]: '' });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Comps.Wrapper>
          <Comps.Topbar>
            <Comps.StyledInput
              id="filterValue"
              value={this.state.filterValue}
              onChange={event => this.inputChangeHandler(event.target.value, event.target.id)
              }
            />
            <Comps.StyledButton
              id="filterValue"
              icon={refreshIcon}
              onClick={event => this.inputClearHandler(event.target.id)}
            >
              <div className="icon" />
              <IntlMessages id="trends.category.reset" />
            </Comps.StyledButton>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.countStyle}
                  onChange={() => this.setState({ countStyle: !this.state.countStyle })
                  }
                  disableRipple
                  classes={{
                    root: classes.checkbox,
                    checked: classes.checked,
                  }}
                />
              }
              label={<IntlMessages id="trends.category.style" />}
              classes={{ root: classes.label }}
            />
            <Comps.StyledButton onClick={() => this.props.onShowModal()}>
              <IntlMessages id="trends.category.productType" />
            </Comps.StyledButton>
          </Comps.Topbar>
        </Comps.Wrapper>
        {/* MODAL */}
        <Modal
          classes={{ root: classes.backdrop }}
          open={this.props.modalOpen}
          onClose={() => this.props.onHideModal()}
        >
          <Comps.ModalContent>
            <Comps.ModalHeader>
              <IntlMessages id="trends.category.support" />
            </Comps.ModalHeader>
            <div className="from">
              <IntlMessages id="trends.category.from" />
              <input
                id="userEmailValue"
                value={this.state.userEmailValue}
                onChange={event => this.inputChangeHandler(event.target.value, event.target.id)
                }
              />
            </div>
            <div className="to">
              <IntlMessages id="trends.category.to" />
              <input value="support@ts.com" readOnly />
            </div>
            <div className="from">
              <IntlMessages id="trends.category.from" />
              <input
                id="productRequestValue"
                value={this.state.productRequestValue}
                onChange={event => this.inputChangeHandler(event.target.value, event.target.id)
                }
              />
            </div>
          </Comps.ModalContent>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  modalOpen: state.modal.productType,
});

const mapDispatchToProps = dispatch => ({
  onShowModal: () => dispatch(actions.showProductTypeModal()),
  onHideModal: () => dispatch(actions.hideProductTypeModal()),
});

export default withStyles(Comps.styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Category),
);
