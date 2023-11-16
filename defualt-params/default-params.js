function calculateTotal(products = [], discountPercentage, salesTax = 0.82) {

  console.log(products, "***************** PRODUCTS *****************");
  console.log(salesTax, "***************** SALES TAX *****************");
  console.log(discountPercentage, "***************** DISCOUNT *****************");

  // let result = 0;
  // for (let i = 0; i < products.length; i++) {
  //   const { priceInCents, quantity } = products[i];
  //   result += priceInCents * quantity;
  // }

  // if (discountPercentage) result *= 1 - discountPercentage;
  // return result * (1 + salesTax);
}

// Inputs
const products = [
  {
    name: "Black Longline T-Shirt",
    priceInCents: 1500,
    size: "M",
    quantity: 2,
  },
  {
    name: "Light Wash Stretch Skinny Jeans",
    priceInCents: 6000,
    size: 32,
    quantity: 1,
  },
];
const options = { discountPercentage: 0.1 };

calculateTotal(products, { discountPercentage: 0.1 });

