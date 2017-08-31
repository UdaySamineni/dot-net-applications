"use strict";
var ProductService = (function () {
    function ProductService($http) {
        this.$http = $http;
    }
    ProductService.prototype.getProdutDetails = function (productId) {
        var promise = this.$http({
            url: "/api/Product/" + productId,
            method: "GET"
        });
        return promise;
    };
    ProductService.prototype.getProdutDetailsByQuantity = function (productId, quantity) {
        var promise = this.$http({
            url: "/api/Product/" + productId + "?" + quantity,
            method: "GET"
        });
        return promise;
    };
    return ProductService;
}());
ProductService.$inject = ["$http"];
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map