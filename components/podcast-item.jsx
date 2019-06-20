export default (props) => {
  const {
    title,
    description,
    url
  } = props.podcast;

  return (
    <>
      <h2>{title}</h2>
      <a href={`/episodes?podcast_url=${url}`}>{'Latest Episodes'}</a>
      <p>{description}</p>
    </>
  );
};
