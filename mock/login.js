import Mock from 'mockjs'
// 获取token
Mock.mock('/api/standard/credit/getUserToken', {
  'returnCode': 100000,
  'data': {
    'token': '123456789'
  }
})
