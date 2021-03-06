//login.js
//获取应用实例
const api = require('../../utils/api.js');
const app = getApp();
Page({
    data: {
        defaultData: {
            gender: 1
        }
    },
    onLoad: function (options) {
    },
    authorLogin: function (e) {
      var uinfo = e.detail.userInfo;
      if (uinfo == undefined || uinfo == null) {
        wx.showToast({
          title: '您点击了拒绝授权,将无法正常显示个人信息,请重新点击授权登录',
          icon: 'none',
          duration: 2000
        })
      } else {
        app.authorLogin(e)
      }
    }
})
