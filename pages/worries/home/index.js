import { fetchHome } from '../../../services/worry/worryHome';
import { fetchArticleList } from '../../../services/worry/fetchArticles';

Page({
  data: {
    imgSrcs: [],
    tabList: [],
    articleList: [],
    articlesLoadStatus: 0,
    pageLoading: false,
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    navigation: { type: 'dots' },
  },

  articleListPagination: {
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
    if (this.data.articlesLoadStatus === 0) {
      this.loadArticleList();
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
    let pageIndex =
      this.privateData.tabIndex * pageSize + this.articleListPagination.index + 1;

    if (fresh) {
      pageIndex = 0;
    }

    try {
      const nextList = await fetchArticleList(pageIndex, pageSize);
      this.setData({
        articleList: fresh ? nextList : this.data.articleList.concat(nextList),
        articlesLoadStatus: 0,
      });

      this.articleListPagination.index = pageIndex;
      this.articleListPagination.num = pageSize;
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
