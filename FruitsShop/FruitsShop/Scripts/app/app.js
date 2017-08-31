"use strict";
//import * as angular from "../typings/angular";
var productdetailscomponent_js_1 = require("./components/product-details/productdetailscomponent.js");
var productservice_js_1 = require("./services/productservice.js");
var MainController_js_1 = require("./controllers/MainController.js");
var app = angular.module("application", []);
app.component("productDetails", new productdetailscomponent_js_1.ProductDetailsComponent());
app.service("ProductService", productservice_js_1.ProductService);
app.controller("MainController", MainController_js_1.MainController);
//# sourceMappingURL=app.js.map