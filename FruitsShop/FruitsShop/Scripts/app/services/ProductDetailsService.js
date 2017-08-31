"use strict";
var ProductDetailsService = (function () {
    function ProductDetailsService($http) {
        this.$http = $http;
    }
    ProductDetailsService.prototype.getProdutDetails = function (produtId) {
    };
    ProductDetailsService.prototype.getProdutDetailsByQuantity = function (produtId, quantity) {
    };
    return ProductDetailsService;
}());
ProductDetailsService.$static = ["$http"];
//# sourceMappingURL=ProductDetailsService.js.map