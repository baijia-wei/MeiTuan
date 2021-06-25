let common_url = 'http://157.122.54.189:9060';  //服务器地址
let token = '';   
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */

interface Props{
  url:string,
  params?:object,
  method:string,
  data?:object
}
  // 后台接口返回参数
　interface Res {
  // 数据
  body:[];
  // 请求是否成功
  description:String
  // 请求状态吗
  status:Number 
}

const fetchRequest=(path:Props)=>{
      //如果网络请求中带有参数
        return new Promise<Res>( (resolve, reject) =>{
            fetch(common_url + path.url, {
              ...path
            }).then((response) => response.json())
                .then((responseData:Res) => {
                    // console.log(responseData);  //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch((err:Error) => {
                    // console.log(err);     //网络请求失败返回的数据        
                    reject(err);
                });
        });
}
export default fetchRequest