import Head from "next/head";

interface CustomHeadProps {
  page: string;
}

const CustomHead = ({ page }: CustomHeadProps) => {
  return (
    <Head>
      <title>{page} | Eunbi&apos;s Portfolio</title>
    </Head>
  );
};

export default CustomHead;
