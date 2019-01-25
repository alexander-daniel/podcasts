export default (props) => {
  const {
    title,
    pubDate,
    contentSnippet,
    url,
    enclosure,
  } = props.episode;

  if (!enclosure && !url) {
    return null;
  }

  return (
    <div style={{ padding: '0px 0px 20px 0px', borderBottom: '1px solid black' }}>
      <p>
        <strong>{title}</strong>
      </p>
      <p>{pubDate}</p>
      <p>{contentSnippet}</p>

      <audio preload="none" controls src={enclosure.url || url } style={{ width: '100%' }} />
    </div>
  );
};
