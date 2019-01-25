import Header from './search-header';

export default (props) => {
  return (
    <div style={{ width: '800px', fontFamily: 'sans-serif', fontWeight: 100 }}>
      <Header />
      { props.children }
      <br/>
      <br/>
      <div>thanks to <a href="https://gpodder.net" target="_blank">@gpodder</a> for the metadata</div>
      <div>mit license | <a href="https://git.sr.ht/~alexanderdaniel/pod" target="_blank">git src</a></div>
      <div>{'2019 cedarcedar'}</div>
    </div>
  );
};
