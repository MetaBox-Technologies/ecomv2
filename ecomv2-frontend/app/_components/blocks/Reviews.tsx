"use client";
import '../../globals.css';
import "./Reviews.css";
import React from "react";

type Review={
    pfp: { url: string };
    reviewerName:string;
    comment:string;
}

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <section className="reviews-section">
        <hr className="divider" />
        <div className="upper-reviews">
            <h2>Customer Reviews</h2>
            <div className="reviews">
                <div className="stars">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <div className="num-reviews">
                    11 Reviews
                </div>
            </div>
            <p className="prod-name">Tray Table</p>
        </div>

        <div className="reviews-form">
            <form className="input-wrapper">
                <input type="text" placeholder="Share your thoughts" />
                <button type="submit" className="review-btn">
                    <span className="text">Write Review</span>
                    <i className="fas fa-arrow-right icon"></i>
                </button>
            </form>
        </div>

        <div className="filter-reviews">
            <div className="total-reviews">
                <p>11 Reviews</p>
            </div>

            <div className="dropdown">
                <select>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Default</option>
                </select>
            </div>
        </div>

        <div className="comments-section">
            <div className="comments-container">
            {reviews.map((r, index) => (
                <React.Fragment key={index}>
                    <div className="comment-card" key={index}>
                        <div className="comment-up">
                            <div className="profile-pic">
                                <img src={r.pfp.url} alt={r.reviewerName} />
                            </div>

                            <div className="comment-info">
                                <h3 className="reviewer-name">{r.reviewerName}</h3>
                                <p className="ratings"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                            </div>
                        </div>

                        <div className="comment-down">                       
                            <p className="comment">{r.comment}</p>
                        </div>        
                    </div>    
                    <hr className="comment-divider" />
                </React.Fragment>
            ))}
            </div>
            <button className="load-btn">Load More</button>
        </div>
    </section>
  );
}