import React, { useState } from 'react';

import * as C from './style';
import Input from 'components/shared/Input';
import Icon from 'assets/icons';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import { useReactiveVar } from '@apollo/client';
import { filtersData } from 'apollo/client';

// TODO: remove later
const tempSegments = ['Value', 'Mass', 'Premium', 'Luxury'];

const tempIconButtons = [...Array(12).keys()];

const CategoriesFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  const [productTypes, setProductTypes] = useState([]);
  const [productTypesSearch, setProductTypesSearch] = useState('');

  const filters = useReactiveVar(filtersData);
  const categoriesFilters = filters['7'] || [];

  return (
    <C.Wrapper>
      <C.CategoryHeading>Select Icon to filter list</C.CategoryHeading>

      <C.IconButtonsBlock>
        {categoriesFilters.map(({ narrative }) => (
          <C.IconButton>{narrative}</C.IconButton>
        ))}
      </C.IconButtonsBlock>

      <C.SearchWrapper>
        <C.FieldWrapper>
          <Input
            value={productTypesSearch}
            onChange={e => setProductTypesSearch(e.target.value)}
            placeholder="Search product types list"
          />
          <Icon name="search" />
        </C.FieldWrapper>
        <C.CountriesList>
          {// Filtering logic
          productTypesSearch
            ? // If filter value is true then filter
              productTypes
                .filter(country =>
                  country.name
                    .toLowerCase()
                    .trim()
                    .includes(productTypesSearch.toLowerCase().trim())
                )
                .map(({ code, name }) => {
                  {
                    const checked = value.find(region => region === name);
                    return (
                      <C.ListItem
                        key={code}
                        onClick={() => onChangeHandler(filterValueId, name)}
                      >
                        <Checkbox
                          style={{ marginRight: 20 }}
                          checked={checked}
                        />
                        <span
                          className={checked ? 'active' : ''}
                        >{`${name} (${code})`}</span>
                      </C.ListItem>
                    );
                  }
                })
            : // else show original array of values
              productTypes.map(({ code, name }) => {
                const checked = value.find(region => region === name);
                return (
                  <C.ListItem
                    key={code}
                    onClick={() => onChangeHandler(filterValueId, name)}
                  >
                    <Checkbox style={{ marginRight: 20 }} checked={checked} />
                    <span
                      className={checked ? 'active' : ''}
                    >{`${name} (${code})`}</span>
                  </C.ListItem>
                );
              })}
        </C.CountriesList>
      </C.SearchWrapper>

      <C.RequestButton>Request a product type</C.RequestButton>
    </C.Wrapper>
  );
};

export default CategoriesFilter;
