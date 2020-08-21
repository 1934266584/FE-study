// 设置带cookie
axios.defaults.withCredentials = true;

// 使post发送的是formdata格式数据

// 首先设置请求头
axios.defaults.headers = {
  "Content-Type": "application/x-www-form-urlencoded",
};

// 其次再发送之前需要处理下数据
axios.defaults.transformRequest = [function (data) {
  let newData = '';
  for (let k in data) {
    newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
  }
  return newData;
}]