// 禁止默认事件
window.forbidScroll = function (e) {
  e.preventDefault()
}

window.setTitle = (title) => {
  document.title = title
  // 下方代码目的是为了兼容iphone更换
  var mobile = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(mobile)) {
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.setAttribute('src', '//cdn.it919.cn/image/req.gif')
    var iframeCallback = function () {
      setTimeout(function () {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
      }, 0)
    }
    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  }
}
