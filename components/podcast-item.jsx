export default (props) => {
  const {
    title,
    description,
    url
  } = props.podcast;

  return (
    <div style={{ borderBottom: '1px solid black' }}>
      <p>
        <strong>{title}</strong>
        {' - '}
        <a href={`/episodes?podcast_url=${url}`}>{'latest episodes'}</a>
      </p>
      <p>{description}</p>
    </div>
  );
};
