import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { markdownConfig } from '../../../settings/config';
import * as Comps from './Markdown.style';

class Markdown extends Component {
  render() {
    const colors = markdownConfig.map(mark => (
      <li key={mark.name + Math.floor(Math.random() * 1000000 + 1)}>
        <Checkbox style={{ padding: '0px', color: 'white' }} />
        <p>{mark.name}</p>
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

export default Markdown;
