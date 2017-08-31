using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FruitsShop.Models;

namespace FruitsShop.Repositories
{
    public class ProductRepository
    {
        public ProductRepository() { }

        public List<ProductDetails> LoadProducts()
        {
            return new List<ProductDetails>
            {
                new ProductDetails
                {
                    Name = "Apple",
                    QuantityAvailable = 10,
                    ProductId = 1
                },
                new ProductDetails
                {
                    Name = "Orange",
                    QuantityAvailable = 20,
                    ProductId = 2
                }
            };
        }
    }
}