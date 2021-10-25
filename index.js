fetch("https://air-quality.p.rapidapi.com/current/airquality?lon=-73.00597&lat=40.71427", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "air-quality.p.rapidapi.com",
            "x-rapidapi-key": "6672120cbcmshc0572882b285990p1c05d5jsn50b707427d46"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });