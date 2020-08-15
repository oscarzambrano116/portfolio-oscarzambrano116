import React from 'react';
import PropTypes from 'prop-types';

const App = ({Component, pageProps}) => {
  return (
    <Component {...pageProps} />
  );
};

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default App;
