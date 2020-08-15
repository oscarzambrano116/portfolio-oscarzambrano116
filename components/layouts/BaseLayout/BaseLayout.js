import React from 'react';
import PropTypes from 'prop-types';
import {Header} from 'shared/Header';

const BaseLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
