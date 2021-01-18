import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Home from "../containers/Home";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Página inicial" />
      <Home />
    </Layout>
  );
};

export default IndexPage;
