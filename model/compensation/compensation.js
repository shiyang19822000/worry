import { serviceBase } from "../../config/index";

export function fetchCompensations() {
  const url = `${serviceBase}/compensation/compensation_list`;
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
