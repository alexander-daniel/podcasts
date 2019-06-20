export default () => {
  return (
    <>
      <a href="/" style={{ textDecoration: 'none', color: 'black' }}>
        <h1 style={{ cursor: 'pointer', marginRight: '10px' }}>
          {'Podcasts 📻🎙'}
        </h1>
      </a>

      <form action="/search" method="get">
        <input id="GET-name" type="text" name="q" style={{ marginRight: '5px'}} />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};
