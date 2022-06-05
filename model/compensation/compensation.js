import { serviceBase } from "../../config/index";

export function fetchCompensation(compensationId) {
  const url = `${serviceBase}/compensation/${compensationId}`;
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
