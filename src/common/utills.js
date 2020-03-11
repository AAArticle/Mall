// 防抖动函数
export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

//转换时间戳
export function formatDate(date, fmt) {
  //1.获取年份
  // y+ -正则，匹配一次或多次的y  y-年份
  if (/(y+)/.test(fmt)) {
    //substr进行截取
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  //2.月等信息
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

//把不是两位的时分秒补充为两位数
function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}
