import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getAllProduct } from "./Apis/Apis";

const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

function formatTitleForUrl(title) {
  return title.replace(/\s+/g, "-").replace(/:/g, "");
}

function generateSiteMap(products) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${products
        .map((product) => {
          return `
        <url>
          <loc>${`https://www.luxurybubblebasket.com/Product/${formatTitleForUrl(
            product.title
          )}`}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
      `;
        })
        .join("")}
    </urlset>
  `;
}

function SiteMap() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getAllProduct();
        setProductData(response.data);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sitemapXml = generateSiteMap(productData);

  return (
    <div>
      <Helmet>
        <title>Sitemap</title>
        <link rel="canonical" href="https://www.luxurybubblebasket.com/sitemap.xml" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <pre>{sitemapXml}</pre>
      )}
    </div>
  );
}

export default SiteMap;
