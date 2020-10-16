const API_KEY = "4a3b711b";

const apiService = {
  getMovie: async (searchValue = "avengers") => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
};

export default apiService;
