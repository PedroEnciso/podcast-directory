// returns a div holding all podcast HTML info

export const Podcast = (podcast) => {
  const container = document.createElement("div");

  const title = document.createElement("h2");
  title.innerText = podcast.episodeTitle;
  container.appendChild(title);

  const date = document.createElement("p");
  date.innerText = podcast.date;
  container.appendChild(date);

  const link = document.createElement("a");
  link.href = podcast.url;
  link.target = "_blank";
  link.innerText = "View pod details";
  container.appendChild(link);

  return container;
};
