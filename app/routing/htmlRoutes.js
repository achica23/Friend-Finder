const path = require('path');

module.exports = function (app) {

    app.get(/images/: Image, function (req, res) {
        let image = req.params.image
        res.sendFile(path.join(_dirname, "../../images/" + image));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(_dirname, "../../public/survey.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/home.html"));
    });
}