import Head from "next/head";
import { FC } from "react";

const MetaHead: FC = () => {
  const description =
    "This portfolio is designed using a powerful combination of Next.js, React, TypeScript, Styled Components, and Tailwind CSS. ";
  const title = "Owais Ansari | Front End Developer";

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/public/owais.jpg"></link>
      <meta name="description" content={description} key="description" />
      <meta name="twitter:title" content={title} key="twi:title" />
      <meta
        name="twitter:description"
        content={description}
        key="twi:description"
      />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:title" content={title} key="og:title" />
    </Head>
  );
};

export default MetaHead;
