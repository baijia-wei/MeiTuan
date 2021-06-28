import fetchRequest from "./request";

// 轮博图
export const getBiaoti = (data?:object) => fetchRequest({
    url: '/home/swiper',
    method: 'get',
    params: data
});

// 导航菜单
export const getGroupdata=()=> fetchRequest({
    url:"/home/groups?area=AREA%7C88cff55c-aaa4-e2e0",
    method:"get",
    
})