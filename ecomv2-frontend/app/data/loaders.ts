import qs from "qs";
import { GetStrapiURL } from "../utils/get-strapi-url";
import { fetchAPI } from "../utils/fetch-api";


const BASE_URL = GetStrapiURL()

const globalSettingsQuery= qs.stringify({
  populate: {
    heroBanner: {
      populate: ["backgroundImage"]
    }
  }
},{ encodeValuesOnly: true }
)

export async function getShopPage() {
    const path="/api/shop-page";
    const url = new URL(path, BASE_URL)
    url.search = globalSettingsQuery;
    return fetchAPI(url.href, { method: "GET" });
}

export async function getContent(path: string,query?: string) {
  const url = new URL(path, BASE_URL);
  url.search = qs.stringify({
    filters: { //gets data based on query,
         category: { $containsi: query } 
    },
    populate: {
      images: {
        fields: ["url", "alternativeText"],
      },
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}

export async function getArticles(path:string) {
  const url = new URL(path, BASE_URL);
  return fetchAPI(url.href, {method: "GET"});
}

export async function getNewArticles() {
  const url = new URL("/api/products/", BASE_URL);
  url.search=  qs.stringify({
    filters: {
      "Is_new": {$eq: true}
    },
    populate: {
      images: {
        fields: ["url", "alternativeText"]
      },
    },
  })

  return fetchAPI(url.href, {method : "GET"})
}