import { createComponent } from '@mpxjs/core'

const KEY = "MPX_BILL_KEY"
type dataItem = string

createComponent({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  data: {
    datas: [],
    original: []
  },
  created() {
    wx.getStorage({
      key: KEY,
      success: (res) => {
        console.log(res.data);
        this.setData({
          datas: res.data.reverse().map((i: dataItem) => i.split('@')),
          original: res.data
        })
      }
    })
  },
  methods: {
    handleClear() {
      wx.setStorage({
        key: KEY,
        data: []
      })
      this.setData({
        datas: [],
        original: []
      })
    },
    handleCopy() {
      wx.setClipboardData({ data: this.original.map(i => `"${i}"`).join(', \n') })
    }
  }
})
