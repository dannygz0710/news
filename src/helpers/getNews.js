export const getNews = async (category) => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=34466eddc4cb4dbfbc0627342cee27a4`;

  const resp = await fetch(url);
  const { articles } = await resp.json();
  console.log(articles);

  return articles;
};
