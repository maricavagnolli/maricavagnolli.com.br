import * as React from "react";
import { graphql, navigate } from "gatsby";
import { Grid, Typography } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../components/Container";
import Article from "../components/Articles/ArticleItem";
import { ArticleProps } from "../containers/Home/components/Articles/Articles";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Button from "../components/Button";
import useWindowSize from "../hooks/useWindowSize";
import theme from "../styles/theme";

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

function Blog({ data, pageContext }: StaticQueryProps) {
  const {
    recipesData: { recipes },
    articlesData: { articles },
  } = data;
  const hasRecipes = Boolean(recipes.length);
  const hasArticles = Boolean(articles.length);
  const { numPages, currentPage } = pageContext;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numPages;
  const previousPage = `/blog/${currentPage + 1}`;
  const nextPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`;
  const { width } = useWindowSize();
  const showLarge = (width || 0) >= theme.breakpoints.values.sm;

  return (
    <Layout>
      <SEO title="Artigos e Receitas" />
      <main>
        <Container
          titleSize="md"
          title="Artigos & Receitas"
          withContainer
          withPadding
          color="transparent"
        >
          <p>
            Aqui você encontra receitas para facilitar a sua vida no seu dia a
            dia, além de alguns artigos para você melhorar cada vez mais sua
            qualidade de vida
          </p>
          <Grid container style={{ marginTop: 56 }} spacing={4}>
            {hasRecipes && (
              <>
                <Grid item xs={12}>
                  <Typography variant="h5">Receitas</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Carousel
                    showThumbs={false}
                    infiniteLoop
                    swipeable
                    emulateTouch
                    autoPlay
                    interval={6000}
                    showStatus={false}
                  >
                    {recipes.map(({ article }) => (
                      <div key={article.id}>
                        <Article
                          title={article.frontmatter.title}
                          tag={article.frontmatter.category}
                          image={
                            article.frontmatter.featuredImage.childImageSharp
                              .fluid
                          }
                          description={article.frontmatter.description}
                          slug={article.slug}
                          large={showLarge}
                        />
                      </div>
                    ))}
                  </Carousel>
                </Grid>
              </>
            )}
            {hasArticles && (
              <>
                <Grid item xs={12}>
                  <Typography variant="h5">Artigos e Dicas da nutri</Typography>
                </Grid>
                {articles.map(({ article }) => (
                  <Grid item xs={12} sm={6} md={4} key={article.id}>
                    <Article
                      title={article.frontmatter.title}
                      tag={article.frontmatter.category}
                      image={
                        article.frontmatter.featuredImage.childImageSharp.fluid
                      }
                      description={article.frontmatter.description}
                      slug={article.slug}
                    />
                  </Grid>
                ))}
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
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
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
              </>
            )}
          </Grid>
        </Container>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    recipesData: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { category: { eq: "receitas" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      recipes: edges {
        article: node {
          id
          slug
          timeToRead
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
    articlesData: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { category: { ne: "receitas" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      articles: edges {
        article: node {
          id
          slug
          timeToRead
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
