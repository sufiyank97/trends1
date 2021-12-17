import React from 'react';
import { DatePicker } from 'antd';

import * as C from './style';
import Input from 'components/shared/Input';
import RadioButton from '../../components/shared/RadioButton';
import { filtersData } from 'apollo/client';
import { useReactiveVar } from '@apollo/client';

const { RangePicker } = DatePicker;

const NewInFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  const filters = useReactiveVar(filtersData);
  const newInFilters = filters['14'] || [];

  const basicFilters = newInFilters.slice(0, 4);
  const inputFilters = newInFilters.slice(4);

  console.log('inputFilter', inputFilters);
  console.log('basicFilter', basicFilters);
  console.log(value, 'VALUE');

  return (
    <C.Wrapper>
      <C.CategoryHeading>New In</C.CategoryHeading>
      <C.RadioButtons>
        {basicFilters.map(item => {
          const { narrative, subSectionId } = item;

          const checked = value.find(
            activeValue => activeValue.subSectionId === subSectionId
          );
          return (
            <C.RadioButtonWrapper
              key={subSectionId}
              onClick={() =>
                onChangeHandler(filterValueId, item, 'radioButton')
              }
            >
              <RadioButton checked={checked} />
              <span className={checked ? 'active' : ''}>{narrative}</span>
            </C.RadioButtonWrapper>
          );
        })}
      </C.RadioButtons>

      <C.InputsWrapper>
        <C.RadioButtonWrapper
          onClick={() =>
            onChangeHandler(filterValueId, 'dateRange', 'radioButton')
          }
        >
          <RadioButton
            checked={value.find(activeValue => activeValue === 'dateRange')}
          />
          <span
            className={
              value.find(activeValue => activeValue === 'dateRange')
                ? 'active'
                : ''
            }
          >
            Date Range
          </span>
        </C.RadioButtonWrapper>
        <RangePicker
          onCalendarChange={dates => {
            console.log(dates, 'dates');
          }}
          onChange={dates => {
            console.log('on change dates', dates);
          }}
          style={{
            marginTop: 10,
            width: '100%'
          }}
        />
        {/* <span>from</span>
        <Input />
        <span>to</span>
        <Input /> */}
      </C.InputsWrapper>
    </C.Wrapper>
  );
};

export default NewInFilter;
