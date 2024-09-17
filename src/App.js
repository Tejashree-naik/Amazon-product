import React from "react";

// Sample product data with a local image
const product = {
  title:
    "Maybelline New York Mascara, No-clumping, Fanning Brush, Waterproof, Lash Sensational, Black, 9ml",
  rating: 4.1,
  reviewsCount: 4204,
  purchasesLastMonth: 800,
  price: 355,
  mrp: 510,
  discountPercentage: 30,
  deliveryInfo: "Get it by Tomorrow, 13 September",
  deliveryType: "FREE Delivery by Amazon",
  seller: "RK World Infocom Pvt Ltd",
  images: [
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
  ],
};

// Rating component to display star symbols
const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, index) => {
    if (index < fullStars) return "★"; // Full star
    if (index === fullStars && hasHalfStar) return "✩"; // Half star
    return "☆"; // Empty star
  });
  return <span>{stars.join(" ")}</span>;
};

const ProductDetail = () => {
  const {
    title,
    rating,
    reviewsCount,
    purchasesLastMonth,
    price,
    mrp,
    discountPercentage,
    deliveryInfo,
    deliveryType,
    seller,
    images,
  } = product;

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "20px auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Product Image */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={images[0]}
          alt="Product"
          style={{
            maxWidth: "100%",
            maxHeight: "300px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* Product Details */}
      <div>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>{title}</h2>

        <p
          style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}
        >
          <RatingStars rating={rating} /> {rating} out of 5 stars (
          {reviewsCount} reviews)
        </p>

        <p style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
          {purchasesLastMonth} bought in the past month
        </p>

        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#B12704",
            marginBottom: "10px",
          }}
        >
          ₹{price}{" "}
          <span style={{ textDecoration: "line-through", color: "#888" }}>
            ₹{mrp}
          </span>{" "}
          ({discountPercentage}% off)
        </p>

        <p style={{ marginBottom: "10px" }}>
          <strong>Delivery:</strong> {deliveryInfo}
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>{deliveryType}</strong>
        </p>

        <p style={{ marginBottom: "20px" }}>
          <strong>Sold by:</strong> {seller}
        </p>

        {/* Add to Cart Button */}
        <button
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            backgroundColor: "#ff9900",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
