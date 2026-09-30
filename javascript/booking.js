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