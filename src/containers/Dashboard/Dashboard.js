import React, { Component } from 'react';
import { WidthProvider } from 'react-grid-layout';
import * as Comps from './Dashboard.style';
import Brands from '../../components/Widgets/Brands/Brands';
import { brandsConfig } from '../../settings/config';

const ResponsiveGridLayout = WidthProvider(Comps.Wrapper);

class Dashboard extends Component {
  render() {
    return (
      <div style={{ height: '81%', width: '100%' }}>
        Temporary placeholder
        {/*<div style={{ width: '100%', padding: '0 0 20px 0', overflow: 'auto' }}>
          <ResponsiveGridLayout
            className="layout"
            breakpoints={{ lg: 1200, md: 996 }}
            cols={{ lg: 30, md: 15 }}
            rowHeight={20}
            compactType={null}
          >
            <Comps.GridItem
              key="a"
              data-grid={{
                // A string corresponding to the component key
                i: 'a',

                // These are all in grid units, not pixels
                x: 0,
                y: 0,
                w: 30,
                h: 40,
                minW: 0,
                maxW: Infinity,
                minH: 20,
                maxH: Infinity,

                // If true, equal to `isDraggable: false, isResizable: false`.
                static: false,
                // If false, will not be draggable. Overrides `static`.
                isDraggable: true,
                // If false, will not be resizable. Overrides `static`.
                isResizable: true,
              }}
            >
              <div
                style={{
                  overflow: 'overlay',
                  width: '100%',
                  height: '100%',
                  padding: '20px 0',
                  border: '1px solid green',
                }}
              >
                <Brands config={brandsConfig} />
              </div>
            </Comps.GridItem>
          </ResponsiveGridLayout>
        </div>*/}
      </div>
    );
  }
}

export default Dashboard;
