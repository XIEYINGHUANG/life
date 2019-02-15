
const BASE_URL = `https://locally.uieee.com/`
/***
 * 封装的发送请求的方法
*/
export default fetch = (url,data={},method="GET")=>{
  return new Promise((resolve,reject)=>{
    //发送异步请求
    wx.request({
      url: `${BASE_URL}${url}`,
      data,
      method,
      success:res=>{
          resolve(res)
      },
      fail:res=>{
        reject(err)
      }
    })
  })
}



