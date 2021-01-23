import React from "react";
import { graphql, navigate } from "gatsby";
import { Container, Typography, Hidden, Grid, Button } from "@material-ui/core";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
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

const globalComponents = {
  h1: (props: any) => (
    <Typography variant="h1" {...props} {...commonProps(props.children)} />
  ),
  h2: (props: any) => (
    <Typography variant="h2" {...props} {...commonProps(props.children)} />
  ),
  h3: (props: any) => (
    <Typography variant="h3" {...props} {...commonProps(props.children)} />
  ),
  h4: (props: any) => (
    <Typography variant="h4" {...props} {...commonProps(props.children)} />
  ),
  h5: (props: any) => (
    <Typography variant="h5" {...props} {...commonProps(props.children)} />
  ),
  h6: (props: any) => (
    <Typography variant="h6" {...props} {...commonProps(props.children)} />
  ),
  p: (props: any) => (
    <Typography
      variant="body1"
      {...props}
      style={{ fontSize: "20px", lineHeight: "2.5rem", fontWeight: 300 }}
      color="textPrimary"
    />
  ),
  li: (props: any) => (
    <li {...props}>
      <Typography
        variant="subtitle1"
        {...props}
        style={{ lineHeight: "2.5rem", fontWeight: 200 }}
      />
    </li>
  ),
};

const PostTemplate = ({ data: { mdx, file }, location }: any) => {
  const featuredImgFluid = mdx.frontmatter.featuredImage.childImageSharp.fluid;
  const hasSections = Boolean(mdx.frontmatter.sections.length);

  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
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
          {mdx.frontmatter.title}
        </Typography>
        <Img
          fluid={featuredImgFluid}
          style={{ maxHeight: 370, marginTop: 56 }}
        />
        <Grid container style={{ marginTop: 56 }}>
          {hasSections && (
            <Hidden xsDown>
              <Grid item xs={3}>
                <SectionTable sections={mdx.frontmatter.sections} />
              </Grid>
            </Hidden>
          )}
          <Grid item xs={12} sm={hasSections ? 9 : 12}>
            <MDXProvider components={globalComponents}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
            <ShareArticle
              link={location.href}
              title={mdx.frontmatter.title}
              description={mdx.frontmatter.description}
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
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        date(locale: "pt-BR", fromNow: true)
        title
        sections {
          id
          title
        }
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
