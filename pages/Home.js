import React from 'react';

import {BaseLayout} from 'layouts/BaseLayout';

const Home = () => {
  return (
    <BaseLayout>
      <>
        <h1>Home</h1>
        <div className="py-20">
          <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
          </h1>
        </div>
      </>
    </BaseLayout>
  );
};

export default Home;

