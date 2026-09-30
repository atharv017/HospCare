const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit" , ()=> {
    
    
    const data = {
        username : document.getElementById("Cusername").value,
        email : document.getElementById("Cemail").value,
        phoneNo : document.getElementById("Cphone").value,
        Note : document.getElementById("Cnote").value,
        Location : document.getElementById("location").value
    };
    
    localStorage.setItem("contactReq" , JSON.stringify(data));
    alert("form data saved to browser");
    
});

const bookingForm = document.getElementById("booking")

bookingForm.addEventListener("submit" , ()=>{

    const Booking = {
        Name : document.getElementById("name").value,
        Email : document.getElementById("bemail").value,
        Contact : document.getElementById("number").value,
        Date : document.getElementById("date").value,
        Time : document.getElementById("time").value,
        Location : document.getElementById("place").value,
        Services : document.getElementById("services").value,
        Doctor : document.getElementById("doctor").value
    };

    localStorage.setItem("Appoiment" , JSON.stringify(Booking));
    alert("Booking Requested");
});


