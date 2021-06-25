import fetchRequest from "./request";
export const getBiaoti = (data?:object) => fetchRequest({
    url: '/home/swiper',
    method: 'get',
    params: data
});