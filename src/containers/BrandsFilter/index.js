import React, { useState } from 'react';

import * as C from './style';
import Input from 'components/shared/Input';
import Icon from 'assets/icons';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import { useReactiveVar } from '@apollo/client';
import { filtersData } from 'apollo/client';

const BrandsFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  const [brandsSearch, setBrandsSearch] = useState('');

  const filters = useReactiveVar(filtersData);
  const brandsFilters = filters['6'] || [];

  return (
    <C.Wrapper>
      <C.CategoryHeading>Select Brands</C.CategoryHeading>

      <C.SearchWrapper>
        <C.FieldWrapper>
          <Input
            value={brandsSearch}
            onChange={e => setBrandsSearch(e.target.value)}
            placeholder="Search for a brand"
          />
          <Icon name="search" />
        </C.FieldWrapper>
        <C.DataList>
          {brandsFilters
            .filter(({ narrative }) =>
              narrative
                .toLowerCase()
                .trim()
                .includes(brandsSearch.toLowerCase().trim())
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

export default BrandsFilter;
