"use strict";
var MainController = (function () {
    function MainController() {
    }
    MainController.prototype.getProductDeatailsById = function (productId) {
        this.isProductDetailsEnabled = false;
        if (this.productId !== productId) {
            this.productId = productId;
            this.isProductDetailsEnabled = true;
        }
        else {
            this.productId = null;
        }
    };
    return MainController;
}());
MainController.$inject = [];
exports.MainController = MainController;
//# sourceMappingURL=MainController.js.map