export default () => {
  return (
    <>
      <form action="/search" method="get">
        <input id="GET-name" type="text" name="q" style={{ marginRight: '5px'}} />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};
