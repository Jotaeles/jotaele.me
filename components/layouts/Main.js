import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../modules/Footer';

const MainLayout = ({ children, ...customMeta }) => {
  const meta = {
    title: 'Luis Sandoval - Frontend Developer.',
    description: 'Luis Sandoval - Frontend Developer at Grupo W.',
    image: 'https://jotaele.me/meta-image.png',
    type: 'website',
    ...customMeta,
  };
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://jotaele.me${router.asPath}`}
        />
        <link rel="canonical" href={`https://jotaele.me${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Luis Sandoval" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jotaeleSandoval" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
