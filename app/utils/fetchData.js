const fetchData = async (searchTerm, type = "all", start = 0) => {
  const searchType = type === "all" ? "search" : "imagesearch";
  const startNum = Number(start) * 12 || 0;
  const url = `https://google-search72.p.rapidapi.com/${searchType}?q=${searchTerm}&num=12&start=${startNum}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return {
      status: "error",
    };
  }
};

export default fetchData;
