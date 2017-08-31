using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using FruitsShop.Models;
using FruitsShop.Repositories;

namespace FruitsShop.Controllers.API
{
    public class ProductController : ApiController
    {
        [HttpGet]
        //GET "api/Product/{id}",
        public ProductDetails GetProdutDetails([FromUri]int id)
        {
            ProductRepository repository = new ProductRepository();
            var products = repository.LoadProducts();
            return products.FirstOrDefault(x => x.ProductId == id);
        }
    }
}
