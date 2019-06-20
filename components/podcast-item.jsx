export default (props) => {
  const {
    title,
    description,
    url
  } = props.podcast;

  return (
    <div style={{ borderBottom: '1px solid black' }}>
      <h2>{title}</h2>
      <a href={`/episodes?podcast_url=${url}`}>{'Latest Episodes'}</a>
      <p>{description}</p>
    </div>
  );
};
