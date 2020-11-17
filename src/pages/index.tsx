import React from "react";
import { Link, PageProps } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
