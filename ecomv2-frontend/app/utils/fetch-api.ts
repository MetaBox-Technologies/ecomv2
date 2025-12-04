type NextFetchRequestConfig = {
  revalidate?: number | false; //seconds to reupdate the user's cache, false means no revalidation
  tags?: string[]; //what to revalidate 
};

interface FetchAPIOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  authToken?: string; //auth token for protected routes
  body?: Record<string, unknown>; //body for POST/PUT requests (input data)
  next?: NextFetchRequestConfig;
}

export async function fetchAPI(url: string, options: FetchAPIOptions) { //gets the url, method, and other options if provided
  const { method, authToken, body, next } = options; //destructure options

  const headers: RequestInit & { next?: NextFetchRequestConfig } = { //initialize headers
    method, //set method
    headers: {
      "Content-Type": "application/json", //always included
      ...(authToken && { Authorization: `Bearer ${authToken}` }), //include auth, body,next if provided
    },
    ...(body && { body: JSON.stringify(body) }),
    ...(next && { next }),
  };

  try {
    const response = await fetch(url, headers);
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json") && response.ok) { //if response is json and ok
      return await response.json();
    } else {
      return { status: response.status, statusText: response.statusText }; //if response not json or not ok, return status
    }
  } catch (error) {
    console.error(`Error ${method} data:`, error); //if couldn't fetch, log error
    throw error;
  }
}