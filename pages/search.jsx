import React from 'react';
import { withRouter } from 'next/router'
import Layout from '../components/layout';
import PodcastItem from '../components/podcast-item';
require('isomorphic-fetch');

class PodcastList extends React.Component {

  static async getInitialProps({ query }) {
    const searchTerm = query.q;
    if (searchTerm) {
      const url = `https://gpodder.net/search.json?q=${searchTerm}`;
      const res = await fetch(url);
      const json = await res.json();
      return { podcasts: json };
    }

    return {
      podcasts: []
    };
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
