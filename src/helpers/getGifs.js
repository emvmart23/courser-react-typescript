export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=WuFFfRU4N0GyyK0QCIgH7UiY5vBmX0GM&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};

