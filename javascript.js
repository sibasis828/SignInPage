     function clearErrors(){
      errors=document.getElementsByClassName('ferrors');
      for(let item of errors){
        item.innerHTML=""; 
      }
    }
    function seterror(id,error){
      ele=document.getElementById(id);
      ele.getElementsByClassName('ferror')[0].innerHTML=error;
    }
    function validateform(){
      var returnval=true;
      clearErrors(); 

      var name=document.forms['myForm']["fname"].value;
      if(name.length<5){
        seterror("name","*The username you provided must have at least 5 characters");
        returnval=false; 
      }

      var password=document.forms['myForm']["fpassword"].value;
      if(password.length<6){
        seterror("password","*The password you provided must have at least 6 characters");
        returnval=false; 
      }
      return returnval;
    }
  