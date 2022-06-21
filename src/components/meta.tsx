import Head from 'next/head';
import { useRouter } from 'next/router';
import { SITE_PROPS } from '../lib/constants';
import Favicon from './favicon';

type Props = {
    title: string;
    description?: string;
    canonical?: string;
    post?: {
        image: string;
        publicationDate: string;
        modificationDate: string;
    }
}

const Meta = ({
    title,
    description,
    canonical,
    post,
}: Props) => {
    const router = useRouter();

    return (
        <Head>
            <Favicon />
            <meta name="application-name" content={SITE_PROPS.siteName} key="application_name" />
            <meta name="apple-mobile-web-app-capable" content="yes" key="apple_mobile_web_app_capable" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" key="apple_mobile_web_app_status_bar_style" />
            <meta name="apple-mobile-web-app-title" content={SITE_PROPS.siteName} key="apple_mobile_web_app_title" />
            <meta name="format-detection" content="telephone=no" key="format_detection" />
            <meta name="mobile-web-app-capable" content="yes" key="mobile_web_app_capable" />

            <meta charSet="UTF-8" key="charset" />
            <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
            {canonical && (
                <link rel="canonical" href={canonical} key="canonical" />
            )}
            <meta property="og:locale" content={SITE_PROPS.locale} key="og:locale" />
            <meta property="og:site_name" content={SITE_PROPS.siteName} key="og:sitename" />
            
            <title>{`${title} | ${SITE_PROPS.siteName}`}</title>
            <meta 
                property="og:title"
                content={`${title} | ${SITE_PROPS.siteName}`}
                key="og:title"
            />
            <meta 
                name="description"
                content={ description || SITE_PROPS.description }
                key="description"
            />
            <meta 
                property="og:description"
                content={ description || SITE_PROPS.description }
                key="og:description"
            />
            <meta name="author" content={SITE_PROPS.author} key="author" />

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
                        name="twitter:card"
                        content="summary_large_image"
                        key="twitter:card"
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
                                "image": ["${SITE_PROPS.url}/images/blog/${post.image}"],
                                "datePublished": "${new Date(post.publicationDate).toISOString()}",
                                "dateModified": "${new Date(post.modificationDate).toISOString()}",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "${SITE_PROPS.url}${router.asPath}"
                                },
                                "@context": "http://schema.org"
                            }`
                        }}
                        key="ldjson"
                    />
                </>
            )}
        </Head>
    )
}

export default Meta;