import * as React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { GatsbyImageFluidProps } from "gatsby-image";
import { Grid } from "@material-ui/core";
import ArticleItem from "../../../../components/Articles/ArticleItem";
import Container from "../../../../components/Container";
import Button from "../../../../components/Button";

interface Props {}

export type ArticleProps = {
  article: {
    id: string;
    timeToRead: number;
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      category: string;
      description: string;
      featuredImage: {
        childImageSharp: GatsbyImageFluidProps;
      };
    };
  };
};

const articlesQuery = graphql`
  query GetArticles {
    data: allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
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

const Articles: React.FC<Props> = (props) => {
  const {} = props;
  const {
    data: { articles },
  } = useStaticQuery(articlesQuery);

  return (
    <Container
      color="#F4F4F4"
      title="Artigos & Receitas"
      withContainer
      withPadding
    >
      <p>
        Aqui você encontra receitas para facilitar a sua vida no seu dia a dia,
        além de alguns artigos para você melhorar cada vez mais sua qualidade de
        vida
      </p>
      <Grid container spacing={2} style={{ marginTop: 24 }}>
        {articles.map(({ article }: ArticleProps) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <ArticleItem
              title={article.frontmatter.title}
              tag={article.frontmatter.category}
              image={article.frontmatter.featuredImage.childImageSharp.fluid}
              description={article.frontmatter.description}
              slug={article.slug}
            />
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/blog")}
          >
            Ver todos os artigos
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Articles;
