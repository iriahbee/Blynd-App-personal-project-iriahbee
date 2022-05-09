import React from 'react';
import Progress from './Progress';
import Logo from './Logo'

const Header = () => (
  <><section>
   <Logo/>
   </section>
  <div>
    <h1>Multi Step Registration</h1>
    <Progress />
  </div>
  </>
);

export default Header;