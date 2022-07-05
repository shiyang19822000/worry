export async function getTroubleList(offset = 0, limit = 10) {
  const { fetchArticleList } = require("./trouble");
  const request = await fetchArticleList(offset, limit);
  return request.data;
}

export async function getTrouble(worryId) {
  const { fetchArticle } = require("./trouble");
  const request = await fetchArticle(worryId);
  return request.data.results;
}
