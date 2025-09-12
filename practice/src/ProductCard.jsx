function ProductCard() {
  const productName = "Laptop";
  const price = 49999;
  const isAvailable = true;

  return (
    <div>
      <p>Product Name: {productName}</p>
      <p>Price: ₹{price}</p>
      <p> {isAvailable === true ? "Available" : "Out of Stock"}</p>
    </div>
  );
}

export default ProductCard;