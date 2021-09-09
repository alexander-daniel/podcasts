import React from "react";
import PodcastItem from "../components/podcast-item";
import FAVES from "../podcasts.json";

const FavouritesPage = (props) => {
  const { podcasts } = props;
  return podcasts.map((p, i) => <PodcastItem key={i} podcast={p} />);
};

export async function getStaticProps() {
  return {
    props: {
      podcasts: FAVES,
    },
  };
}

export default FavouritesPage;
