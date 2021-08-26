import Head from 'next/head';
import PropTypes from 'prop-types';
import { SITE_NAME } from './meta';

export default function Title({ title }) {
  const finalTitle = title ? `${title} · ${SITE_NAME}` : SITE_NAME;

  return (
    <Head>
      <title key="title">{finalTitle}</title>
      <meta key="title-meta" property="og:title" content={finalTitle} />
    </Head>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};
