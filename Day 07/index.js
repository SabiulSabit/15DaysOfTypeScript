"use strict";
exports.__esModule = true;
//import axios
var axios_1 = require("axios");
//api
var api = "https://jsonplaceholder.typicode.com/todos/1";
//get data from api
axios_1["default"].get(api).then(function (res) {
    console.log(res.data);
})["catch"](function (err) {
    console.log(err);
});
