import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Blog from "../containers/Blog";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Artigos e Receitas" />
      <Blog />
    </Layout>
  );
};

export default IndexPage;
