function validateme() {
     var name = document.getElementById("name").value;
     var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
     var phone = document.getElementById("phone").value;

      if(name === ""){
          alert("PLease enter your Name");
          return false;
      } else if (email == ""){
          alert("Please enter your Email Address");
          return false;
      } else if (password == ""){
          alert("Please enter your Password");
          return false;
      }else if (phone == ""){
          alert("Please enter your Phone Number");
          return false;
      } else{
          return true;
      }

     

}