// Country name change animation

document.addEventListener("DOMContentLoaded", function () {
    const countryNames = ["INDIA", "GERMANY", "CANADA", "CHINA", "JAPAN", "CHILE"];
    const countryName = document.querySelector(".country-name");
    let currentIndex = 0;

    setInterval(function () {
        countryName.textContent = countryNames[currentIndex];
        currentIndex = (currentIndex + 1) % countryNames.length;
    }, 1500);
});



// Login Validation

function checkLog() {
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var pass = document.getElementById("pass").value;


    
    if (email === "" || pass === "" ) {
      alert("Please fill in all fields.");
     
    }else if(atpos<1){
        alert("Please enter valid email address.");
    }
    else if(dotpos < atpos + 2){
        alert("Please enter valid email address.");
    }
      else {
      alert("Logged in successfully!");
      $("#loginmodal").modal("hide");
    }
  }
    
// Registration Validation

function checkReg() {
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var phoneno = /^\d{10}$/;
    var birth = document.getElementById("birth").value;
    var varDate = new Date(birth); //dd-mm-YYYY
    var today = new Date();
    var email = document.getElementById("remail").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var regex = /^[A-Za-z]+$/;
    var pass = document.getElementById("rpass").value;


    
    if (name === "" || contact === "" || birth === "" || email === ""|| pass === "") {
      alert("Please fill in all fields."); 
    }
    else if (!name.match(regex))
    {
        alert("Please enter a valid name.");
     }
     else if(!contact.match(phoneno)){
            
        alert("Please enter a valid contact number.");
     }
     else if(varDate >= today) {
        alert("Given date is greater than the current date.");
       
     }
    else if(atpos<1){
        alert("Please enter valid email address.");
    }
    else if(dotpos < atpos + 2){
        alert("Please enter valid email address.");
    }
     
      else {
      alert("Registered Successfully!");
      $("#regmodal").modal("hide");
      
    }
  }

                                          // Checkpoint 2


                                          function checkForm() {
                                            var whereTo = document.getElementById("whereTo").value;
                                            var numberOfPersons = document.getElementById("numberOfPersons").value;
                                            var description = document.getElementById("description").value;
                                            var startDateInput = document.getElementById("startDate").value;
                                            var endDateInput = document.getElementById("endDate").value;
                                      
                                            if (whereTo === "" || numberOfPersons === "" || startDate === "" || endDate === "" || description === "") {
                                              alert("Please fill in all fields.");
                                              return false;
                                            }
                                      
                                            if (startDateInput >= endDateInput) {
                                              alert("End date must be greater than start date");
                                              return false;
                                            } else {
                                              alert("Booking successful!");
                                              return true;
                                            }
                                          }
                                      
                                          