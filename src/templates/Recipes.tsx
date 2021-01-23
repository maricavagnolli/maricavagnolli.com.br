import * as React from "react";
import { graphql, navigate } from "gatsby";
import { Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../components/Container";
import Article from "../components/Articles/ArticleItem";
import { ArticleProps } from "../containers/Home/components/Articles/Articles";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Button from "../components/Button";

type StaticQueryProps = {
  data: {
    recipesData: {
      recipes: [ArticleProps];
    };
    articlesData: {
      articles: [ArticleProps];
    };
  };
  pageContext: {
    currentPage: number;
    limit: number;
    numPages: number;
    skip: number;
  };
};

const customStyles = { display: "flex", justifyContent: "flex-end" };

function Blog({ data, pageContext }: StaticQueryProps) {
  const {
    recipesData: { recipes },
  } = data;
  console.log({ pageContext });
  const { numPages, currentPage } = pageContext;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numPages;
  const previousPage = `/receitas/${currentPage + 1}`;
  const nextPage =
    currentPage - 1 === 1 ? "/receitas" : `/receitas/${currentPage - 1}`;

  return (
    <Layout>
      <SEO title="Receitas da Nutri" />
      <main>
        <Container
          titleSize="md"
          title="Receitas"
          withContainer
          withPadding
          backButton
          color="transparent"
        >
          <Grid container style={{ marginTop: 56 }} spacing={4}>
            {recipes.map(({ article }) => (
              <Grid item xs={12} sm={6} md={4} key={article.id}>
                <Article
                  title={article.frontmatter.title}
                  tag={article.frontmatter.category}
                  image={
                    article.frontmatter.featuredImage.childImageSharp.fluid
                  }
                  description={article.frontmatter.description}
                  slug={article.fields.slug}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              {!isLastPage && (
                <Button
                  variant="text"
                  onClick={() => {
                    navigate(previousPage);
                  }}
                >
                  Ver posts mais antigos
                </Button>
              )}
            </Grid>
            <Grid item xs={6} style={customStyles}>
              {!isFirstPage && (
                <Button
                  variant="text"
                  onClick={() => {
                    navigate(nextPage);
                  }}
                >
                  Ver posts mais recentes
                </Button>
              )}
            </Grid>
          </Grid>
        </Container>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    recipesData: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { category: { eq: "receitas" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      recipes: edges {
        article: node {
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date(locale: "pt-BR", formatString: "LL")
            category
            description
            featuredImage {
              childImageSharp {
                fluid(quality: 100, maxWidth: 300, maxHeight: 215) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
