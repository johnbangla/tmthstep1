
//Main concept
// const data = new FormData();
// data.append("title", listing.title);
// data.append("price", listing.price);
// data.append("categoryId", listing.category.value);
// data.append("description", listing.description);

// listing.images.forEach((image, index) =>
//   data.append("images", {
//     name: "image" + index,
//     type: "image/jpeg",
//     uri: image,
//   })
// );

// if (listing.location)
//   data.append("location", JSON.stringify(listing.location));


import client from "./client";
import John from './postdatatodjango';

  const endpoint = "/listings";
  const msgendpoint = "/tmthmessages";
 
  //This is responsible for geeting messages from api

const gettmthmessages = () => client.get(msgendpoint);
  //The above code is respomsible for retrieving messages



const getListings = () => client.get(endpoint);

export const addListing = (listing) => {

  const locations = listing.location
  
  // alert(locations.latitude)
  // alert(locations.longitude)
  
 

//Style 1 deals with text data

//  var dataToSend = 
//  {
   
//   title: listing.title,
//   price:listing.price,
//   category:listing.category.value




// };
//  //making data to send on server
//  var formBody = [];
//  for (var key in dataToSend) {
//    var encodedKey = encodeURIComponent(key);
//    var encodedValue = encodeURIComponent(dataToSend[key]);
//    formBody.push(encodedKey + "=" + encodedValue);
//  }
//  formBody = formBody.join("&");

//   fetch('http://johnreactnative.pythonanywhere.com/api/postings/', {
//     method: "POST",//Request Type 
//     body: formBody,//post body 
//     headers: {//Header Defination 
//      // 'Content-Type': 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//      // 'Content-Type': 'multipart/form-data'
//     },
//   })
//   .then((response) => response.json())
//   //If response is in json then in success
//   .then((responseJson) => {
      
//   console.log(response)
  
//   })


////Style 1 deals with text data


//Style 2 deals with images
const data = new FormData();
data.append("title", listing.title);
// data.append("price", listing.price);
data.append("description", listing.description);
data.append("categoryId", listing.category.value);
data.append("latitude", locations.latitude);    //location
data.append("longitude", locations.longitude);  //location

var photo = {
  uri: listing.images[0],
  type: 'image/jpeg',
  name: 'photo.jpg',
};

data.append("aimage",photo);

// if (listing.location)

  // data.append("location", JSON.stringify(listing.location));



  fetch('http://johnreactnative.pythonanywhere.com/api/postings/', {
    method: "POST",//Request Type 
    body: data,//post body 
    headers: {//Header Defination 
     // 'Content-Type': 'application/json',
      //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
     'Content-Type': 'multipart/form-data'
    },
  })
  .then((response) => response.json())
  //If response is in json then in success
  .then((responseJson) => {

    const bresult = JSON.stringify(responseJson)   //Step 1: respose data converted into string array
  //alert(result)
  //var myJsonObj = JSON.parse(bresult);   //Step 2: parse to get object
  
   
  //alert(myJsonObj)
  //Step 4: Convert string of the result toString()
    

    return bresult;
  //console.log(response)
  
  })



//Style 2 deals with images





  
  //data.append("completed", true);
 
  // data.append("description", listing.description);

  // listing.images.forEach((image, index) =>
  //   data.append("images", {name: "image" + index, type: "image/jpeg", uri: image, })
  // );

 
  //data.append("aimage", {name: listing.images , type: "image/jpeg", uri: image, })


  // data.append("price", listing.price);
  // data.append("categoryId", listing.category.value);
  // data.append("userId", 1);
  // if (listing.location)
  //   data.append("location", JSON.stringify(listing.location));



  // return client.post(endpoint, data, {
  //   onUploadProgress: (progress) =>
  //     onUploadProgress(progress.loaded / progress.total),
  // });
  // console.log(data)
  // return data

//POST json 

//return John(data)


  };//post data to the server




export default {
  addListing,
  getListings,
  gettmthmessages,
};


