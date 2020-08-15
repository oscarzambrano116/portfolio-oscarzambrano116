import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'next/router';

import {BaseLayout} from 'layouts/BaseLayout';

const PortfolioDetail = ({
  router: {
    query: {
      id,
    },
  },
  portfolio: {
    body,
    title,
  },
}) => {
  return (
    <BaseLayout>
      <>
        <h1>Detail</h1>
        <h2>{body}</h2>
        <h3>{title}</h3>
      </>
    </BaseLayout>
  );
};

PortfolioDetail.getInitialProps = async ({query: {id}}) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const portfolio = await res.json();
    return {portfolio};
  } catch (error) {
    console.error(error);
    return {portfolio: null};
  }
};

PortfolioDetail.propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  portfolio: PropTypes.shape({
    body: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default withRouter(PortfolioDetail);
