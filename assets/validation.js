
      function validateForm() {
        // Get the values of the input fields
        var name = document.getElementById("name").value;
        var mobilenumber = document.getElementById("mobilenumber").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;
        var msg1 = document.getElementById("msg1")

        // Check if the name is not empty
        if (name == "") {
          msg1.innerHTML = "Name must be filled out"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }

        //Check if the name contain any number
        if (/\d/.test(name)){
          msg1.innerHTML = "Name must be character"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        // Check if the mobilenumber is not empty
        if (mobilenumber == "") {
          msg1.innerHTML = "Mobile Number must be filled out"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }

        //Check if the mobile number contain any text
        if (isNaN(mobilenumber)){
          msg1.innerHTML = "Mobile Number must be Digits"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        //Check if the mobile number donot have ten digits
        if (mobilenumber.length<10){
          msg1.innerHTML = "Mobile Number must have 10 digits"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        //Check if the mobile number have more than ten digits
        if (mobilenumber.length>10){
          msg1.innerHTML = "Mobile Number must have only 10 digits"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }


        // Check if the email is valid
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
          msg1.innerHTML = "Email must be a valid email address"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }
        // Check if the Subject is not empty 
        if (subject == "") {
          msg1.innerHTML = "Subject must be filled out"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }
        // Check if the Message is not empty 
        if (message == "") {
          msg1.innerHTML = "Message must be filled out"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }
        // If all validations pass, return true to submit the form
        return true;
      }
      