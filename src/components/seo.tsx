import React from "react";
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
      link={[
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "Nutricionista Mari Cavagnolli",
          href: "/feed.xml",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          as: "style",
          href:
            "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&family=Sacramento&display=swap",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&family=Sacramento&display=swap",
          media: "print",
          onLoad: 'this.media = "all"' as any,
        },
      ]}
    >
      <noscript>{`
        <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap" />
      `}</noscript>
    </Helmet>
  );
}

export default SEO;
