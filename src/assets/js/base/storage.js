export default {
  set (key, value) {
    if (arguments.length < 2) throw new Error('arguments\'s length is less than two')
    let actCode = window.actCode || 'noActCode'
    let data = {}
    data['key'] = value
    console.log(window.userOpenId)
    window.sessionStorage.setItem(actCode + window.userOpenId + '_' + key, JSON.stringify(data))
  },
  get (key) {
    if (arguments.length < 1) throw new Error('arguments\'s length is less than one')
    let actCode = window.actCode || 'noActCode'
    let stringfyData = window.sessionStorage.getItem(actCode + window.userOpenId + '_' + key)
    if (stringfyData) {
      return JSON.parse(stringfyData)['key']
    } else {
      return null
    }
  }
}
