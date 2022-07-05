import { fetchHome } from "../../../services/worry/worryHome";
import { fetchWorryList } from "../../../services/worry/worries";

Page({
  data: {
    imgSrcs: [],
    tabList: [],
    articleList: [],
    articlesLoadStatus: 0,
    pageLoading: false,
    current: 0,
    pageCount: 0,
    autoplay: true,
    duration: 500,
    interval: 5000,
    navigation: { type: "dots" },
  },

  articleListPagination: {
    index: 0,
    num: 10,
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
    if (this.data.current <= this.data.pageCount) {
      let currentPage = this.data.current + 1;
      this.setData({
        current: currentPage,
      });
      this.loadArticleList();
    } else {
      wx.showToast({
        title: "暂无更多数据",
        icon: "none",
      });
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
      this.loadArticleList(true);
    });
  },

  tabChangeHandle(e) {
    this.privateData.tabIndex = e.detail;
    this.loadArticleList(true);
  },

  onReTry() {
    this.loadArticleList();
  },

  async loadArticleList(fresh = false) {
    if (fresh) {
      wx.pageScrollTo({
        scrollTop: 0,
      });
    }

    this.setData({ articlesLoadStatus: 1 });
    const pageSize = this.articleListPagination.num;
    let pageIndex = this.data.current * pageSize;

    if (fresh) {
      pageIndex = 0;
    }

    try {
      const dataList = await fetchWorryList(pageIndex, pageSize);
      const nextList = dataList.results;
      this.setData({
        articleList: fresh ? nextList : this.data.articleList.concat(nextList),
        articlesLoadStatus: 0,
        pageCount: Math.ceil(dataList.count / pageSize),
      });

      this.articleListPagination.num = pageSize;
      this.articleListPagination.index = pageIndex;
    } catch (err) {
      this.setData({ articlesLoadStatus: 3 });
    }
  },

  articleListClickHandle(e) {
    const { index } = e.detail;
    //const { articleId } = this.data.articleList[index].art_id;
    let articleId = this.data.articleList[index].art_id;
    wx.navigateTo({
      url: `/pages/worries/article/index?articleId=${articleId}`,
    });
  },
});
