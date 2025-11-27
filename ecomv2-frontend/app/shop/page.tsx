import Breadcrumbs from "@/app/_componnents/global/BreadCrumbs";
import StarRating from "@/app/_componnents/shopPage/StarRating";
import ReviewForm from "@/app/_componnents/global/StarRatingForm";

export default async function ShopPage() {

  return <div>
              <Breadcrumbs />
              <StarRating rating={3.7}/>
              <ReviewForm/>
         </div>;
}