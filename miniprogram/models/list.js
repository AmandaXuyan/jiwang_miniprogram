import { formatDurationToStr, formatDateTime } from '../utils/dateTimeUtil'

export default class listModel {
  

  static getGoalList(userId) {
    return wx.cloud.callFunction({
      name: 'getGoalList',
      data: {
        userId
      }
    })
  }


  static formatGoalList(list) {
    let wholeTime = 0
    list.forEach(goal => {
      goal.lastUpdate = formatDateTime(goal.lastUpdate)
      wholeTime += goal.time
      goal.duration = formatDurationToStr(goal.time)
      goal.time = (goal.time / (60 * 60 * 1000)).toFixed(3) // 用于饼状图数据
    })
    return { list, wholeTime: formatDurationToStr(wholeTime) }
  }

  
}
