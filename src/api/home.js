import  request  from '../utils/request'


export function getHomeMultidata() {
    return request({
        url:'/home/multidata'
    })
}


// import axios from '../utils/request'

// export function getHomeMultidata() {
//     return axios({
//       url: '/home/multidata'
//     })
//   }