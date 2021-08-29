import Head from 'next/head';

export const AUTHOR = 'Muhammad Afifudin';
export const SITE_NAME = 'Pokémon Catcher';
export const DESCRIPTION = 'Pokémon Catcher is a simple pokemon catching game. You can catch as much as you want. Enjoy!';
export const KEYWORDS = 'Pokémon, Catcher, Game, Pokeball, Pikachu';
export const THEME_COLOR = '#3b82f6';

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
      <meta property="og:image" content="https://pokemoncatcher.vercel.app/images/pokemon-catcher-preview.png" />

      <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />

    </Head>
  );
}
