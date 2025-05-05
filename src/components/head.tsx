interface MetaProps {
  metaData: {
    title: string;
    description: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
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
    ogUrl,
  } = metaData;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ShoppingCart" />
      <meta property="og:locale" content="da_DK" />
      {ogTitle && <meta name="twitter:title" content={ogTitle} />}
      {ogDescription && (
        <meta name="twitter:description" content={ogDescription} />
      )}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
      {ogUrl && <link rel="canonical" href={ogUrl} />}
    </>
  );
};
