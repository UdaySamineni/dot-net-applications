
import Angular = require("../../typings/angular");

export class MainController implements Angular.IController {
    static $inject: string[] = [];

    productId: number;
    isProductDetailsEnabled: boolean;

    constructor() { }

    getProductDeatailsById(productId: number) {
        this.isProductDetailsEnabled = false;
        if (this.productId !== productId) {
            this.productId = productId;
            this.isProductDetailsEnabled = true;
        } else {
            this.productId = null;
        }
    }
}