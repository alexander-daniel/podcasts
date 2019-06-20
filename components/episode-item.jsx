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

  const date = new Date(pubDate);

  return (
    <>
      <h2>{title}</h2>
      <date>{date.toDateString()}</date>
      <p>{contentSnippet}</p>
      <audio preload="none" controls src={enclosure.url || url } style={{ width: '100%' }} />
    </>
  );
};
