import React from "react";
import { Link, PageProps } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import HeroSection from "../components/hero/hero";
const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />

    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
