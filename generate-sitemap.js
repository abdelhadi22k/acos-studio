// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const SITE_URL = "https://acos-studio.vercel.app"; // ✅ غيره إلى دومينك النهائي عند الإطلاق

const pages = [
  "/",             // الصفحة الرئيسية
  "/#home",
  "/#about",
  "/#services",
  "/#projects",
  "/#experience",
  "/#testimonials",
  "/#blog",
  "/#contact",
  "/blog",         // صفحة المدونة
  "/search"        // صفحة البحث
];

const sitemap = new SitemapStream({ hostname: SITE_URL });
const writeStream = createWriteStream("./dist/sitemap.xml");

(async () => {
  for (const page of pages) {
    sitemap.write({ url: page, changefreq: "weekly", priority: 0.8 });
  }

  sitemap.end();
  const data = await streamToPromise(sitemap);
  writeStream.write(data);
  console.log("✅ Sitemap generated successfully!");
})();
