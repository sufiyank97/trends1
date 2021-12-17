import React, { useRef } from 'react';

import { Wrapper } from './Drawer.style';
import useOutsideClick from 'hooks/useOutsideClick';

const Drawer = props => {
  // Ref for itself
  const outsideRef = useRef();

  // Outside click handler
  useOutsideClick(
    outsideRef,
    () => {
      props.toggleDrawer(false);
    },
    'drawerOutside'
  );

  return (
    <Wrapper ref={outsideRef} style={props.style}>
      {props.children}
    </Wrapper>
  );
};

export default Drawer;
