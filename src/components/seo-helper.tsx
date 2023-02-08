import { useRouter } from 'next/router'
import NextHead from 'next/head'
import { SITE_PROPS } from '../lib/constants'

type SeoHelperProps = {
  title: string
  description?: string
  canonical?: string
  post?: {
    image: string
    publicationDate: string
    modificationDate: string
  }
  kata?: {
    publicationDate: string
    modificationDate: string
  }
  project?: {
    publicationDate: string
    modificationDate: string
  }
}

const SeoHelper = ({
  title,
  description,
  canonical,
  post,
  kata,
  project,
}: SeoHelperProps) => {
  const router = useRouter()

  return (
    <NextHead>
      {canonical && <link rel="canonical" href={canonical} key="canonical" />}
      <title>{`${title} | ${SITE_PROPS.siteName}`}</title>
      <meta
        property="og:title"
        content={`${title} | ${SITE_PROPS.siteName}`}
        key="og:title"
      />
      <meta
        name="description"
        content={description || SITE_PROPS.description}
        key="description"
      />
      <meta
        property="og:description"
        content={description || SITE_PROPS.description}
        key="og:description"
      />

      {!post && (
        <>
          <meta
            property="og:image"
            content={`${SITE_PROPS.url}/images/logo-512.png`}
            key="og:image"
          />
          <meta
            name="twitter:card"
            content="summary_large_image"
            key="twitter:card"
          />
        </>
      )}

      {post && (
        <>
          <meta property="og:type" content="article" key="og:type" />
          <meta
            property="og:image"
            content={`${SITE_PROPS.url}/images/blog/${post.image}`}
            key="og:image"
          />
          <meta
            property="article:published_time"
            content={new Date(post.publicationDate).toISOString()}
            key="article:published_time"
          />
          <meta
            property="article:modified_time"
            content={new Date(post.modificationDate).toISOString()}
            key="article:modified_time"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                  "description": "${description || SITE_PROPS.description}",
                    "author": {
                        "@type": "Person",
                        "name": "${SITE_PROPS.author}",
                        "url": "${SITE_PROPS.url}/"
                    },
                    "@type": "BlogPosting",
                    "url": "${SITE_PROPS.url}/",
                    "publisher": {
                        "@type": "Person",
                        "name": "${SITE_PROPS.author}",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "${SITE_PROPS.url}/images/logo-512.png"
                        }
                              },
                              "headline": "${title} | ${SITE_PROPS.siteName}",
                              "image": ["${SITE_PROPS.url}/images/blog/${
                post.image
              }"],
            "datePublished": "${new Date(post.publicationDate).toISOString()}",
                                "dateModified": "${new Date(
                                  post.modificationDate,
                                ).toISOString()}",
                                    "mainEntityOfPage": {
                                        "@type": "WebPage",
                                        "@id": "${SITE_PROPS.url}${
                router.asPath
              }"
                                    },
                                    "@context": "http://schema.org"
                                }`,
            }}
            key="ldjson"
          />
        </>
      )}
      {kata && (
        <>
          <meta property="og:type" content="article" key="og:type" />
          <meta
            property="article:published_time"
            content={new Date(kata.publicationDate).toISOString()}
            key="article:published_time"
          />
          <meta
            property="article:modified_time"
            content={new Date(kata.modificationDate).toISOString()}
            key="article:modified_time"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                  "description": "${description || SITE_PROPS.description}",
                    "author": {
                        "@type": "Person",
                        "name": "${SITE_PROPS.author}",
                        "url": "${SITE_PROPS.url}/"
                    },
                    "@type": "BlogPosting",
                    "url": "${SITE_PROPS.url}/",
                    "publisher": {
                        "@type": "Person",
                        "name": "${SITE_PROPS.author}",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "${SITE_PROPS.url}/images/logo-512.png"
                        }
                    },
                    "headline": "${title} | ${SITE_PROPS.siteName}",
                    "datePublished": "${new Date(
                      kata.publicationDate,
                    ).toISOString()}",
                    "dateModified": "${new Date(
                      kata.modificationDate,
                    ).toISOString()}",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "${SITE_PROPS.url}${router.asPath}"
                    },
                    "@context": "http://schema.org"
                }`,
            }}
            key="ldjson"
          />
        </>
      )}
      {project && (
        <>
          <meta property="og:type" content="article" key="og:type" />
          <meta
            property="article:published_time"
            content={new Date(project.publicationDate).toISOString()}
            key="article:published_time"
          />
          <meta
            property="article:modified_time"
            content={new Date(project.modificationDate).toISOString()}
            key="article:modified_time"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                  "description": "${description || SITE_PROPS.description}",
                    "author": {
                        "@type": "Person",
                        "name": "${SITE_PROPS.author}",
                        "url": "${SITE_PROPS.url}/"
                    },
                    "@type": "BlogPosting",
                    "url": "${SITE_PROPS.url}/",
                    "publisher": {
                        "@type": "Person",
                        "name": "${SITE_PROPS.author}",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "${SITE_PROPS.url}/images/logo-512.png"
                        }
                    },
                    "headline": "${title} | ${SITE_PROPS.siteName}",
                    "datePublished": "${new Date(
                      project.publicationDate,
                    ).toISOString()}",
                    "dateModified": "${new Date(
                      project.modificationDate,
                    ).toISOString()}",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "${SITE_PROPS.url}${router.asPath}"
                    },
                    "@context": "http://schema.org"
                }`,
            }}
            key="ldjson"
          />
        </>
      )}
    </NextHead>
  )
}

export default SeoHelper
