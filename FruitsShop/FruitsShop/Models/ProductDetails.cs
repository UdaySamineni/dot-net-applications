using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FruitsShop.Models
{
    public class ProductDetails
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public int QuantityAvailable { get; set; }
    }
}