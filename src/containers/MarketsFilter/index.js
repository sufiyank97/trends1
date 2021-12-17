import React, { useState, useEffect } from 'react';
const countryList = require('country-list');

import * as C from './style';
import Input from 'components/shared/Input';
import Icon from 'assets/icons';
import Checkbox from 'components/UI/Checkbox/Checkbox';

// TODO: remove later
const tempSegments = ['Value', 'Mass', 'Premium', 'Luxury'];

const MarketsFilter = props => {
  console.log(props, 'props');

  const {
    toggleRegionHandler,
    toggleSegmentHandler,
    regions,
    segments
  } = props;

  const [countries, setCountries] = useState([]);
  const [countriesSearch, setCountriesSearch] = useState('');

  const getCountries = async () => {
    const data = await countryList.getData();
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <C.Wrapper>
      <C.CategoryHeading>Select Regions...</C.CategoryHeading>

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
          {// Filtering logic
          countriesSearch
            ? // If filter value is true then filter
              countries
                .filter(country =>
                  country.name
                    .toLowerCase()
                    .trim()
                    .includes(countriesSearch.toLowerCase().trim())
                )
                .map(({ code, name }) => {
                  {
                    const checked = regions.find(region => region === name);
                    return (
                      <C.ListItem
                        key={code}
                        onClick={() => toggleRegionHandler(name)}
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
              countries.map(({ code, name }) => {
                const checked = regions.find(region => region === name);
                return (
                  <C.ListItem
                    key={code}
                    onClick={() => toggleRegionHandler(name)}
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

      <C.SegmentsWrapper>
        <C.CategoryHeading>Select Segments...</C.CategoryHeading>

        <C.Checkboxes>
          {tempSegments.map(segment => {
            const checked = segments.find(
              activeSegment => activeSegment === segment
            );
            return (
              <C.CheckboxWrapper onClick={() => toggleSegmentHandler(segment)}>
                <Checkbox checked={checked} />
                <span className={checked ? 'active' : ''}>{segment}</span>
              </C.CheckboxWrapper>
            );
          })}
        </C.Checkboxes>
      </C.SegmentsWrapper>
    </C.Wrapper>
  );
};

export default MarketsFilter;
