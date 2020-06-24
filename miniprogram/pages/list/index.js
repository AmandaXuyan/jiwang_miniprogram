import ListModel from '../../models/list'
import TimerState from '../../config/timerState'
import { formatDurationToTimer } from '../../utils/dateTimeUtil'

const globalEnv = getApp()
let pie = null

Page({
  data: {
    pieOpt: {},
    userInfo: null,
    goalList: null,
    isUploading: false,
    timerGoalTitle: '',
    timer: '00:00:00',
    timerState: null
  },


  onGoalClick(e) {
    const { goalId } = e.currentTarget.dataset

    wx.navigateTo({
      url: `/pages/detail/index?id=${goalId}`
    })
  },

  
  getGoalList() {
    HomeModel.getGoalList(globalEnv.data.userId).then(
      res => {
        if (!res.result) {
          this.setData({
            goalList: []
          })
          return
        }
        const formattedData = HomeModel.formatGoalList(res.result.data)
        this.setData({
          goalList: formattedData.list,
          wholeTime: formattedData.wholeTime
        })

        this.data.isDataLoaded = true
        if (this.data.isPieInited) {
          this.updatePieOption()
        }
      },
      err => {
        showToast('获取目标列表失败')
      }
    )
  },

  
})
