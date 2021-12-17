import React, { useState } from 'react';

import * as C from './style';
import Input from 'components/shared/Input';
import Icon from 'assets/icons';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import { useReactiveVar } from '@apollo/client';
import { filtersData } from 'apollo/client';

const RetailersFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  const [retailersSearch, setRetailersSearch] = useState('');

  const filters = useReactiveVar(filtersData);
  const retailersFilters = filters['5'] || [];

  return (
    <C.Wrapper>
      <C.CategoryHeading>Select Retailers</C.CategoryHeading>

      <C.SearchWrapper>
        <C.FieldWrapper>
          <Input
            value={retailersSearch}
            onChange={e => setRetailersSearch(e.target.value)}
            placeholder="Search for a retailer"
          />
          <Icon name="search" />
        </C.FieldWrapper>
        <C.DataList>
          {retailersFilters
            .filter(({ narrative }) =>
              narrative
                .toLowerCase()
                .trim()
                .includes(retailersSearch.toLowerCase().trim())
            )
            .map(item => {
              const { narrative, subSectionId } = item;

              const checked = value.find(
                region => region.subSectionId === subSectionId
              );

              return (
                <C.ListItem
                  key={subSectionId}
                  onClick={() => onChangeHandler(filterValueId, item)}
                >
                  <Checkbox style={{ marginRight: 20 }} checked={checked} />
                  <span className={checked ? 'active' : ''}>{narrative}</span>
                </C.ListItem>
              );
            })}
        </C.DataList>
      </C.SearchWrapper>
    </C.Wrapper>
  );
};

export default RetailersFilter;
