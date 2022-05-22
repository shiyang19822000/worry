import { config } from '../../config/index';

/** 获取Explicit商品列表 */
async function getExplicitArticleList(pageIndex = 1, pageSize = 20)
{
  const { getExplicitArticleList } = require('../../model/worry/worries');
  return getExplicitArticleList(pageIndex, pageSize);
}


/** 获取列表 */
export function fetchArticleList(pageIndex = 1, pageSize = 20) {
  if (!config.useMock) {
    return getExplicitArticleList(pageIndex, pageSize);
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}

/** 获取文章 */
export function fetchArticle(articleId) {
  const { getArticle } = require('../../model/worry/worries');
  return getArticle(articleId);
}
