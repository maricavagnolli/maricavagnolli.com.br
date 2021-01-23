import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Grid, Typography } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../../components/Container";
import Article from "../../components/Articles/ArticleItem";
import { ArticleProps } from "../../containers/Home/components/Articles/Articles";

interface Props {}

const query = graphql`
  query GetRecipesAndArticles {
    recipesData: allMarkdownRemark(
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
    articlesData: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { category: { ne: "receitas" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      articles: edges {
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

type StaticQueryProps = {
  recipesData: {
    recipes: [ArticleProps];
  };
  articlesData: {
    articles: [ArticleProps];
  };
};

function Blog(props: Props) {
  const {} = props;
  const {
    recipesData: { recipes },
    articlesData: { articles },
  } = useStaticQuery<StaticQueryProps>(query);
  const hasRecipes = Boolean(recipes.length);
  const hasArticles = Boolean(articles.length);

  return (
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
                        slug={article.fields.slug}
                        large
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
                    slug={article.fields.slug}
                  />
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Container>
    </main>
  );
}

export default Blog;
