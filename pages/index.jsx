import React from 'react';
import { withRouter } from 'next/router'
import Layout from '../components/layout';
import PodcastItem from '../components/podcast-item';
require('isomorphic-fetch');

const FAVES = [
  {
    title: 'Front Burner',
    description: `Front Burner is your essential daily news podcast, brought to you by CBC News & CBC Podcasts. Every weekday, award-winning investigative journalist Jayme Poisson takes you deep into the stories shaping Canada and the world. Through Jayme’s own reporting and conversations with others in the know, Front Burner will leave you feeling smarter, more connected and eager to share what you've learned.`,
    url: 'https://www.cbc.ca/podcasting/includes/frontburner.xml'
  },
  {
    title: 'Effectively Wild',
    description: 'Baseball statistical analysis and commentary, with Ben, Sam and Meg.',
    url: 'http://www.baseballprospectus.com/blog/daily_podcast/feed.xml'
  },
  {
    title: 'At the Letters',
    description: 'Sportsnet Blue Jays weekly podcast with Arden and Ben',
    url: 'http://feeds.feedburner.com/SN/AtTheLetters'
  }
];

class FavouritesPage extends React.Component {

  static async getInitialProps() {
    return {
      podcasts: FAVES
    }
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

export default withRouter(FavouritesPage);
