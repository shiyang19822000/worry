export async function getArticleList(offset = 0, limit = 10) {
  const { fetchArticleList } = require("./worry");
  const request = await fetchArticleList(offset, limit);
  return request.data.results;
}

export async function getArticle(articleId) {
  const { fetchArticle } = require("./worry");
  const request = await fetchArticle(articleId);
  return request.data.results;
}
