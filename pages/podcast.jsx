import React from "react";
import EpisodeItem from "../components/episode-item";
import { read } from '@extractus/feed-extractor'

const PodcastPage = ({ episodes, title }) => {
  return (
    <>
      <h1>{title}</h1>
      {episodes.length ? (
        episodes
          .slice(0, 10)
          .map((episode, i) => <EpisodeItem key={i} episode={episode} />)
      ) : (
        <div>{"No Episodes"}</div>
      )}
    </>
  );
};

PodcastPage.getInitialProps = async ({ query }) => {
  const podcastURL = query.url;
  if (podcastURL) {
    let feed = await read(podcastURL, {
      getExtraEntryFields: (feedEntry) => {
        const { enclosure, pubDate } = feedEntry;
        return {
          pubDate, 
          enclosure: {
            url: enclosure['@_url'],
            type: enclosure['@_type'],
            length: enclosure['@_length']
          },
          url: enclosure['@_url']
        }
      }
    });
    return {
      episodes: feed.entries,
      title: feed.title,
    };
  }

  return { episodes: [], title: "" };
};

export default PodcastPage;
