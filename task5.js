function filterAndDiscountProducts(products, minPrice, maxPrice) {
    const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    const discountedProducts = filteredProducts.map(product => ({ ...product, price: product.price * 0.9 }));
    return discountedProducts;
  }
const products = [
    { name: 'Яблуко', price: 50 },
    { name: 'Манго', price: 150 },
    { name: 'Ананас', price: 200 },
    { name: 'Помідори', price: 140 },
    { name: 'Папайя', price: 350 },
  ];
const filteredAndDiscountedProducts = filterAndDiscountProducts(products, 100, 350);
console.log(filteredAndDiscountedProducts);
    