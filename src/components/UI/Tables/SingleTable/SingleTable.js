import React, { Component } from 'react';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import { StyledReactTable } from './SingleTable.style';

class SingleTable extends Component {
  state = {
    tableInfo: []
  };

  render() {
    return (
      <StyledReactTable
        getTdProps={() => ({
          localeId: this.props.language.localeId
        })}
        showPaginationBottom={false}
        resizable={false}
        defaultPageSize={this.props.data.length}
        data={this.props.data}
        columns={this.props.columns}
      />
    );
  }
}

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps)(SingleTable);
