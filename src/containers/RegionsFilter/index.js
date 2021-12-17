import React, { useState, useEffect } from 'react';

import * as C from './style';
import Input from 'components/shared/Input';
import Icon from 'assets/icons';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import { useRecoilValue } from 'recoil';
import { filtersCountries } from 'state/filters';
import { filtersData } from 'apollo/client';
import { useReactiveVar } from '@apollo/client';

const RegionsFilter = props => {
  // new
  const filters = useReactiveVar(filtersData);
  const countryFilters = filters['1'] || [];
  // new end

  const { onChangeHandler, filterValueId, value } = props;

  const [countriesSearch, setCountriesSearch] = useState('');

  return (
    <C.Wrapper>
      <C.CategoryHeading>Select Regions</C.CategoryHeading>

      <C.SearchWrapper>
        <C.FieldWrapper>
          <Input
            value={countriesSearch}
            onChange={e => setCountriesSearch(e.target.value)}
            placeholder="Search region list"
          />
          <Icon name="search" />
        </C.FieldWrapper>
        <C.CountriesList>
          {countryFilters
            .filter(country =>
              country.narrative
                .toLowerCase()
                .trim()
                .includes(countriesSearch.toLowerCase().trim())
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
        </C.CountriesList>
      </C.SearchWrapper>
    </C.Wrapper>
  );
};

export default RegionsFilter;
