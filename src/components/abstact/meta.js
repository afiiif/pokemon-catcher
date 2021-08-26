import Head from 'next/head';

export const AUTHOR = 'Muhammad Afifudin';
export const SITE_NAME = 'Pokémon Catcher';
export const DESCRIPTION = 'Pokémon Catcher';
export const KEYWORDS = 'Pokémon, Catcher, Game, Pokeball, Pikachu';
export const THEME_COLOR = '#ffffff';

export default function Meta() {
  return (
    <Head>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <meta name="author" content={AUTHOR} />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="theme-color" content={THEME_COLOR} />
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
    </Head>
  );
}