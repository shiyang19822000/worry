import { serviceBase } from "../../config/index";

export function fetchArticleList(offset, limit) {
  const url = `${serviceBase}/article?art_category=1&art_status=2&activated=1&offset=${offset}&limit=${limit}`;
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: {},
      header: {
        "content-type": "application/json",
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

export function fetchArticle(articleId) {
  const url = `${serviceBase}/article/${articleId}`;
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: {},
      header: {
        "content-type": "application/json",
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
