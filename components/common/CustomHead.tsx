import Head from "next/head";

interface CustomHeadProps {
  page: string;
}

const CustomHead = ({ page }: CustomHeadProps) => {
  return (
    <Head>
      <title>{page} | Eunnbi.dev</title>
    </Head>
  );
};

export default CustomHead;
