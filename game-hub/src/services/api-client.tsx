import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c51c8a359623485083f7b9fe97699b95", // will be included in query string in every HTTP request
  },
});
