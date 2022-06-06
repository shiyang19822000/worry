import { config, serviceBase, cdnBase } from "../../config/index";

/** 获取数据 */
function mockFetchHome() {
  const { delay } = require("../_utils/delay");
  const { genSwiperImageList } = require("../../model/swiper");
  return delay().then(() => {
    return {
      swiper: genSwiperImageList(),
      tabList: [
        {
          text: "精选推荐",
          key: 0,
        },
      ],
      activityImg: `${cdnBase}/activity/banner.png`,
    };
  });
}

/** 获取首页数据 */
export function fetchHome() {
  if (!config.useMock) {
    return mockFetchHome();
  }

  return new Promise((resolve) => {
    resolve("real api");
  });
}
