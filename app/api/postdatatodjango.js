const  John = (data) => {
    alert('hi')
    //POST request 
    fetch('http://johnreactnative.pythonanywhere.com/api/posings/', {
      method: "POST",//Request Type 
      body: data,//post body 
      headers: {//Header Defination 
       // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
       // 'Content-Type': 'multipart/form-data'
      },
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
        
    console.log(response)
    
    })
    
     }
    
    export default John;