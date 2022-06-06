/** 获取列表 */
export async function fetchArticleList(pageIndex = 1, pageSize = 20) {
  const { getArticleList } = require("../../model/worry/worries");
  return getArticleList(pageIndex, pageSize);
}

/** 获取文章 */
export function fetchArticle(articleId) {
  const { getArticle } = require("../../model/worry/worries");
  return getArticle(articleId);
}
