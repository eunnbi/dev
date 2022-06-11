import Head from "next/head";

interface CustomHeadProps {
  page: string;
}

const CustomHead = ({ page }: CustomHeadProps) => {
  return (
    <Head>
      <title>{page} | Eunbi's Portfolio</title>
    </Head>
  );
};

export default CustomHead;
