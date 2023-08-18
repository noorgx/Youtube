import axios from "axios";
const base_url = "https://youtube-v31.p.rapidapi.com";
export const options = {
  params: {
    maxResults: "51",
  },
  headers: {
    "X-RapidAPI-Key": 'b0dce2644cmshb8b8c49bb5872bdp171b9djsna8bd2a2eac36',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    return data;
  } catch (error) {
    console.log("error in fetch api");
  }
};
export default fetchApi;
