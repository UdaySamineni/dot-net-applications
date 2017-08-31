import Angular = require("../../typings/angular");

export class ProductService {
    static $inject: string[] = ["$http"];
    constructor(private $http: Angular.IHttpService) { }

    getProdutDetails(productId: number) {
        var promise = this.$http({
            url: "/api/Product/" +productId,
            method: "GET"
        });
        return promise;
    }

    getProdutDetailsByQuantity(productId: number, quantity: number) {
        var promise = this.$http({
            url: `/api/Product/${productId}?${quantity}`,
            method: "GET"
        });
        return promise;
    }
}