import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <h1>{'Nummy Whiskey'}</h1>
      <p>{"read about what we've been drinking"}</p>
      <div>
        <div
          style={{
            maxWidth: `300px`,
            margin: '0 auto 1.45rem',
          }}
        ></div>
      </div>
      <Link to="/blogposts/">{'View all posts'}</Link>
    </div>
  </Layout>
);

export default IndexPage;
