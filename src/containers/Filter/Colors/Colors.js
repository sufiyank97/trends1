import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { colorsConfig } from '../../../settings/config';
import * as Comps from './Colors.style';

class Colors extends Component {
  render() {
    const colors = colorsConfig.map((color, index) => (
      <li key={color.name + Math.floor(Math.random() * 1000000 + 1)}>
        <Checkbox style={{ color: color.color, padding: '0px' }} />
        <p>{color.name}</p>
      </li>
    ));

    return (
      <Comps.Wrapper>
        <Comps.Headbar>
          <Comps.CategoryFilter>
            <input type="text" placeholder="Filter for a category" />
          </Comps.CategoryFilter>
        </Comps.Headbar>
        <Comps.ContentWrapper>
          <div>
            <ul>{colors}</ul>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Comps.ContentWrapper>
      </Comps.Wrapper>
    );
  }
}

export default Colors;
