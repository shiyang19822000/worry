Component({
  externalClasses: ['wr-class'],

  properties: {
    articleList: {
      type: Array,
      value: [],
    },
    id: {
      type: Number,
      value: 0,
      observer: (id) => {
        this.genArticleId(id);
      },
    },
    /*thresholds: {
      type: Array,
      value: [],
    },*/
  },

  data: {
    // articleId: '',
  },

  lifetimes: {
    ready() {
      this.init();
    },
  },

  methods: {
    onClickArticles(e) {
      const { index } = e.currentTarget.dataset;
      this.triggerEvent('click', { ...e.detail, index });
    },

    onAddCart(e) {
      const { index } = e.currentTarget.dataset;
      this.triggerEvent('addcart', { ...e.detail, index });
    },

    onClickGoodsThumb(e) {
      const { index } = e.currentTarget.dataset;
      this.triggerEvent('thumb', { ...e.detail, index });
    },

    init() {
      this.genArticleId(this.id || 0);
    },

    genArticleId(id) {
      this.setData({ articleId: id });
    },
  },
});
