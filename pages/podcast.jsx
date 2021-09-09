import React from "react";
import EpisodeItem from "../components/episode-item";
import Parser from "rss-parser";
const parser = new Parser();

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
    let feed = await parser.parseURL(podcastURL);
    return {
      episodes: feed.items,
      title: feed.title,
    };
  }

  return { episodes: [], title: "" };
};

export default PodcastPage;
