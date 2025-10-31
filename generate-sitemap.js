// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const SITE_URL = "https://yourdomain.com"; // 🔹 غيّر هذا إلى دومين موقعك

// 🗺️ الأقسام الرئيسية داخل الصفحة الواحدة (SPA)
const sections = [
  "/", // الصفحة الرئيسية
  "/#home",
  "/#about",
  "/#services",
  "/#projects",
  "/#experience",
  "/#testimonials",
  "/#blog",
  "/#contact",
  "/blog",        // صفحة المدونة الرئيسية
  "/search"       // صفحة البحث
];

const sitemap = new SitemapStream({ hostname: SITE_URL });
const writeStream = createWriteStream("./dist/sitemap.xml");

(async () => {
  for (const section of sections) {
    sitemap.write({ url: section, changefreq: "weekly", priority: 0.8 });
  }

  sitemap.end();
  const data = await streamToPromise(sitemap);
  writeStream.write(data);
  console.log("✅ Sitemap generated successfully!");
})();
