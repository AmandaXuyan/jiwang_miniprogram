export default class SummaryModel{
  static addGoalRecord(goalId,beginDate,duration,summary){
    return wx.cloud.callFunction({
      name:'addGoalRecord',
      data:{
        goalId,
        beginDate,
        endDate,
        time:duration,
        summary
      }
    })
  }
}