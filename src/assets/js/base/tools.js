
export default {
  /**
   * 获取系统名称
   * @return {String} 返回系统名称 ’ios‘ | 'android' | 'other'
   */
  getSystemName () {
    let ua = window.navigator.userAgent
    return (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) ? 'android' : (ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? 'ios' : 'other')
  },
  /**
   * 获取系统版本
   * @return {String} 返回系统版本号，若不是ios或者android系统则返回other
   */
  getSystemVersion () {
    let ua = window.navigator.userAgent
    if (ua.indexOf('CPU iPhone OS ') >= 0) {
      return ua.substring(ua.indexOf('CPU iPhone OS ') + 14, ua.indexOf(' like Mac OS X'))
    } else if (ua.indexOf('Android ') >= 0) {
      return ua.substr(ua.indexOf('Android ') + 8, 3)
    } else {
      return 'other'
    }
  }
}
