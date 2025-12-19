"use client";
import { GetStrapiURL } from '@/app/utils/get-strapi-url';
import '../../globals.css';
import "./Reviews.css";
import React from "react";
import { Slice } from 'lucide-react';

type Review = {
  pfp: {url:string}
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
  productId: number;
};

//Function to calculate next id
function getNextReviewId(reviews: Review[]): number {
  if (reviews.length === 0) return 1;
  const maxId = Math.max(
    ...reviews.map(r => (r.reviewId !== null ? r.reviewId : 0))
  );
  return maxId + 1;
}

//Default profile picture
const DEFAULT_PFP = "/images/reviewDefault.jpg";

interface ReviewsProps {
  reviews: Review[];
  productId: number;
}

export default function Reviews({ reviews, productId }: ReviewsProps) {
    const [allReviews, setAllReviews] = React.useState<Review[]>(reviews);
    const [sortOrder, setSortOrder] = React.useState<"default" | "newest" | "oldest">("default");

    const handleReviewSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const form = e.currentTarget.closest("form");
        if (!form) return;

        const formData = new FormData(form);
        const name = formData.get("reviewerName")?.toString();
        const comment = formData.get("reviewComment")?.toString();

        if (!name || !comment) {
            alert("Please fill in your name and comment!");
            return;
        }

        const newReview: Review = {
            reviewId: 0,
            pfp: DEFAULT_PFP,
            reviewerName: name,
            rating: Number(formData.get("rating") || 3),
            comment,
            date: new Date().toISOString().split("T")[0],
            productId: Number(formData.get("productId")),
        };

        try {
            const res = await fetch("/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newReview),
            });

            if (res.ok) {
                console.log("Review saved successfully");
                setAllReviews(prev => [...prev, newReview]);
                setSortOrder("newest"); //new comments always appear at the top
                form.reset(); 
            }
        } catch (err) {
            console.error("Error saving review:", err);
        }
    };

    const sortedReviews = React.useMemo(() => {
        if (sortOrder === "default") return allReviews;

        return [...allReviews].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            if (sortOrder === "newest") {
            return dateB - dateA; //newest first
            }

            if (sortOrder === "oldest") {
            return dateA - dateB; //oldest first
            }

            return 0;
        });
    }, [allReviews, sortOrder]);

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
                    {allReviews.length} Reviews
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
                    name="reviewerName"
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
                    name="reviewComment"
                    placeholder="Share your thoughts"
                    className="border border-[#E8ECEF] md:border-0 rounded-full md:rounded-none
                            bg-white focus-visible:ring-0 flex-1
                            px-4 text-sm placeholder:text-gray-400 !h-10"
                />

                {/* Hidden product ID */}
                <input
                    type="hidden"
                    name="productId"
                    value={productId}
                />

                {/* Hidden date */}
                    <input
                    type="hidden"
                    name="date"
                    value={new Date().toISOString()}
                />

                {/* Rating - to be removed */}
                <input type="hidden" name="rating" value={3} />

                {/* Button INSIDE FRAME on Desktop, separated on Mobile */}
                <button
                    type="button"
                    onClick={handleReviewSubmit}
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
                <p>{allReviews.length} Reviews</p>
            </div>

            <div className="dropdown">
                <select onChange={(e) =>setSortOrder(e.target.value as "default" | "newest" | "oldest")}>
                    <option value="default">Default</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>            
                </select>
            </div>
        </div>

        <div className="comments-section">
            <div className="comments-container">

                {sortedReviews.length > 0 ? (
                  sortedReviews.map((r, index) => (
                    <React.Fragment key={index}>
                    <div className="comment-card">
                        <div className="comment-up">
                            <div className="profile-pic">
                                <img src={GetStrapiURL().slice(0, GetStrapiURL().length - 1)+ r.pfp.url} alt={r.reviewerName} />
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

            {allReviews.length > 0 && (
                <button className="load-btn">Load More</button>
            )}
        </div>
    </section>
  );
}