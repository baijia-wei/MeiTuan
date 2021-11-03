import fetchRequest from "./request";

// 轮博图
export const getBiaoti = () => fetchRequest({
    url: '/home/swiper',
    method: 'get',
});

// 导航菜单
export const getCarousel=()=> fetchRequest({
    url:"/home/swiper",
    method:"get",
    
})
