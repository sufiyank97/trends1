import React from 'react';

import ColumnChart from '../UI/Charts/ColumnChart/ColumnChart';
import SingleTable from '../UI/Tables/SingleTable/SingleTable';
import BubbleChart from '../UI/Charts/BubbleChart/BubbleChart';
import Posts from '../Posts/Posts';
import PieTable from '../UI/Tables/PieTable/PieTable';
import Dashboard from '../../containers/Dashboard/Dashboard';

// TODO: Remove temporary data
import {
  fanCountTableDataConfig,
  fanCountTableColumnsConfig,
  insightsTableDataConfig,
  insightsTableColumnsConfig,
  postsCf,
  brandsTableDataConfig,
  brandsTableColumnsConfig,
  fullPriceTableDataConfig,
  fullPriceTableColumnsConfig
} from '../../settings/config';

const contentTypes = {
  columnChartWithTable: 'columnChartWithTable',
  bubbleChartWithTable: 'bubbleChartWithTable',
  posts: 'posts',
  table: 'table',
  pieTable: 'pieTable',
  dashboard: 'dashboard'
};

const getContent = id => {
  switch (id) {
    case contentTypes.columnChartWithTable:
      return (
        <>
          <ColumnChart id="fan-count" data={fanCountTableDataConfig} />
          <SingleTable
            data={fanCountTableDataConfig}
            columns={fanCountTableColumnsConfig}
          />
        </>
      );
    case contentTypes.bubbleChartWithTable:
      return (
        <>
          <BubbleChart id="social-buzz" data={insightsTableDataConfig} />
          <SingleTable
            data={insightsTableDataConfig}
            columns={insightsTableColumnsConfig}
          />
        </>
      );
    case contentTypes.posts:
      return <Posts posts={postsCf} />;
    case contentTypes.table:
      return (
        <SingleTable
          data={brandsTableDataConfig}
          columns={brandsTableColumnsConfig}
        />
      );
    case contentTypes.pieTable:
      return (
        <PieTable
          data={fullPriceTableDataConfig}
          columns={fullPriceTableColumnsConfig}
        />
      );
    case contentTypes.dashboard:
      return <Dashboard />;
    default:
      return <div>x</div>;
  }
};

export default getContent;
