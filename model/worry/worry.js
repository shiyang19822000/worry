import { serviceBase } from '../../config/index';
import { allGoods } from '../good';

export function fetchMockArticleList(id, available = 1) {
  const specID = ['135681624', '135681628'];
  if (specID.indexOf(id) > -1) {
    return allGoods.filter((good) => good.spuId === id)[0];
  }
  const item = allGoods[id % allGoods.length];
  return {
    ...item,
    spuId: `${id}`,
    available: available,
    desc: item?.desc || defaultDesc,
    images: item?.images || [item?.primaryImage],
  };
}

export function fetchExplicitArticleList(offset, limit) {
  const url = `${serviceBase}/article/?offset=${offset}?limit=${limit}`;
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: {},
      header: {
        'content-type': 'application/json',
      },
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
}
