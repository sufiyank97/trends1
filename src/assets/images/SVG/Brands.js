import React from 'react';

const brands = props => (
  <svg
    height="100%"
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      imageRendering: 'optimizeQuality',
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    }}
    viewBox="0 0 512 512"
  >
    <g>
      <path
        d="M258 13c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm0 98l37 107 111 0 -90 67 35 105 -92 -65 0 0 0 0 -92 65 35 -105 -90 -67 111 0 37 -107 0 0 0 0zm0 -61c114,0 206,92 206,206 0,114 -92,206 -206,206 -114,0 -206,-92 -206,-206 0,-114 92,-206 206,-206z"
        fill={props.fill}
      />
    </g>
  </svg>
);

export default brands;
