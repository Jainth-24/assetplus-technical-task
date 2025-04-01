import React from 'react'
import BasicModal from './Modal'

const Navbar = ({ open, setOpen }) => {
  return (
    <div
      style={{
        height: '80px',
        backgroundColor: 'rgb(211, 211, 211)',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <BasicModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar