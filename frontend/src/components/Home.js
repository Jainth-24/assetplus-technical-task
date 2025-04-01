import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Home = () => {
     const [open, setOpen] = React.useState(false);
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <Hero open={open} setOpen={setOpen} />
    </>
  );
};

export default Home;
