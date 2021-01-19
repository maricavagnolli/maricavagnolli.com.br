/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  description?: string;
  lang?: string;
  title?: string;
  image?: string;
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        author
      }
    }
    twitterImage: file(relativePath: { eq: "share-twitter.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1012) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function SEO({ description, lang = "pt-BR", title, image }: Props) {
  const { site, twitterImage } = useStaticQuery(query);
  const twitterImageUrl = twitterImage.childImageSharp.fluid.src;

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    author,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || twitterImageUrl}`,
    url: `${siteUrl}`,
    author,
  };

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={titleTemplate}
      meta={[
        { name: `description`, content: seo.description },
        { property: `og:title`, content: seo.title },
        { property: `og:description`, content: seo.description },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:image`, content: seo.image },
        { name: `twitter:creator`, content: seo.author },
        { name: `twitter:title`, content: seo.title },
        { name: `twitter:description`, content: seo.description },
        { name: `twitter:image:alt`, content: seo.description },
      ]}
    >
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Nutricionista Mariana Cavagnolli"
        href="/feed.xml"
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `pt-BR`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
