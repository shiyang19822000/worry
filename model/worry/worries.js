export async function getWorryList(offset = 0, limit = 10) {
  const { fetchArticleList } = require("./worry");
  const request = await fetchArticleList(offset, limit);
  return request.data;
}

export async function getWorry(worryId) {
  const { fetchArticle } = require("./worry");
  const request = await fetchArticle(worryId);
  return request.data.results;
}
