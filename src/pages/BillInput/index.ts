import { createPage } from '@mpxjs/core'


interface event {
  detail: {
    value: string
  }
}

const KEY = "MPX_BILL_KEY"
const now = new Date()


createPage({
  onLoad() {
    // onLoad
  },
  data: {
    amount: '0',
    detail: '',
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
    datas: []
  },
  created() {
    wx.getStorage({
      key: KEY,
      success: (res) => {
        console.log(res.data);
        this.setData({
          datas: res.data
        })
      }
    })
  },
  methods: {
    bindDateChange(e: event) {
      console.log(e)
      this.date = e.detail.value
    },
    bindKeyInput(e: event) {
      this.setData({
        amount: e.detail.value
      })
    },
    bindKeyDetailInput(e: event) {
      this.setData({
        detail: e.detail.value
      })
    },
    handleSubmit() {
      const { datas } = this.data
      const date = new Date(this.date)

      console.log('1', date, this.date)

      datas.push(`${date.getMonth() + 1}.${date.getDate()}@${this.detail}@${this.amount}`)
      wx.setStorage({
        key: KEY,
        data: datas
      })

      this.setData({
        amount: '0',
        detail: ''
      })
    }
  }
})

