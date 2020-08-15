import React from 'react';
import PropTypes from 'prop-types';

import {BaseLayout} from 'layouts/BaseLayout';

const Portfolio = ({posts}) => {
  const renderPosts = () => {
    return (
      posts.map(({id}) => {
        return (
          <li key={id}>{id}</li>
        );
      })
    );
  };

  return (
    <BaseLayout>
      <h1>Portfolio</h1>
      <ul>
        {renderPosts()}
      </ul>
    </BaseLayout>
  );
};

Portfolio.getInitialProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return {posts: posts.slice(0, 10)};
  } catch (error) {
    console.error(error);
    return {posts: []};
  }
};

Portfolio.propTypes = {
  posts: PropTypes.array,
};

export default Portfolio;

