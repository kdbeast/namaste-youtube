export const LIST = [
  "All",
  "Gaming",
  "Songs",
  "Movies",
  "Cricket",
  "Football",
  "Sports",
  "Music",
  "News",
  "Education",
];

const GOOGLE_API_KEY = "AIzaSyBq639m5ogk2jEMG36PtAHDR1ObCS9aHHg";

export const YOUTUBE_VIDEOS_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
