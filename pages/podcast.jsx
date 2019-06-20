import React from 'react';
import { withRouter } from 'next/router'
import Layout from '../components/layout';
import EpisodeItem from '../components/episode-item';
const Parser = require('rss-parser');
const parser = new Parser();
require('isomorphic-fetch');

class PodcastPage extends React.Component {
  static async getInitialProps({ query }) {
    const podcastURL = query.url;
    if (podcastURL) {
      let feed = await parser.parseURL(podcastURL);
      return {
        episodes: feed.items,
        title: feed.title
      };
    }

    return { episodes: [], title: '' }
  }

  render() {
    const { episodes, title } = this.props;

    return (
      <Layout>
        <h1>{title}</h1>
        {
          episodes.length ?
          episodes.slice(0, 10).map((episode, i) => <EpisodeItem key={i} episode={episode}/>) :
          <div>{'No Results'}</div>
        }
      </Layout>
    );
  }
}

export default withRouter(PodcastPage);
