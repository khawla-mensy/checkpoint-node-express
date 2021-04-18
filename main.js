const express = require("express");
const app = express();
const port = 4000;
const timeCheck = (req, res, next) => {
    const time = new Date();
    if (
        time.getDay() == 0 ||
        time.getDay() == 6 ||
        time.getHours() < 9 ||
        time.getHours() > 17
    ) {
        return res.sendFile(__dirname + "/myapp/closeTime.html");
    }
    next();
};

app.use("/home|/services|/contact", timeCheck);

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/myapp/index.html");
});
app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/myapp/style.css");
});
app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/myapp/services.html");
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/myapp/contact.html");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
