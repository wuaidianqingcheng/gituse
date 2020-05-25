import {
    get,
    post
} from './axiosRequest';
// 测试数据
export const HomeData = params => get("/read/motor/list", params);