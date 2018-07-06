SELECT * FROM cart
JOIN products
ON products.id = cart.productID;
