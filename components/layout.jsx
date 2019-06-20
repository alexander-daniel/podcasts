import Head from 'next/head'
import Header from './search-header';
import '../style.css';

export default (props) => {
  return (
    <>
      <Head>
        <title>pod</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href={'/static/favicon.ico'} />
      </Head>
      <Header />
      { props.children }
      <p>Thanks to <a href="https://gpodder.net" target="_blank">@gpodder</a> for the search</p>
      <p>MIT license | <a href="https://git.sr.ht/~alexanderdaniel/pod" target="_blank">git src</a></p>
      <p>{'2019 cedarcedar'}</p>
    </>
  );
};
