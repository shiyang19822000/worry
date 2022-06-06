/** 获取列表 */
export async function fetchTroubleList(pageIndex = 1, pageSize = 20) {
  const { getArticleList } = require("../../model/worry/worries");
  return getArticleList(pageIndex, pageSize);
}
