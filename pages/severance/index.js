import Contents from "./data";
import { calculate } from "../../services/severance/calculator";
import { fetchCompensation } from "../../services/severance/fetchCompensations";

Page({
  data: {
    contents: Contents,
    content: null,
    store: {
      q01A01: false,
      q01A02: false,
      q01A03: false,
      q01A04: false,
      q02A01: false,
      q02A02: false,
      q02A03: false,
      q03A01: false,
      q03A02: false,
      q04A01: false,
      q04A02: false,
      q04A03: false,
      q05A01: false,
      q05A02: false,
      q06A01: false,
      q06A02: false,
      q07A01: false,
      q07A02: false,
      q07A03: false,
      q08A01: false,
      q08A02: false,
      q08A03: false,
      q09A01: false,
      q09A02: false,
      q09A03: false,
      q10A01: false,
      q10A02: false,
      q11A01: false,
      q11A02: false,
      isSelected: false,
    },
    programs: {
      n: "",
      n1: "",
      n2: "",
    },
    compensation: "",
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
    this.loadPrograms();
    this.loadPage();
  },

  async loadPrograms() {
    let p = this.data.programs;
    const n = await fetchCompensation(3);
    p.n = n.cpns_content;
    const n1 = await fetchCompensation(1);
    p.n1 = n1.cpns_content;
    const n2 = await fetchCompensation(2);
    p.n2 = n2.cpns_content;

    this.setData({ programs: p });
  },

  loadPage() {
    this.setData({
      content: this.data.contents[0],
    });
  },

  // --------------- Q01 -----------------
  selectAnswerQ1A1(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q01A01;
    const store = this.data.store;
    store.q01A01 = isSelected;
    // console.log("q01A01", store, isSelected);
    if (store.q01A01) {
      store.q01A02 = false;
      store.q01A03 = false;
      store.q01A04 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ1A2(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q01A02;
    const store = this.data.store;
    store.q01A02 = isSelected;
    // console.log("q01A02", store, isSelected);
    if (store.q01A02) {
      store.q01A01 = false;
      store.q01A03 = false;
      store.q01A04 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ1A3(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q01A03;
    const store = this.data.store;
    store.q01A03 = isSelected;
    // console.log("q01A03", store, isSelected);
    if (store.q01A03) {
      store.q01A01 = false;
      store.q01A02 = false;
      store.q01A04 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ1A4(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q01A04;
    const store = this.data.store;
    store.q01A04 = isSelected;
    // console.log("q01A04", store, isSelected);
    if (store.q01A04) {
      store.q01A01 = false;
      store.q01A02 = false;
      store.q01A03 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  // --------------- Q02 -----------------
  selectAnswerQ2A1(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q02A01;
    const store = this.data.store;
    store.q02A01 = isSelected;
    // console.log("q02A01", store, isSelected);
    if (store.q02A01) {
      store.q02A02 = false;
      store.q02A03 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ2A2(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q02A02;
    const store = this.data.store;
    store.q02A02 = isSelected;
    // console.log("q02A02", store, isSelected);
    if (store.q02A02) {
      store.q02A01 = false;
      store.q02A03 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ2A3(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q02A03;
    const store = this.data.store;
    store.q02A03 = isSelected;
    // console.log("q02A03", store, isSelected);
    if (store.q02A03) {
      store.q02A01 = false;
      store.q02A02 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  // --------------- Q03 -----------------
  selectAnswerQ3A1(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q03A01;
    const store = this.data.store;
    store.q03A01 = isSelected;
    // console.log("q03A01", store, isSelected);
    if (store.q03A01) {
      store.q03A02 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ3A2(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q03A02;
    const store = this.data.store;
    store.q03A02 = isSelected;
    // console.log("q03A02", store, isSelected);
    if (store.q03A02) {
      store.q03A01 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  // --------------- Q04 -----------------
  selectAnswerQ4A1(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q04A01;
    const store = this.data.store;
    store.q04A01 = isSelected;
    // console.log("q04A01", store, isSelected);
    if (store.q04A01) {
      store.q04A02 = false;
      store.q04A03 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ4A2(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q04A02;
    const store = this.data.store;
    store.q04A02 = isSelected;
    // console.log("q04A02", store, isSelected);
    if (store.q04A02) {
      store.q04A01 = false;
      store.q04A03 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ4A3(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q04A03;
    const store = this.data.store;
    store.q04A03 = isSelected;
    // console.log("q04A03", store, isSelected);
    if (store.q04A03) {
      store.q04A01 = false;
      store.q04A02 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  // --------------- Q05 -----------------
  selectAnswerQ5A1(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q05A01;
    const store = this.data.store;
    store.q05A01 = isSelected;
    // console.log("q05A01", store, isSelected);
    if (store.q05A01) {
      store.q05A02 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ5A2(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q05A02;
    const store = this.data.store;
    store.q05A02 = isSelected;
    // console.log("q05A02", store, isSelected);
    if (store.q05A02) {
      store.q05A01 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  // --------------- Q06 -----------------
  selectAnswerQ6A1(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q06A01;
    const store = this.data.store;
    store.q06A01 = isSelected;
    // console.log("q06A01", store, isSelected);
    if (store.q06A01) {
      store.q06A02 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ6A2(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q06A02;
    const store = this.data.store;
    store.q06A02 = isSelected;
    // console.log("q06A02", store, isSelected);
    if (store.q06A02) {
      store.q06A01 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  // --------------- Q07 -----------------
  selectAnswerQ7A1(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q07A01;
    const store = this.data.store;
    store.q07A01 = isSelected;
    // console.log("q07A01", store, isSelected);
    if (store.q07A01) {
      store.q07A02 = false;
      store.q07A03 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ7A2(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q07A02;
    const store = this.data.store;
    store.q07A02 = isSelected;
    // console.log("q07A02", store, isSelected);
    if (store.q07A02) {
      store.q07A01 = false;
      store.q07A03 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ7A3(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q07A03;
    const store = this.data.store;
    store.q07A03 = isSelected;
    // console.log("q07A03", store, isSelected);
    if (store.q07A03) {
      store.q07A01 = false;
      store.q07A02 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  // --------------- Q08 -----------------
  selectAnswerQ8A1(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q08A01;
    const store = this.data.store;
    store.q08A01 = isSelected;
    // console.log("q08A01", store, isSelected);
    if (store.q08A01) {
      store.q08A02 = false;
      store.q08A03 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ8A2(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q08A02;
    const store = this.data.store;
    store.q08A02 = isSelected;
    // console.log("q08A02", store, isSelected);
    if (store.q08A02) {
      store.q08A01 = false;
      store.q08A03 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ8A3(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q08A03;
    const store = this.data.store;
    store.q08A03 = isSelected;
    // console.log("q08A03", store, isSelected);
    if (store.q08A03) {
      store.q08A01 = false;
      store.q08A02 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  // --------------- Q09 -----------------
  selectAnswerQ9A1(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q09A01;
    const store = this.data.store;
    store.q09A01 = isSelected;
    // console.log("q09A01", store, isSelected);
    if (store.q09A01) {
      store.q09A02 = false;
      store.q09A03 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ9A2(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q09A02;
    const store = this.data.store;
    store.q09A02 = isSelected;
    // console.log("q09A02", store, isSelected);
    if (store.q09A02) {
      store.q09A01 = false;
      store.q09A03 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ9A3(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q09A03;
    const store = this.data.store;
    store.q09A03 = isSelected;
    // console.log("q09A03", store, isSelected);
    if (store.q09A03) {
      store.q09A01 = false;
      store.q09A02 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  // --------------- Q10 -----------------
  selectAnswerQ10A1(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q10A01;
    const store = this.data.store;
    store.q10A01 = isSelected;
    // console.log("q10A01", store, isSelected);
    if (store.q10A01) {
      store.q10A02 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ10A2(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q10A02;
    const store = this.data.store;
    store.q10A02 = isSelected;
    // console.log("q10A02", store, isSelected);
    if (store.q10A02) {
      store.q10A01 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  // --------------- Q11 -----------------
  selectAnswerQ11A1(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q11A01;
    const store = this.data.store;
    store.q11A01 = isSelected;
    // console.log("q11A01", store, isSelected);
    if (store.q11A01) {
      store.q11A02 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  selectAnswerQ11A2(e) {
    const { storeIndex } = e.currentTarget.dataset;
    const isSelected = !this.data.store.q11A02;
    const store = this.data.store;
    store.q11A02 = isSelected;
    // console.log("q11A02", store, isSelected);
    if (store.q11A02) {
      store.q11A01 = false;
    }
    this.setData({ store: store });
    this.calculator();
  },

  // --------------- Calculator -----------------
  async calculator() {
    this.setData({ compensation: "" });
    let plan = calculate(this.data.store);
    if (plan === "n") {
      // const n = await fetchCompensation(3);
      // this.setData({ compensation: this.data.contents[0].compensations.n });
      this.setData({ compensation: this.data.programs.n });
    }
    if (plan === "n1") {
      const n1 = await fetchCompensation(1);
      // this.setData({ compensation: this.data.contents[0].compensations.n1 });
      // this.setData({ compensation: n1.cpns_content });
      this.setData({ compensation: this.data.programs.n1 });
    }
    if (plan === "n2") {
      const n2 = await fetchCompensation(2);
      // this.setData({ compensation: this.data.contents[0].compensations.n2 });
      // this.setData({ compensation: n2.cpns_content });
      this.setData({ compensation: this.data.programs.n2 });
    }
    // console.log("calculator", this.data.store);
  },

  // --------------- Reset -----------------
  reset(e) {
    const store = this.data.store;
    store.q01A01 = false;
    store.q01A02 = false;
    store.q01A03 = false;
    store.q01A04 = false;
    store.q02A01 = false;
    store.q02A02 = false;
    store.q02A03 = false;
    store.q03A01 = false;
    store.q03A02 = false;
    store.q04A01 = false;
    store.q04A02 = false;
    store.q04A03 = false;
    store.q05A01 = false;
    store.q05A02 = false;
    store.q06A01 = false;
    store.q06A02 = false;
    store.q07A01 = false;
    store.q07A02 = false;
    store.q07A03 = false;
    store.q08A01 = false;
    store.q08A02 = false;
    store.q08A03 = false;
    store.q09A01 = false;
    store.q09A02 = false;
    store.q09A03 = false;
    store.q10A01 = false;
    store.q10A02 = false;
    store.q11A01 = false;
    store.q11A02 = false;

    this.setData({
      compensation: "",
      store: store,
    });
    // console.log("Reset", this.data.store);
  },

  /*
  selectAnswerQ3(e) {
    const { storeIndex } = e.currentTarget.dataset;
    //const store = this.data.storeGoods[storeIndex];
    const isSelected = !this.data.store.isSelected;
    const store = this.data.store;
    store.isSelected = isSelected;
    /!*if (store.storeStockShortage && isSelected) {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '部分商品库存不足',
      });
      return;
    }*!/

    /!*this.triggerEvent("selectstore", {
      store,
      isSelected
    });*!/
    this.setData({ store: store });
  },
  */
});
