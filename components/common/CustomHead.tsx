import Head from "next/head";

interface CustomHeadProps {
  page: string;
  description?: string;
  image?: string;
}

const CustomHead = ({ page, description, image }: CustomHeadProps) => {
  return (
    <Head>
      <title>{page}</title>
      <meta property="author" content="강은비" />
      <meta
        property="description"
        content={description ? description : "은비의 개발 성장 일지"}
      />
      <meta
        property="og:description"
        content={description ? description : "은비의 개발 성장 일지"}
      />
      <meta property="og:author" content="강은비" />
      <meta property="og:title" content={page} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={image ? `/images/${image}` : "/images/og-image.png"}
      />
    </Head>
  );
};

export default CustomHead;
