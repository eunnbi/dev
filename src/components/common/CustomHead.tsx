import Head from "next/head";

interface CustomHeadProps {
  page: string;
  description?: string;
  image?: string;
  keywords?: string[];
}

const BASE_KEYWORDS = ["개발자", "웹", "프론트엔드", "블로그", "프로젝트"];

export default function CustomHead({
  page,
  description,
  image,
  keywords
}: CustomHeadProps) {
  return (
    <Head>
      <title>{`${page} | eunnbi.dev`}</title>
      <meta name="author" content="강은비" key="author" />
      <meta
        name="description"
        content={description ? description : "은비의 개발 성장 일지"}
        key="description"
      />
      <meta
        name="keywords"
        content={
          keywords
            ? [...BASE_KEYWORDS, ...keywords].join(", ")
            : BASE_KEYWORDS.join(", ")
        }
      />
      <meta
        property="og:description"
        content={description ? description : "은비의 개발 성장 일지"}
        key="og_description"
      />
      <meta property="og:author" content="강은비" key="og_author" />
      <meta property="og:title" content={page} key="og_title" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={image ? image : "/images/og-image.png"}
      />
      <link rel="apple-touch-icon" href="/logo192.png" />
    </Head>
  );
}
