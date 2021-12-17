import React from 'react';
import ReactSVG from 'react-svg';

const Icon = ({ name, ...props }) => (
  <ReactSVG
    fallback={() => <span>Error!</span>}
    loading={() => <span>Loading</span>}
    src={`icons/${name}.svg`}
    {...props}
  />
);

export default Icon;
