//import * as angular from "../typings/angular";
import { ProductDetailsComponent } from "./components/product-details/productdetailscomponent.js";
import { ProductService } from "./services/productservice.js";
import {MainController} from "./controllers/MainController.js";

var app = angular.module("application", []);

app.component("productDetails", new ProductDetailsComponent());
app.service("ProductService", ProductService);
app.controller("MainController", MainController);