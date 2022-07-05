import Toast from "tdesign-miniprogram/toast/index";
import { fetchTroubleList } from "../../../services/trouble/troubles";
import { fetchHome } from "../../../services/trouble/troubleHome";

Page({
  data: {
    imgSrcs: [],
    tabList: [],
    troubleList: [],
    troubleListLoadStatus: 0,
    pageLoading: false,
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    navigation: { type: "dots" },
  },

  troubleListPagination: {
    index: 0,
    num: 20,
  },

  privateData: {
    tabIndex: 0,
  },

  onShow() {
    this.getTabBar().init();
  },

  onLoad() {
    this.init();
  },

  onReachBottom() {
    if (this.data.troubleListLoadStatus === 0) {
      this.loadTroubleList();
    }
  },

  onPullDownRefresh() {
    this.init();
  },

  init() {
    this.loadHomePage();
  },

  loadHomePage() {
    wx.stopPullDownRefresh();

    this.setData({
      pageLoading: true,
    });
    fetchHome().then(({ swiper, tabList }) => {
      this.setData({
        tabList,
        imgSrcs: swiper,
        pageLoading: false,
      });
      this.loadTroubleList(true);
    });
  },

  tabChangeHandle(e) {
    this.privateData.tabIndex = e.detail;
    this.loadTroubleList(true);
  },

  onReTry() {
    this.loadTroubleList();
  },

  async loadTroubleList(fresh = false) {
    if (fresh) {
      wx.pageScrollTo({
        scrollTop: 0,
      });
    }

    this.setData({ troubleListLoadStatus: 1 });

    const pageSize = this.troubleListPagination.num;
    let pageIndex =
      this.privateData.tabIndex * pageSize +
      this.troubleListPagination.index +
      1;
    if (fresh) {
      pageIndex = 0;
    }

    try {
      const dataList = await fetchTroubleList(pageIndex, pageSize);
      const nextList = dataList.results;
      this.setData({
        troubleList: fresh ? nextList : this.data.troubleList.concat(nextList),
        troubleListLoadStatus: 0,
      });
      this.troubleListPagination.index = pageIndex;
      this.troubleListPagination.num = pageSize;
    } catch (err) {
      this.setData({ troubleListLoadStatus: 3 });
    }
  },

  troubleListClickHandle(e) {
    const { index } = e.detail;
    const { spuId } = this.data.troubleList[index];
    wx.navigateTo({
      url: `/pages/troubles/article/index?spuId=${spuId}`,
    });
  },

  troubleListAddCartHandle() {
    Toast({
      context: this,
      selector: "#t-toast",
      message: "点击加入购物车",
    });
  },

  navToSearchPage() {
    wx.navigateTo({ url: "/pages/trouble/search/index" });
  },

  navToActivityDetail({ detail }) {
    const { index: promotionID = 0 } = detail || {};
    wx.navigateTo({
      url: `/pages/promotion-detail/index?promotion_id=${promotionID}`,
    });
  },
});
