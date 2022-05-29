
export function getStrapiURL(path = "") {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
  }
  
  export async function fetchData(path) {
      const res = await fetch(getStrapiURL(path));
      return (
          await res.json()
          );  
  }
  
  export function convertToSlug(Text) {
      return Text.toString().toLowerCase()
                  .replace(/[^\w ]+/g, '')
                  .replace(/ +/g, '-');
    }