import qs from "qs";
import { GetStrapiURL } from "../utils/get-strapi-url";
import { fetchAPI } from "../utils/fetch-api";


const BASE_URL = GetStrapiURL()

const globalSettingsQuery= qs.stringify(
{
    filters: {
      slug: {
        $eq: "shop-page",
      },
    },
    populate: {
      blocks: {
        on: {
          "blocks.hero-banner": {
            populate: {
              backgroundImage:{
                fields: ["url", "alternativeText"],
              },
            }
          }
         }
        }
      }
}
)

export async function getShopPage() {
    const path="/api/pages";
    const url = new URL(path, BASE_URL)
    url.search = globalSettingsQuery;
    return fetchAPI(url.href, { method: "GET" });
}

export async function getContent(path: string,query?: string) {
  const url = new URL(path, BASE_URL);
  url.search = qs.stringify({
    filters: { //gets data based on query,
         product_categories: {
            name: {
              $containsi: query,
            },
         },
    },
    populate: {
      images: {
        fields: ["url", "alternativeText"],
      },
      product_categories: {
      fields: ["name", "slug"],
    },
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}

export async function getProdCategories(path:string) {
  const url = new URL(path, BASE_URL);
  return fetchAPI(url.href, {method: "GET"});
}

export async function getNewArticles(plimit?: number) {
  const url = new URL("/api/products/", BASE_URL);
  url.search=  qs.stringify({
    filters: {
      "createdAt": {$gt: "2025-10-01"}
    },
    populate: {
      images: {
        fields: ["url", "alternativeText"]
      },
    },
    ...(plimit && {
      pagination: {
        pageSize: plimit,
        page: 1
      }
    })
  })

  return fetchAPI(url.href, {method : "GET"})
}

export async function getReviews(){
  const url = new URL('/api/review-webs', BASE_URL);
  const query = qs.stringify({
    populate: {
      productId:{
        fields: ['ProductId'],
      },
      pfp: {
        fields: ["url"]
      },
    },
  })

  url.search = query;
  return fetchAPI(url.href, {method: 'GET'})
}