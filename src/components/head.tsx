import { Helmet } from "@dr.pogodin/react-helmet";

interface MetaProps {
  metaData: {
    title: string;
    description: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogImageWidth?: number;
    ogImageHeight?: number;
    ogUrl?: string;
  };
}

export const Head = ({ metaData }: MetaProps) => {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogImageWidth,
    ogImageHeight,
    ogUrl,
  } = metaData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImageWidth && (
        <meta property="og:image:width" content={ogImageWidth.toString()} />
      )}
      {ogImageHeight && (
        <meta property="og:image:height" content={ogImageHeight.toString()} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {ogUrl && <meta property="twitter:url" content={ogUrl} />}
      {ogTitle && <meta name="twitter:title" content={ogTitle} />}
      {ogDescription && (
        <meta name="twitter:description" content={ogDescription} />
      )}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Favicon */}
      <link rel="icon" href="og/shoppingcart.jpg" />
      {ogUrl && <link rel="canonical" href={ogUrl} />}
    </Helmet>
  );
};
