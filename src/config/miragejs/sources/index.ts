import {
  filmePopular,
  filmeNowPlaying,
  filmeTopRated,
  filmeUpcoming,
} from "./filmes";

import { seriePopular, serieTopRated } from "./series";

const sources = {
  filmes: (type: string) => {
    switch (type) {
      case "popular":
        return filmePopular;
      case "nowPlaying":
        return filmeNowPlaying;
      case "topRated":
        return filmeTopRated;
      case "upcoming":
        return filmeUpcoming
    }
  },
  series: {
    popular: seriePopular,
    topRated: serieTopRated,
  },
};


export { sources };
