import React from "react";
import { graphql, navigate } from "gatsby";
import { Container, Typography, Hidden, Grid, Button } from "@material-ui/core";
import styled from "styled-components";

import Img from "gatsby-image";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import SectionTable from "../components/Articles/SectionTable";
import ShareArticle from "../components/Articles/ShareArticle";
import AuthorDetails from "../components/Articles/AuthorDetails";

const formatTitleId = (title: string) =>
  title?.replace(/ /g, "-").toLowerCase();

const commonProps = (text: string) => ({
  color: "textPrimary",
  style: { fontWeight: 500 },
  id: formatTitleId(text),
});

const CustomDiv = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    margin-bottom: 1rem;
    margin-top: 3rem;
  }
  h1 {
    font-size: 6rem;
    line-height: 1.167;
    letter-spacing: -0.01562em;
  }
  h2 {
    font-size: 3.75rem;
    line-height: 1.2;
    letter-spacing: -0.00833em;
  }
  h3 {
    font-size: 3rem;
    line-height: 1.167;
    letter-spacing: 0em;
  }
  h4 {
    font-size: 2.125rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }
  h5 {
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
  }
  h6 {
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
  p {
    font-size: 20px;
    line-height: 2.5rem;
    font-weight: 300;
  }
`;

const PostTemplate = ({ data: { markdownRemark, file }, location }: any) => {
  const featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
        image={featuredImgFluid.src}
      />
      <Container maxWidth="md" style={{ marginTop: 96 }}>
        <Button
          variant="text"
          color="primary"
          style={{ marginBottom: 16 }}
          onClick={() => navigate(-1)}
        >
          Voltar
        </Button>
        <Typography
          variant="h4"
          color="textPrimary"
          style={{ fontWeight: 500 }}
        >
          {markdownRemark.frontmatter.title}
        </Typography>
        <Img
          fluid={featuredImgFluid}
          style={{ maxHeight: 370, marginTop: 56 }}
        />
        <Grid container style={{ marginTop: 56 }}>
          <Grid item xs={12}>
            <CustomDiv
              dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            />
            <ShareArticle
              link={location.href}
              title={markdownRemark.frontmatter.title}
              description={markdownRemark.frontmatter.description}
            />
            <AuthorDetails profilePhoto={file.childImageSharp.fixed} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PostTemplateQuery($id: String) {
    file(relativePath: { eq: "me.jpeg" }) {
      childImageSharp {
        fixed(width: 80, height: 80, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      frontmatter {
        date(locale: "pt-BR", fromNow: true)
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1914) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default PostTemplate;
