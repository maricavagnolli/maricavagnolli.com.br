import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Article from "../../../../components/Articles/ArticleItem";
// import Artic
import * as Styled from "./styled";
import { ArticleProps } from "../../../Home/components/Articles/Articles";

interface Props {
  title: string;
  articles: [ArticleProps];
  large?: boolean;
}

function ArticleSection(props: Props) {
  const { title, articles, large = false } = props;

  return (
    <Styled.Container>
      <Typography variant="h5">{title}</Typography>
      {articles.map(({ article }) => (
        <Article
          key={article.id}
          title={article.frontmatter.title}
          tag={article.frontmatter.category}
          image={article.frontmatter.featuredImage.childImageSharp.fluid}
          description={article.frontmatter.description}
          slug={article.slug}
          large={large}
        />
      ))}
    </Styled.Container>
  );
}

export default ArticleSection;
