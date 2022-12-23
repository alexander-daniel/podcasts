export default (props) => {
  const {
    title,
    description,
    pubDate,
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
      <small>{date.toDateString()}</small>
      <p>{description}</p>
      <audio preload="none" controls src={enclosure.url || url } style={{ width: '100%' }} />
    </>
  );
};
