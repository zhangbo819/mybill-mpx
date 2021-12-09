import { createPage } from '@mpxjs/core'

const KEY = "MPX_BILL_KEY"
type dataItem = string

createPage({
  onLoad() {
    // onLoad
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
