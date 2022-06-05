import { cdnBase } from "../../config/index";
import Contents from "./data";

Page({
  data: {
    contents: Contents,
    content: null,
    title: "",
    image: "",
    store: { isSelected: false },
  },

  onLoad() {
    this.init();
  },

  onShow() {
    this.getTabBar().init();
  },

  onPullDownRefresh() {
    this.init();
  },

  init() {
    this.loadPage();
  },

  loadPage() {
    this.setData({
      title: this.data.contents[0].title,
      image: this.data.contents[0].image,
      content: this.data.contents[0],
    });
  },

  selectAnswerQ3(e) {
    console.log("uuuuuuuuu", e);
    const { storeIndex } = e.currentTarget.dataset;
    //const store = this.data.storeGoods[storeIndex];
    const isSelected = !this.data.store.isSelected;
    console.log("sssssssssss", isSelected);
    const store = this.data.store;
    store.isSelected = isSelected;
    /*if (store.storeStockShortage && isSelected) {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '部分商品库存不足',
      });
      return;
    }*/
    console.log("ddddddddddd", store, isSelected);
    /*this.triggerEvent("selectstore", {
      store,
      isSelected
    });*/
    this.setData({ store: store });
  },
});
