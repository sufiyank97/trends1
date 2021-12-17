import React from 'react';
import SingleTable from '../SingleTable/SingleTable';
import { Wrapper } from './PieTable.style';
import PieChart from '../../Charts/PieChart/PieChart';

const pieTable = props => (
  <Wrapper>
    <PieChart data={props.data} />
    <SingleTable
      showPaginationBottom={false}
      defaultPageSize={props.data.length}
      data={props.data}
      columns={props.columns}
    />
  </Wrapper>
);

export default pieTable;
