import puppeteer from "puppeteer";

const urls = [
  "https://www.podbean.com/podcast-detail/x4gn6-297bd1/JavaScript-Jabber-Podcast",
  "https://www.podbean.com/podcast-detail/qje84-567f6/Syntax---Tasty-Web-Development-Treats-Podcast",
];

// returns the 10 most recent episodes from podcastsin urls (Javascript Jabber and Syntax)
export const getEpisodes = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      let episodeList = [];

      for (const url of urls) {
        await page.goto(url);

        let episodes = await page.evaluate(() => {
          return Array.from(document.querySelectorAll("tr")).map((item) => ({
            url: item.querySelector(".title.listen-now").getAttribute("href"),
            episodeTitle: item.querySelector(".title.listen-now").innerText,
            podcastTitle: document.querySelector(".tit").innerText,
            date: item.querySelector(".datetime").innerText,
          }));
        });
        episodeList = episodeList.concat(episodes);
      }
      browser.close();
      return resolve(episodeList);
    } catch (e) {
      return reject(e);
    }
  });
};
