// src/sitemapGenerator.js
import { createSitemap } from "sitemap";
import { getAllProduct } from "./Apis/Apis";


const formatTitleForUrl = (title) => {
  return title.replace(/\s+/g, '-').replace(/:/g, '');
};

export const generateSitemap = async () => {
  const products = await getAllProduct();

  // Debugging: Log the products to the console

  const urls = products?.data?.map((product) => ({
    url: `/product/${formatTitleForUrl(product?.title)}`, // Adjust according to your product URL structure
    changefreq: "daily",
    priority: 0.8,
  }));

  const sitemap = createSitemap({
    hostname: "https://www.luxurybubblebasket.com/",
    cacheTime: 600000, // 600 sec (10 min) cache purge period
    urls,
  });

  return sitemap.toString();
};
