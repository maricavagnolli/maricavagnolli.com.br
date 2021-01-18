import React from "react";
import { graphql } from "gatsby";
import { GatsbyImageFixedProps } from "gatsby-image";
import BusinessCard from "../containers/BusinessCard";
import SEO from "../components/seo";

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
    <>
      <SEO title="Entre em contato" />
      <BusinessCard profilePhoto={file.childImageSharp} />
    </>
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
