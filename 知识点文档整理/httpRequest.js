import axios from 'axios'
//生产和开发环境对应基本地址切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://dev.xxx.com'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://prod.xxx.com'
}
// 请求头信息是为post请求设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.timeout = 10000;
// const API = axios.cretate({
// 	timeout:10000
// 	
// })

// 封装请求
// get
export class get( url,params = {} ){
	return new Promise( ( resolve,rejected ) => {
		axios.get( url,{ params })
			.then( res => {
				resolve(res)
			})
			.catch( err => {
				console.log( err )
			})
	})
	
}
// post
export class post ( url, params = {} ) {
	return new Promise( (resolve,rejected ) => {
		axios.post( url, { data : params })
			.then( res => {
				resolve( res )
			}).catch( err => {
				console.log( err )
			})
	})
}