import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import Modal from '@material-ui/core/Modal';
import IntlMessages from '../../../../components/utility/IntlMessages';
import * as Comps from './Modal.style';
import closeSymbol from '../../../../assets/images/delete.svg';

class DashboardModal extends Component {
  state = {
    alertEl: null,
    alertModalEmailValue: '',
    alertModalEmailOptionsValue: (
      <IntlMessages id="dashboard.modal.alert.daily" />
    ),
    alertModalEmailOptionsSelected: 1,
    currentShareTabIndex: 0,
  };

  /* EVENT HANDLERS */

  handleAlertClick = (event) => {
    this.setState({ alertEl: event.currentTarget });
  };

  handleAlertEmptyClose = () => {
    this.setState({ alertEl: null });
  };

  handleCloseEmailOptions = (item, index) => {
    this.setState({
      alertEl: null,
      alertModalEmailOptionsValue: item.name,
      alertModalEmailOptionsSelected: index,
    });
  };

  switchShareTabsHandler = (index) => {
    this.setState({ currentShareTabIndex: index });
  };

  render() {
    const { alertEl } = this.state;
    const { classes, modalType } = this.props;
    let modal = null;

    const shareTabsContent = this.props.folderShareModalTabs.map(
      (item, index) => {
        if (index === this.state.currentShareTabIndex) {
          return <Comps.StyledTabPanel>{item.content}</Comps.StyledTabPanel>;
        }
        return null;
      },
    );

    switch (modalType) {
      case 'edit':
        modal = (
          <Modal
            classes={{ root: classes.backdrop }}
            open={this.props.modalOpen}
            onClose={this.props.toggleModal}
          >
            <Comps.ModalContent>
              <Comps.ModalHeader>
                <h3>
                  <IntlMessages id="dashboard.modal.alert.header" />
                </h3>
                <button onClick={this.props.toggleModal}>
                  <img src={closeSymbol} alt="Close icon" />
                </button>
              </Comps.ModalHeader>
              <Comps.ModalCentralWrapper>
                <Comps.ModalInputWrapper>
                  <p>
                    <IntlMessages id="dashboard.modal.alert.email" />
                  </p>
                  <input
                    value={this.state.alertModalEmailValue}
                    placeholder="Enter your email..."
                    type="email"
                  />
                </Comps.ModalInputWrapper>
                <Comps.EmailOptionsWrapper>
                  <p>
                    <IntlMessages id="dashboard.modal.alert.howOften" />
                  </p>
                  <Comps.EmailOptions
                    aria-owns={alertEl ? 'email-options' : null}
                    aria-haspopup="true"
                    onClick={this.handleAlertClick}
                  >
                    <p>{this.state.alertModalEmailOptionsValue}</p>
                  </Comps.EmailOptions>
                </Comps.EmailOptionsWrapper>
                <Menu
                  id="email-options"
                  classes={{ paper: classes.menu }}
                  anchorEl={alertEl}
                  open={Boolean(alertEl)}
                  onClose={this.handleAlertEmptyClose}
                >
                  {this.props.folderAlertEmailOptions.map((item, index) => (
                    <Comps.StyledMenuItem
                      key={index + Math.floor(Math.random() * 1000000 + 1)}
                      onClick={() => this.handleCloseEmailOptions(item, index)}
                      disableRipple
                    >
                      <img
                        style={
                          this.state.alertModalEmailOptionsSelected !== index
                            ? { opacity: '0' }
                            : null
                        }
                        src={item.logo}
                        alt="Option logo"
                      />
                      <p>{item.name}</p>
                    </Comps.StyledMenuItem>
                  ))}
                </Menu>
              </Comps.ModalCentralWrapper>
              <Comps.ModalFooter>
                <button onClick={this.props.toggleModal}>
                  <IntlMessages id="dashboard.modal.alert.saveButton" />
                </button>
                <button onClick={this.props.toggleModal}>
                  <IntlMessages id="dashboard.modal.alert.cancelButton" />
                </button>
              </Comps.ModalFooter>
            </Comps.ModalContent>
          </Modal>
        );
        break;
      case 'share':
        modal = (
          <Modal
            classes={{ root: classes.backdrop }}
            open={this.props.modalOpen}
            onClose={this.props.toggleModal}
          >
            <Comps.ModalContent>
              <Comps.ModalHeader>
                <h3>
                  <IntlMessages id="dashboard.modal.share.header" />
                </h3>
                <button onClick={this.props.toggleModal}>
                  <img src={closeSymbol} alt="Close icon" />
                </button>
              </Comps.ModalHeader>
              <Comps.ModalCentralWrapper>
                <Comps.StyledTabs>
                  <div>
                    {this.props.folderShareModalTabs.map((item, index) => (
                      <div
                        key={index + Math.floor(Math.random() * 1000000 + 1)}
                        display={
                          index !== this.state.currentTabIndex ? 'none' : null
                        }
                        onClick={() => this.switchTabsHandler(index)}
                      >
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </div>
                  {shareTabsContent}
                </Comps.StyledTabs>
              </Comps.ModalCentralWrapper>
              <Comps.ModalFooter>
                <button onClick={this.props.toggleModal}>
                  <IntlMessages id="dashboard.modal.alert.saveButton" />
                </button>
                <button onClick={this.props.toggleModal}>
                  <IntlMessages id="dashboard.modal.alert.cancelButton" />
                </button>
              </Comps.ModalFooter>
            </Comps.ModalContent>
          </Modal>
        );
        break;
      case 'alert':
        modal = (
          <Modal
            classes={{ root: classes.backdrop }}
            open={this.props.modalOpen}
            onClose={this.props.toggleModal}
          >
            <Comps.ModalContent>
              <Comps.ModalHeader>
                <h3>
                  <IntlMessages id="dashboard.modal.alert.header" />
                </h3>
                <button onClick={this.props.toggleModal}>
                  <img src={closeSymbol} alt="Close icon" />
                </button>
              </Comps.ModalHeader>
              <Comps.ModalCentralWrapper>
                <Comps.ModalInputWrapper>
                  <p>
                    <IntlMessages id="dashboard.modal.alert.email" />
                  </p>
                  <input
                    value={this.state.alertModalEmailValue}
                    placeholder="Enter your email..."
                    type="email"
                  />
                </Comps.ModalInputWrapper>
                <Comps.EmailOptionsWrapper>
                  <p>
                    <IntlMessages id="dashboard.modal.alert.howOften" />
                  </p>
                  <Comps.EmailOptions
                    aria-owns={alertEl ? 'email-options' : null}
                    aria-haspopup="true"
                    onClick={this.handleAlertClick}
                  >
                    <p>{this.state.alertModalEmailOptionsValue}</p>
                  </Comps.EmailOptions>
                </Comps.EmailOptionsWrapper>
                <Menu
                  id="email-options"
                  classes={{ paper: classes.menu }}
                  anchorEl={alertEl}
                  open={Boolean(alertEl)}
                  onClose={this.handleAlertEmptyClose}
                >
                  {this.props.folderAlertEmailOptions.map((item, index) => (
                    <Comps.StyledMenuItem
                      key={index + Math.floor(Math.random() * 1000000 + 1)}
                      onClick={() => this.handleCloseEmailOptions(item, index)}
                      disableRipple
                    >
                      <img
                        style={
                          this.state.alertModalEmailOptionsSelected !== index
                            ? { opacity: '0' }
                            : null
                        }
                        src={item.logo}
                        alt="Option logo"
                      />
                      <p>{item.name}</p>
                    </Comps.StyledMenuItem>
                  ))}
                </Menu>
              </Comps.ModalCentralWrapper>
              <Comps.ModalFooter>
                <button onClick={this.props.toggleModal}>
                  <IntlMessages id="dashboard.modal.alert.saveButton" />
                </button>
                <button onClick={() => this.props.toggleModal()}>
                  <IntlMessages id="dashboard.modal.alert.cancelButton" />
                </button>
              </Comps.ModalFooter>
            </Comps.ModalContent>
          </Modal>
        );
        break;
      case 'delete':
        modal = null;
        break;
      default:
        modal = null;
    }

    return modal;
  }
}

export default withStyles(Comps.styles)(DashboardModal);
