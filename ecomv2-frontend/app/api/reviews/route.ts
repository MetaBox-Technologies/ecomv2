import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type Review = {
  reviewId: number;
  pfp: string;
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
  productId: number;
};

export async function POST(req: NextRequest) {
  const body = await req.json();

  const filePath = path.join(process.cwd(), "public", "dummyReviews.json");

  let reviews: Review[] = [];

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    reviews = JSON.parse(data);
  } catch {
    reviews = [];
  }

  const maxId = reviews.length
    ? Math.max(...reviews.map(r => r.reviewId ?? 0))
    : 0;

  const newReview: Review = {
    ...body,
    reviewId: maxId + 1, 
    date: new Date().toISOString().split("T")[0], 
  };

  reviews.push(newReview);

  fs.writeFileSync(filePath, JSON.stringify(reviews, null, 2), "utf-8");

  return NextResponse.json(newReview);
}


