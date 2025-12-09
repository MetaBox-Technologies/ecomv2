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
                    {reviews.length} Reviews
                </div>
            </div>
            <p className="prod-name">Tray Table</p>
        </div>

        <div className="reviews-form w-full">
            <form className="w-full rounded-3xl border border-[#E8ECEF] bg-white p-4
                        md:rounded-ful md:py-2 md:px-4"
            >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4 w-full">

                {/* Name Input */}
                <input
                    type="text"
                    placeholder="Your name"
                    className="border border-[#E8ECEF] md:border-0 rounded-full md:rounded-none
                            bg-white focus-visible:ring-0 
                            px-4 h-10 text-sm placeholder:text-gray-400
                            md:w-32"
                />

                {/* Divider (desktop only) */}
                <div className="hidden md:block w-px h-5 bg-[#E8ECEF]" />

                {/* Comment Input */}
                <input
                    type="text"
                    placeholder="Share your thoughts"
                    className="border border-[#E8ECEF] md:border-0 rounded-full md:rounded-none
                            bg-white focus-visible:ring-0 flex-1
                            px-4 text-sm placeholder:text-gray-400 !h-10"
                />

                {/* Button INSIDE FRAME on Desktop, separated on Mobile */}
                <button
                    type="submit"
                    className="rounded-full w-full md:w-auto h-10 px-6 text-sm font-medium
                            bg-[#0C1120] text-white cursor-pointer
                            transition hover:bg-[#484848]
                            md:ml-auto"
                >
                    Write Review
                </button>

                </div>
            </form>
        </div>

        <div className="filter-reviews">
            <div className="total-reviews">
                <p>{reviews.length} Reviews</p>
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

                {reviews.length > 0 ? (
                reviews.map((r, index) => (
                    <React.Fragment key={index}>
                    <div className="comment-card">
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
                ))
                ) : (
                // This shows only when there are no reviews
                <div className="empty-reviews flex flex-col items-center my-12">
                    <img
                        src="/images/textbubble.png"
                        alt="no reviews img"
                        className="w-[150px] h-auto mb-8"
                    />

                    <p className="text-black font-semibold text-2xl">
                        No reviews yet
                    </p>

                    <p className="text-gray-500 text-base mt-2">
                        Start the conversation.
                    </p>
                </div>
                )}
            </div>

            {reviews.length > 0 && (
                <button className="load-btn">Load More</button>
            )}
        </div>
    </section>
  );
}