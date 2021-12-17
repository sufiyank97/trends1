import React from 'react';
import * as Comps from './Header.style';
import Wrapper from './Header.style';
import logo from '../../../assets/images/logo_web.png';

const header = () => (
  <Wrapper>
    <Comps.ImageWrapper>
      <img src={logo} alt="LOGO" />
    </Comps.ImageWrapper>
  </Wrapper>
);

export default header;
