import { config } from '../../config/index';

/** 获取Mock商品列表 */
function getMockArticleList(pageIndex = 1, pageSize = 20) {
  const { delay } = require('../_utils/delay');
  const { getGoodsList } = require('../../model/goods');
  return delay().then(() =>
    getGoodsList(pageIndex, pageSize).map((item) => {
      return {
        spuId: item.spuId,
        thumb: item.primaryImage,
        title: item.title,
        price: item.minSalePrice,
        originPrice: item.maxLinePrice,
        tags: item.spuTagList.map((tag) => tag.title),
      };
    }),
  );
}

/** 获取Explicit商品列表 */
async function getExplicitArticleList(pageIndex = 1, pageSize = 20)
{
  const { getExplicitArticleList } = require('../../model/worry/worries');
  return getExplicitArticleList(pageIndex, pageSize);
}


/** 获取列表 */
export function fetchArticleList(pageIndex = 1, pageSize = 20) {
  if (config.useMock) {
    return getMockArticleList(pageIndex, pageSize);
  }
  if (!config.useMock) {
    return getExplicitArticleList(pageIndex, pageSize);
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
