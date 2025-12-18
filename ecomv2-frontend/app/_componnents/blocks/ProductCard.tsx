"use client";
import '../../globals.css';
import "./ProductCard.css";
import "../QuantityButton/quantitybutton";
import{useContext, useRef, useState} from "react";
import QuantityButton from '../QuantityButton/quantitybutton';
import { RootContext } from "@/app/_providers/RootContext";
import { cartloader, pushProductToCart, updateCart} from "../Cart/cartContentLoader";

type Product = {
  id: number;
  documentedId: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: number;
  sku: string | null;
  measurement: string;
  colours: string[];
  reviewsCount: number;
  images: {
    url: string;
    alternativeText: string | null;
  }[];
  stock: number;
  featured: boolean;
  rating: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export interface ProductCardProps {
  product: Product;
}

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: {
    url: string;
    alt: string | null;
  };
  color: string;
};

export default function ProductCard({ product }: ProductCardProps) {
  const images = product.images;
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colours[0]);
  const { cartContent, cartUpdater, isCartOpen } = useContext(RootContext);
  const addToCartBtnRef = useRef<HTMLButtonElement | null>(null);

    const cartItem = (cartContent as CartItem[]).find(
        item => item.id === product.id && item.color === selectedColor
    );
    const isOnCart = !!cartItem;

  const quantity = cartItem ? cartItem.quantity : 0;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

    const pushNewProduct = (productToPush: any) => {
        if (addToCartBtnRef.current) { //Checking if we actually have the button before we use it
            addToCartBtnRef.current.innerText="Added";
        }

        cartUpdater(pushProductToCart(productToPush));

        setTimeout(() => {
            if (addToCartBtnRef.current) {
            addToCartBtnRef.current.innerText="Add to Cart";
            }
            isCartOpen(true);
        }, 200);
    };

    const addToCartHandler = ()=>{
        const storedCart = cartloader(); //retrieves the current cart items (from local storage)

        const productToPush = {
            id: product.id,
            prodName: product.name,
            prodPrice: product.price,
            quantity: 1,
            image: {
            url: product.images[0].url,
            alt: product.images[0].alternativeText || product.name,
            },
            color: selectedColor,
        };

        if (storedCart.length > 0) {
            //Is this product (with this color) already in the cart?
            const cartItems = cartContent as CartItem[]; //make TS understand this is CartItem[]
            const isArticleInside = cartItems.some(
                item => item.id === product.id && item.color === selectedColor
            );

            if(isArticleInside) {
                cartUpdater(updateCart(product.id, 1, selectedColor));

                if(addToCartBtnRef.current) {
                    addToCartBtnRef.current.innerText = "+1";
                }

                setTimeout(() =>{
                    if(addToCartBtnRef.current){
                    addToCartBtnRef.current.innerText = "Add to Cart";
                    }
                }, 200);
            } else {
                pushNewProduct(productToPush);
            }
        } else {
            pushNewProduct(productToPush);
        }
    };

  return (
    <section className="product-page">
            <div className="product-card">
                <div className="product-left">
                    <div className="carousel">
                        <img 
                            src={images[currentIndex].url}
                            alt={images[currentIndex].alternativeText || product.name}
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
                        src={img.url}
                        alt={img.alternativeText || product.name}
                        className="thumbnail cursor-pointer"
                        onClick={() => setCurrentIndex(index)}
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
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-description">{product.description}</p>
                        </div>

                        <p className="price">$ {product.price.toFixed(2)}</p>
                    </div>
                    <hr className="divider" />

                    <div className="lower-right">
                        <div className="measurement-container">
                            <h4 className="sub-title ">Measurements</h4>
                            <p className="measurement">" {product.measurement} "</p>
                        </div>

                        <div className="color-container">
                            <h4 className="sub-title">Choose Color <span className="ml-5">⟩</span></h4>
                            <p className="choosen-color">{selectedColor}</p>

                            <div className="colors">
                                {product.colours.map((color, index) => (
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
                        <QuantityButton
                            quantity={quantity}
                            isOnCart={isOnCart}  
                            productInfo={{
                                id: product.id,
                                color: selectedColor,
                            }}
                            width={127}
                            height={56}
                            onAddNew={() => {
                                const productToPush = {
                                    id: product.id,
                                    prodName: product.name,
                                    prodPrice: product.price,
                                    quantity: 1,
                                    image: {
                                        url: product.images[0].url,
                                        alt: product.images[0].alternativeText || product.name,
                                    },
                                    color: selectedColor,
                                };
                                pushNewProduct(productToPush); //call existing pushNewProduct function
                            }}
                        />
    
                        <button
                            className="cart-btn"
                            ref={addToCartBtnRef}
                            onClick={addToCartHandler}
                            >
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div> 
    </section>
  );
}
