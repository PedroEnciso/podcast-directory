import { Podcast } from "./components/Podcast.js";

const url = "http://localhost:5000/api/v1/episodes";
const appElement = document.getElementById("app");

const getData = async () => {
  return fetch(url).then((resp) => resp.json());
};

// input will be strings year-month-day ex. 2023-06-20
// returns 1 if a is newer than b
// returns -1 if b is newer than a
// returns 0 if they are the same age
export const compare = (a, b) => {
  a = a.split("-").map(Number);
  b = b.split("-").map(Number);
  // compare year
  if (a[0] > b[0]) {
    return 1;
  } else if (b[0] > a[0]) {
    return -1;
  }
  // compare month
  if (a[1] > b[1]) {
    return 1;
  } else if (b[1] > a[1]) {
    return -1;
  }
  // compare day
  if (a[2] > b[2]) {
    return 1;
  } else if (b[2] > a[2]) {
    return -1;
  }
  return 0;
};

// sorts podcast objects from most recent to oldest date
export const sortNewestToOldest = (array) => {
  const sorted = [];
  for (let i = 0; i < array.length; i++) {
    let holder = array[0];
    for (let j = 0; j < array.length; j++) {
      if (
        compare(array[j].date, holder.date) === 1 &&
        !sorted.includes(array[j])
      ) {
        holder = array[j];
      } else if (sorted.includes(holder)) {
        holder = array[j];
      }
    }
    sorted.push(holder);
  }
  return sorted;
};

export const findAndCountPodcastTitles = (array) => {
  const Podcast = (podcastTitle) => {
    let count = 1;
    const getPodcastTitle = () => podcastTitle;
    const increment = () => count++;
    const showDetails = () => {
      return {
        count,
        podcastTitle,
      };
    };
    return {
      getPodcastTitle,
      increment,
      showDetails,
    };
  };
  const podcastArray = [];
  array.forEach((episode) => {
    let counted = false;
    podcastArray.forEach((pod) => {
      if (pod.getPodcastTitle() === episode.podcastTitle) {
        pod.increment();
        counted = true;
      }
    });
    if (!counted) {
      const newPodcast = Podcast(episode.podcastTitle);
      podcastArray.push(newPodcast);
    }
  });
  return podcastArray.map((pod) => pod.showDetails());
};

const app = async () => {
  const data = await getData();
  sortNewestToOldest(data).forEach((podcast) =>
    appElement.appendChild(Podcast(podcast))
  );
};

app();
