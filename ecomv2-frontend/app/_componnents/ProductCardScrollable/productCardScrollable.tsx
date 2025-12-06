import { Card } from "../shopPage/Card";
import  Link  from "next/link";
import { getNewArticles } from "@/app/data/loaders";
import "./css/productCardScrollable.css"

export async function ProductCardScrollable(){
    const newArrivals =  await getNewArticles().then(response => response.data);
    
    return (<div className="new-arrivals">
      <div className="title-breadscrumbs">
        <h3 className="title">New<br/>Arrival</h3>
        <Link href={"/shop"}>
            <p>More product</p>
            <p className="material-symbols-outlined">arrow_right_alt</p>
        </Link>
      </div>
      <div className="prod-list__scrollable ">
        {[...newArrivals, ...newArrivals, ...newArrivals].map((prod, index)=><Card key={prod.id + index} {...prod} isOnHome={true} ></Card>)}
      </div>
    </div>)
}