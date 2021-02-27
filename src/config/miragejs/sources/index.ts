import {
  filmePopular,
  filmeNowPlaying,
  filmeTopRated,
  filmeUpcoming,
} from "./filmes";

import { seriePopular, serieTopRated } from "./series";

const sources = {
  filmes: {
    popular: filmePopular,
    nowPlaying: filmeNowPlaying,
    topRated: filmeTopRated,
    upcoming: filmeUpcoming,
  },
  series: {
    popular: seriePopular,
    topRated: serieTopRated,
  },
};

export { sources };
