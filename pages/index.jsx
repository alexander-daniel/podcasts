import React from 'react';
import { withRouter } from 'next/router'
import Layout from '../components/layout';
import PodcastItem from '../components/podcast-item';
require('isomorphic-fetch');

const FAVES = [
  {
    title: 'Effectively Wild',
    description: '',
    url: 'http://www.baseballprospectus.com/blog/daily_podcast/feed.xml'
  },
  {
    title: 'At the Letters',
    description: '',
    url: 'http://feeds.feedburner.com/SN/AtTheLetters'
  },
  {
    title: 'Frontburner',
    description: '',
    url: 'https://www.cbc.ca/podcasting/includes/frontburner.xml'
  },
  {
    title: 'Chopcast',
    description: '',
    url: 'https://feeds.soundcloud.com/users/soundcloud:users:76760907/sounds.rss'
  },
  {
    title: 'Radiolab',
    description: '',
    url: 'http://feeds.wnyc.org/radiolab'
  }
];

class PodcastList extends React.Component {

  static async getInitialProps({ query }) {
    const searchTerm = query.q;

    if (!searchTerm) {
      return {
        podcasts: FAVES
      }
    }

    const url = `https://gpodder.net/search.json?q=${searchTerm}`;

    const res = await fetch(url);
    const json = await res.json();
    return { podcasts: json.sort((a, b) => b.subscribers - a.subscribers) };
  }

  render() {
    const { podcasts, router } = this.props;

    return (
      <Layout>
        {
          !podcasts.length && router.query.q ?
          <div>{'No Results'}</div> :
          podcasts.map((p, i) => <PodcastItem key={i} podcast={p} />)
        }
      </Layout>
    );
  }
}

export default withRouter(PodcastList);
