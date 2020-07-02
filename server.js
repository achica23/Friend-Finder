const express = require('express');
const path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(_dirname, 'images')))

require("/Users/ashleyhaven/Desktop/Friend-Finder/app/routing/apiRoutes.js")(app);
require("/Users/ashleyhaven/Desktop/Friend-Finder/app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log('App listening on PORT ${PORT}');
});
