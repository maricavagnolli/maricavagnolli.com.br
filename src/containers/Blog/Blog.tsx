import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Grid } from "@material-ui/core";
import ArticleSection from "./components/ArticleSection";
import Container from "../../components/Container";
import theme from "../../styles/theme";
import useWindowSize from "../../hooks/useWindowSize";

interface Props {}

const query = graphql`
  query GetRecipesAndArticles {
    recipesData: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { category: { eq: "receitas" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      recipes: edges {
        recipe: node {
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

function Blog(props: Props) {
  const {} = props;
  const {
    recipesData: { recipes },
    articlesData: { articles },
  } = useStaticQuery(query);
  const hasRecipes = Boolean(recipes.length);
  const size = useWindowSize();
  const isLargeScreen = (size?.width ?? 0) > theme.breakpoints.width("md");

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
        <Grid container style={{ marginTop: 56 }}>
          {hasRecipes && (
            <Grid item xs={12} sm={6} md={4}>
              <ArticleSection title="Receitas" articles={recipes} />
            </Grid>
          )}
          <Grid item xs={12} sm={hasRecipes ? 6 : 12} md={hasRecipes ? 8 : 12}>
            <ArticleSection
              title="Artigos e Dicas da nutri"
              articles={articles}
              large={isLargeScreen}
            />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default Blog;
