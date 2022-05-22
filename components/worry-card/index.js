Component({
  options: {
    addGlobalClass: true,
  },

  properties: {
    /*id: {
      type: String,
      value: '',
      observer(id) {
        this.genArticleId(id);
        if (this.properties.thresholds?.length) {
          this.createIntersectionObserverHandle();
        }
      },
    },*/
    data: {
      type: Object,
      observer(data) {
        if (!data) {
          return;
        }
        // let isValidityLinePrice = true;
        // if (data.originPrice && data.price && data.originPrice < data.price) {
        //   isValidityLinePrice = false;
        // }
        // isValidityLinePrice = false;
        // this.setData({ articles: data, isValidityLinePrice });
      },
    },
    /*currency: {
      type: String,
      value: '¥',
    },*/

    /*thresholds: {
      type: Array,
      value: [],
      observer(thresholds) {
        if (thresholds && thresholds.length) {
          this.createIntersectionObserverHandle();
        } else {
          this.clearIntersectionObserverHandle();
        }
      },
    },*/
  },

  data: {
    // articleId: '',
    // article: { id: '' },
    // isValidityLinePrice: false,
  },

  lifetimes: {
    ready() {
      this.init();
    },
    detached() {
      this.clear();
    },
  },

  pageLifeTimes: {},

  methods: {
    clickHandle() {
      this.triggerEvent('click', { article: this.properties.data });
    },

    clickThumbHandle() {
      this.triggerEvent('thumb', { article: this.properties.data });
    },

    addCartHandle(e) {
      const { id } = e.currentTarget;
      const { id: cardID } = e.currentTarget.dataset;
      this.triggerEvent('add-cart', {
        ...e.detail,
        id,
        cardID,
        article: this.data.article,
      });
    },

    genArticleId(id) {
      let articleId;
      if (id) {
        articleId = id;
      } else {
        articleId = `worry-card-${~~(Math.random() * 10 ** 8)}`;
      }
      this.setData({ articleId });
    },

    init() {
      const { data, articleId } = this.properties;
      this.genArticleId(data.art_id);
      //if (thresholds && thresholds.length) {
        //this.createIntersectionObserverHandle();
      //}
    },

    clear() {
      this.clearIntersectionObserverHandle();
    },

    intersectionObserverContext: null,

    createIntersectionObserverHandle() {
      console.log('createIntersectionObserverHandle11111111');
      if (this.intersectionObserverContext || !this.properties.data.art_id) {
        console.log('createIntersectionObserverHandle');
        return;
      }
      this.intersectionObserverContext = this.createIntersectionObserver({
        thresholds: this.properties.thresholds,
      }).relativeToViewport();

      this.intersectionObserverContext.observe(
        `#${this.properties.data.art_id}`,
        (res) => {
          this.intersectionObserverCB(res);
        },
      );
    },

    intersectionObserverCB() {
      this.triggerEvent('ob', {
        article: this.properties.data,
        context: this.intersectionObserverContext,
      });
    },

    clearIntersectionObserverHandle() {
      if (this.intersectionObserverContext) {
        try {
          this.intersectionObserverContext.disconnect();
        } catch (e) {}
        this.intersectionObserverContext = null;
      }
    },
  },
});
