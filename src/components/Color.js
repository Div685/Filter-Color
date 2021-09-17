import React from 'react';

const Color = ({ colors }) => {
  return (
    <div style={{ backgroundColor: colors.code.hex, padding: "30px", margin: "10px", boxShadow: "#9ca0a073 0px 0px 2px 4px" }} />
  );
}

export default Color;