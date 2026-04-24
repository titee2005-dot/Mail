// src/AllGalleryPage.jsx
import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";

const GALLERY_TABS = [
  { id: "all", label: "All" },
  { id: "stage", label: "Stage" },
  { id: "event", label: "Event" },
  { id: "meme", label: "Meme" },
  { id: "fanart", label: "Fanart" },
  { id: "behind", label: "Other" },
];

const GALLERY_ITEMS = [
/*  {
    id: 1,
    src: "/rose-about.jpg",
    label: "Debut Stage",
    category: "event",
    credit: "Rollzy_Bunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-1"
  },
  {
    id: 2,
    src: "/rose-hero.jpg",
    label: "Halloween",
    category: "event",
    credit: "Rollzy_Bunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  },
    {
    id: 8,
    src: "/hwpic1.JPG",
    label: "Halloween",
    category: "event",
    credit: "Rollzy_Bunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  }, 
  {
    id: 9,
    src: "/hwpic3.JPG",
    label: "Halloween",
    category: "event",
    credit: "Rollzy_Bunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  }, 
  {
    id: 10,
    src: "/hwpic4.JPG",
    label: "Halloween",
    category: "event",
    credit: "BNK_Story",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  }, 
 {
    id: 3,
    src: "/memepic1.JPG",
    label: "Meme",
    category: "meme",
    credit: "BNK_Story",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  },
   {
    id: 4,
    src: "/hachicha1.JPG",
    label: "Hachicha",
    category: "event",
    credit: "RollzyBunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-1"
  },
  {
    id: 5,
    src: "/hachicha3.JPG",
    label: "Hachicha",
    category: "event",
    credit: "RollzyBunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  },
 {
    id: 6,
    src: "/jx1.JPG",
    label: "JapanExpo",
    category: "event",
    credit: "RollzyBunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  },
  {
    id: 7,
    src: "/press2.JPG",
    label: "Shock Me Girls Press Conference",
    category: "event",
    credit: "RollzyBunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  },
  {
    id: 11,
    src: "/press1.JPG",
    label: "Shock Me Girls Press Conference",
    category: "event",
    credit: "RollzyBunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  },
 {
    id: 12,
    src: "/memepic2.JPG",
    label: "Hachicha",
    category: "meme",
    credit: "RollzyBunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  },
   {
    id: 13,
    src: "/memepic3.JPG",
    label: "Busking",
    category: "meme",
    credit: "RollzyBunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  },
   {
    id: 14,
    src: "/buskinggroup.JPG",
    label: "Busking",
    category: "event",
    credit: "RollzyBunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  },
   {
    id: 15,
    src: "/busking1.JPG",
    label: "Busking",
    category: "event",
    credit: "RollzyBunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  },
   {
    id: 16,
    src: "/busking2.JPG",
    label: "Busking",
    category: "event",
    credit: "RollzyBunny",
    link: "https://ลิงก์เพจเจ้าของภาพ-2"
  },
  */
]; 

function AllGalleryPage() {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // เอฟเฟกต์ reveal ตอนเข้า section
  useEffect(() => {
    const elements = document.querySelectorAll(".section-reveal");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // เล่นครั้งเดียวพอ
          }
        });
      },
      { threshold: 0.1 } // ถ้าอยากให้โผล่เร็วขึ้น ลดเป็น 0.1 ก็ได้
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // อันนี้ที่หายไป
  const filteredItems =
    activeTab === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="app-root gallery-page-root">
      <Navbar />

      <main className="page-section gallery-page-bg">
        <div className="page-section-inner section-reveal">
          
          {/* 🌟 เพิ่มปุ่ม Back to Home สไตล์เดียวกับ View More */}
          <div className="gallery-back-wrapper">
            <a href="/" className="pink-back-btn">
              ← Back to Home
            </a>
          </div>

          {/* 🌟 ปรับ Header เป็นสไตล์ Pink Pastel */}
          <header className="pink-section-header">
            <h2>All Gallery</h2>
            <p style={{ color: "#a07c89", fontSize: "0.95rem", margin: "8px 0 0", textAlign: "center", fontWeight: "500" }}>
              ❀ รวมภาพความประทับใจทั้งหมด ❀
            </p>
            <div className="pink-line"></div>
          </header>

          {/* Tabs */}
          <div className="gallery-tabs">
            {GALLERY_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={
                  "gallery-tab" +
                  (activeTab === tab.id ? " gallery-tab--active" : "")
                }
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-page-grid">
            {filteredItems.map((item) => (
              <figure key={item.id} className="gallery-card">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-card-link"
                >
                  <div className="gallery-card-thumb">
                    <img
                      src={item.src}
                      alt={item.label}
                      className={`gallery-img img-${item.id}`}
                    />
                    <div className="gallery-card-overlay">
                      <div className="gallery-card-text">
                        <div className="gallery-card-title">{item.label}</div>
                        {item.credit && (
                          <div className="gallery-card-credit">
                            By {item.credit}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              </figure>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
  <p className="footer-line1">-`♡´- Fansite Project made by BNK_Story</p>
  <p className="footer-line2">Original Content & Artist © by Independent Artist Management (iAM).</p>
</footer>
    </div>
  );
}

export default AllGalleryPage;
