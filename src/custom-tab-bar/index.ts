import { createComponent } from '@mpxjs/core'


createComponent({
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [{
            pagePath: "/pages/BillInput/index",
            iconPath: require("../image/icon_component.png"),
            selectedIconPath: require("../image/icon_component_HL.png"),
            text: "录入"
        }, {
            pagePath: "/pages/List/index",
            iconPath: require("../image/icon_API.png"),
            selectedIconPath: require("../image/icon_API_HL.png"),
            text: "列表"
        }]
    },
    attached() {
        console.log('attached')
    },
    methods: {
        switchTab(e: any) {
            const data = e.currentTarget.dataset
            const url = data.path
            console.log(url)
            wx.switchTab({ url })
            this.setData({
                selected: data.index
            })
        }
    }
})