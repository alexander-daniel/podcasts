export default () => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center' }}>

      <a href="/" style={{ textDecoration: 'none', color: 'black' }}>
        <h2 style={{ cursor: 'pointer', marginRight: '10px' }}>
          {'podcasts 📻🎙'}
        </h2>
      </a>

      <form action="/search" method="get">
        <input id="GET-name" type="text" name="q"/>
        <input type="submit" value="Search" />
      </form>
    </nav>
  );
};
