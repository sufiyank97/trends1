import React from 'react';
import { useIntl } from 'react-intl';

import * as C from './style';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import { useReactiveVar } from '@apollo/client';
import { filtersData } from 'apollo/client';

// TODO: remove later
const tempColors = [
  {
    name: 'trends.colors.black',
    color: 'black'
  },
  {
    name: 'trends.colors.brown',
    color: 'brown'
  },
  {
    name: 'trends.colors.red',
    color: 'red'
  },
  {
    name: 'trends.colors.fuchsia',
    color: 'fuchsia'
  },
  {
    name: 'trends.colors.purple',
    color: 'purple'
  },
  {
    name: 'trends.colors.blue',
    color: 'blue'
  },
  {
    name: 'trends.colors.teal',
    color: 'teal'
  },
  {
    name: 'trends.colors.lime',
    color: 'lime'
  },
  {
    name: 'trends.colors.neutral',
    color: '#ebe9e7'
  },
  {
    name: 'trends.colors.copper',
    color: '#b87333'
  },
  {
    name: 'trends.colors.white',
    color: 'white'
  },
  {
    name: 'trends.colors.grey',
    color: 'grey'
  },
  {
    name: 'trends.colors.orange',
    color: 'orange'
  },
  {
    name: 'trends.colors.maroon',
    color: 'maroon'
  },
  {
    name: 'trends.colors.pink',
    color: 'pink'
  },
  {
    name: 'trends.colors.navy',
    color: 'navy'
  },
  {
    name: 'trends.colors.aqua',
    color: 'aqua'
  },
  {
    name: 'trends.colors.green',
    color: 'green'
  },
  {
    name: 'trends.colors.yellow',
    color: 'yellow'
  },
  {
    name: 'trends.colors.silver',
    color: 'silver'
  },
  {
    name: 'trends.colors.gold',
    color: 'gold'
  }
];

const ColorsFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  // Localisation
  const intl = useIntl();

  const filters = useReactiveVar(filtersData);
  const colorsFilters = filters['9'] || [];

  return (
    <C.Wrapper>
      <C.CategoryHeading>Select Colors</C.CategoryHeading>

      <C.Checkboxes>
        {colorsFilters.map(item => {
          const { narrative, subSectionId } = item;

          const checked = value.find(
            activeValue => activeValue.subSectionId === subSectionId
          );
          return (
            <C.CheckboxWrapper
              key={subSectionId}
              onClick={() => onChangeHandler(filterValueId, item)}
            >
              <Checkbox checked={checked} />
              <span className={checked ? 'active' : ''}>{narrative}</span>
            </C.CheckboxWrapper>
          );
        })}
      </C.Checkboxes>
    </C.Wrapper>
  );
};

export default ColorsFilter;
