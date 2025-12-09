"use client";
import '../../globals.css';
import "./ProductCard.css";
import "../QuantityButton/quantitybutton";
import { useState } from "react";
import QuantityButton from '../QuantityButton/quantitybutton';

type Product = {
  image: { url: string };
  productName: string;
  productDescription: string;
  price: number;
  measurements: string;
  colour: string[];
  reviewsCount: number;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const images = [
    "/images/prodImg1.jpg",
    "/images/prodImg2.jpg",
    "/images/prodImg3.jpg",
  ];
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colour[0]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="product-page">
            <div className="product-card">
                <div className="product-left">
                    <div className="carousel">
                        <img 
                            src={images[currentIndex]} 
                            alt={product.productName} 
                            className="carousel-image" 
                        />

                        <button className="nav-button left" onClick={prevImage}>
                            <i className="fas fa-arrow-left"></i>
                        </button>

                        <button className="nav-button right" onClick={nextImage}>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>

                    <div className="thumbnail-container">
                        {images.map((img, index) => (
                            <img
                            key={index}
                            src={img}
                            alt={product.productName}
                            className="thumbnail"
                            />
                        ))}
                    </div>
                </div>

                <div className="product-right">
                    <div className="upper-right">
                        <div className="product-info">
                            <div className="reviews">
                                <div className="stars">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                                <div className="num-reviews">
                                    {product.reviewsCount || 0} Reviews
                                </div>
                            </div>
                            <h2 className="product-name">{product.productName}</h2>
                            <p className="product-description">{product.productDescription}</p>
                        </div>

                        <p className="price">$ {product.price.toFixed(2)}</p>
                    </div>
                    <hr className="divider" />

                    <div className="lower-right">
                        <div className="measurement-container">
                            <h4 className="sub-title ">Measurements</h4>
                            <p className="measurement">{product.measurements} "</p>
                        </div>

                        <div className="color-container">
                            <h4 className="sub-title">Choose Color ⟩</h4>
                            <p className="choosen-color">{selectedColor}</p>

                            <div className="colors">
                                {product.colour.map((color, index) => (
                                <label key={index} className="color-option">
                                    <input
                                    type="radio"
                                    name="color"
                                    value={color}
                                    checked={selectedColor === color}
                                    onChange={() => setSelectedColor(color)}
                                    />
                                    <span
                                    className={`circle ${selectedColor === color ? "selected" : ""}`}
                                    style={{ backgroundColor: String(color) }}
                                    ></span>
                                </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="btn-container">
                        <QuantityButton  width={127} height={56} quantity={2}/>
                        <button className="cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div> 
    </section>
  );
}
