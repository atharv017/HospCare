const infoForm = document.getElementById("form");


infoForm.addEventListener("submit" , ()=> {
    


    const contactData = {
        username : document.getElementById("username").value,
        email : document.getElementById("email").value,
        phoneNo : document.getElementById("phone").value,
        services : document.getElementById("services").value,
        date : document.getElementById("date").value,
        Note : document.getElementById("note").value,
    };
    
    localStorage.setItem("contact" , JSON.stringify(contactData));
    alert("form data saved to browser");

  
});

