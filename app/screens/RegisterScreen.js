import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import { ErrorMessage,Form,FormField,SubmitButton,} from "../components/forms";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import routes from  '../navigation/routes';



const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});




function RegisterScreen({navigation}) {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

//r and rd
const  handleSubmit =({ username,email, password })=> {
  //POST json 
  var dataToSend = {username: username,email:email, password: password};
  //making data to send on server
  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  //POST request 
  fetch('http://johnreactnative.pythonanywhere.com/api/register/', {
    method: "POST",//Request Type 
    body: formBody,//post body 
    headers: {//Header Defination 
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
  })
  .then((response) => response.json())
  //If response is in json then in success
  .then((responseJson) => {
      
    
  const bresult = JSON.stringify(responseJson)   //Step 1: respose data converted into string array
  //alert(result)
  var myJsonObj = JSON.parse(bresult);   //Step 2: parse to get object
   result = myJsonObj.user.username       //Step 3 : Object Dot field name 
   result = result.toString()              //Step 4: Convert string of the result toString()
   alert("Congratulation" + result + "registered")
    
   if(result) navigation.navigate(routes.LOGIN)

   //if (!result) return setLoginFailed(true);

  //   setLoginFailed(true);
  //   auth.logIn(result);    //sending token to  auth login method
 
  })
  //If response is not in json then in error
  .catch((error) => {
    // alert(JSON.stringify(error));
    alert('Invalid User/Password')
    //console.error(error);
  });
}


//r and d ok





//The below code was for nodejs api not for Django
  // const handleSubmit1 = async (userInfo) => {
  //   const result = await registerApi.request(userInfo);

  //   if (!result.ok) {
  //     if (result.data) setError(result.data.error);
  //     else {
  //       setError("An unexpected error occurred.");
  //       console.log(result);
  //     }
  //     return;
  //   }

  //   const { data: authToken } = await loginApi.request(
  //     userInfo.email,
  //     userInfo.password
  //   );
  //   auth.logIn(authToken);
  // };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Form
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCorrect={false}
            icon="account"
            name="username"
            placeholder="Name                                                         "
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email                                                          "
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password                                                                         "
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
