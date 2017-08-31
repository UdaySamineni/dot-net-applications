
import Angular = require("../../../typings/angular");
import { ProductService } from "../../services/ProductService.js";

export class ProductDetailsComponent implements Angular.IComponentOptions {
    templateUrl = "Scripts/app/components/product-details/ProductDetails.html";
    controller = ProductDetailsController;
    controllerAs = "$ctrl";
    bindings: { [name: string]: string } = { productId: "=" };
}

class ProductDetailsController implements Angular.IComponentController {
    static $inject: string[] = ["ProductService"];

    product: Object;
    productId: number;
    constructor(private productService: ProductService) { }

    $onInit(): void {
        if (this.productId !== null && this.productId !== undefined) {
            this.getProductDetails(this.productId);
        }
    }

    getProductDetails(productId: number) {
        this.productService.getProdutDetails(productId).then((response: ng.IHttpPromiseCallbackArg<Object>) => {
            this.product = response.data;
        });
    }
}