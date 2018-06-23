import Vue from 'vue'
// 前端校验身份证日期
Vue.prototype.checkIDCardDate = (dateStr) => {
  if (dateStr.indexOf('长期') >= 0) return true
  dateStr = dateStr.replace(/\D/g, '')
  if (dateStr.length < 16) return false
  let dateArr = [dateStr.substring(8, 12), dateStr.substring(12, 14), dateStr.substring(14, 16)]
  if (dateArr.length < 3) {
    return false
  } else {
    let timeStamp = new Date(dateArr[0], dateArr[1], dateArr[2]).getTime() - 7 * 24 * 60 * 60 * 1000
    let nowTime = new Date().getTime()
    return timeStamp > nowTime
  }
}
