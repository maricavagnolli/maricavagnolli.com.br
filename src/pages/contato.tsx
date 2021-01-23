import React from "react";
import { graphql } from "gatsby";
import { GatsbyImageFixedProps } from "gatsby-image";
import Contact from "../containers/Contact";
import SEO from "../components/seo";
import Layout from "../components/Layout";

interface Props {
  data: {
    file: {
      childImageSharp: GatsbyImageFixedProps;
    };
  };
}

function ContactPage({ data }: Props) {
  const { file } = data;
  return (
    <Layout>
      <SEO title="Entre em contato" />
      <Contact profilePhoto={file.childImageSharp} />
    </Layout>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpeg" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default ContactPage;
