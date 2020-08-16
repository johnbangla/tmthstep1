import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
  
// baseURL: "http://192.168.0.102:9000/api",
  // baseURL: "http://127.0.0.1:8000/api",
  baseURL: "http://johnreactnative.pythonanywhere.com/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;


//  const  John = (data) => {
// //POST request 
// fetch('http://johnreactnative.pythonanywhere.com/api/posings/', {
//   method: "POST",//Request Type 
//   body: data,//post body 
//   headers: {//Header Defination 
//    // 'Content-Type': 'application/json',
//     //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//     'Content-Type': 'multipart/form-data'
//   },
// })
// .then((response) => response.json())
// //If response is in json then in success
// .then((responseJson) => {
    
// console.log(response)

// })

//  }

// export default John;