"use strict";
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent() {
        this.templateUrl = "Scripts/app/components/product-details/ProductDetails.html";
        this.controller = ProductDetailsController;
        this.controllerAs = "$ctrl";
        this.bindings = { productId: "=" };
    }
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
var ProductDetailsController = (function () {
    function ProductDetailsController(productService) {
        this.productService = productService;
    }
    ProductDetailsController.prototype.$onInit = function () {
        if (this.productId !== null && this.productId !== undefined) {
            this.getProductDetails(this.productId);
        }
    };
    ProductDetailsController.prototype.getProductDetails = function (productId) {
        var _this = this;
        this.productService.getProdutDetails(productId).then(function (response) {
            _this.product = response.data;
        });
    };
    return ProductDetailsController;
}());
ProductDetailsController.$inject = ["ProductService"];
//# sourceMappingURL=productdetailscomponent.js.map