const fetchData = async (searchTerm, type = "all", start = 0) => {
  const searchType = type === "all" ? "search" : "imagesearch";
  const url = `https://google-search72.p.rapidapi.com/${searchType}?q=${searchTerm}&num=12&start=${start}`;
  const options = {
    cache: "no-store",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a3096eba63msh69ff0621ee3695ap1075b2jsn5a8e7127f0f3",
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
