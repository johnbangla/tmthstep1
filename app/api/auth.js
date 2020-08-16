import client from "./client";

//  Note 

const login = (username, password) => client.post("/auth", { username, password });
//const login = (username, password) => client.post({ username, password });

//const login = (email, password) => client.post("/auth", { email, password });






//r and rd
const  mylogin =({ username, password })=> {
  //POST json 
  var dataToSend = {username: username, password: password};
  //making data to send on server
  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  //POST request 
  fetch('http://johnreactnative.pythonanywhere.com/auth/', {
    method: "POST",//Request Type 
    body: formBody,//post body 
    headers: {//Header Defination 
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
  })
  .then((response) => response.json())
  //If response is in json then in success
  .then((responseJson) => {
      
    
  const bresult = JSON.stringify(responseJson)
  //alert(result)
  var myJsonObj = JSON.parse(bresult);
  result = myJsonObj.token
  result = result.toString()
  //alert(result)
 


  if (!result) return setLoginFailed(true);
    setLoginFailed(true);
    auth.logIn(result);    //sending token to  auth login method
 
  })
  //If response is not in json then in error
  .catch((error) => {
    // alert(JSON.stringify(error));
    alert('Invalid User/Password')
    //console.error(error);
  });
}

export default {
  mylogin,
};

//r and d ok