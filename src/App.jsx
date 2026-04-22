import "./App.css";
import Navbar from "./Navbar.jsx";
import EventsSection from "./EventsSection.jsx";
import { useState, useEffect, useRef } from "react";
import FouitaInstagramFeed from "./FouitaInstagramFeed.jsx";




/* ตัวช่วยห่อแต่ละ section ให้พื้นหลังเต็มจอ แต่เนื้อหาอยู่กลาง */
function PageSection({ id, tone, children }) {
  return (
    <section id={id} className={`page-section page-section--${tone}`}>
      <div className="page-section-inner section-reveal">
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero-image-section" id="home">

      {/* รูปพื้นหลังเต็มจอ */}
      <div
        className="hero-image-bg"
        style={{ backgroundImage: "url('/Mail-cover5.JPG')" }}
      />

      {/* ชั้นทับมืดบาง ๆ */}
      <div className="hero-image-overlay" />

      {/* ข้อความกลางจอแบบสวย ๆ */}
      <div className="hero-image-content">
        <h1 className="hero-name-main fade-in-main">Mail BNK48</h1>
        <h2 className="hero-name-sub fade-in-sub">Sidaporn Lintaworndee</h2>
      </div>
    </section>
  );
}

function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="pink-about-container">
      {/* หัวข้อด้านบนแบบ Minimal */}
      <div className="pink-about-header">
        <h2>About</h2>
        <div className="pink-line"></div>
      </div>

      <div className="pink-about-content">
        {/* กรอบรูปด้านซ้ายโทนขาวพาสเทล */}
        <div className="pink-photo-wrapper">
          <div className="pink-photo-frame">
            <img src="/Mail-about.JPG" alt="Rose BNK48" />
          </div>
        </div>

        {/* การ์ดข้อมูลด้านขวา (Glassmorphism โทนชมพูขาว) */}
        <div className="pink-info-card">
          <h3 className="pink-name">Mail - Sidaporn Lintaworndee</h3>
          
          <div className="pink-grid">
            <div className="pink-item">
              <span className="pink-label">Born</span>
              <span className="pink-value">July 17, 2010</span>
            </div>
            <div className="pink-item">
              <span className="pink-label">Debut</span>
              <span className="pink-value">October 2025</span>
            </div>
            <div className="pink-item">
              <span className="pink-label">Gen</span>
              <span className="pink-value">BNK48 6th Generation</span>
            </div>
            <div className="pink-item">
              <span className="pink-label">Team</span>
              <span className="pink-value">BNK48 Team Trainee</span>
            </div>
          </div>

          <div className="pink-bio">
            <p>
              "To be Update"
            </p>
          </div>

          <button
            className="pink-toggle-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Close Content" : "General Info"}
          </button>

          {showMore && (
            <div className="pink-more-info">
              <ul className="pink-list">
                <li><strong>Height :</strong> 158 cm</li>
                <li><strong>Province :</strong> Bangkok</li>
                <li><strong>Hobby :</strong> ดูซีรีส์, ดูการ์ตูน, ไปเที่ยว, เล่นเกม </li>
                <li><strong>Blood Group :</strong> O</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DiscographySection() {
  const releases = [
    {
      id: 1,
      title: "【MV full】Doushitemo Kimi ga Suki da",
      type: "Music Video",
      date: "Oct 11, 2025",
      desc: "จะยังไงก็รักเธอ / BNK48 20th Single Coupling Song",
      video: "https://www.youtube.com/embed/jRVOQHriw2w?si=JrkTROA3HZVPAF", 
      featured: true,
      badge: "Debut Song"
    },
    {
      id: 2,
      title: "【PV】ช็อต!!!! (OST. Shock Me Girls รักช็อตใจ ยัยช็อตฟีล)",
      type: "PV",
      date: "Premiered Mar 6, 2026",
      video: "https://www.youtube.com/embed/D4XqskuDylo?si=VvMJK0yK5Yjh8GxK"
    },
    {
      id: 3,
      title: "Coming Soon",
      type: "Fancam",
      date: "By...",
      video: ""
    },
    {
      id: 4,
      title: "Coming Soon",
      type: "Fancam",
      date: "By...",
      video: "" // ใส่ลิงก์คลิปที่ 4
    }
  ];

  const featured = releases.find(r => r.featured);
  const others = releases.filter(r => !r.featured);

  return (
    <div className="discography-container">
      <div className="pink-section-header">
        <h2>Discography</h2>
        <div className="pink-line"></div>
      </div>

      {/* 🌟 วิดีโอเด่นด้านบน */}
      <div className="disco-featured-card">
        <div className="disco-featured-img">
          <iframe 
            src={featured.video} 
            title={featured.title}
            allowFullScreen>
          </iframe>
        </div>
        <div className="disco-featured-info">
          <span className="disco-badge">{featured.badge}</span>
          <h3 className="disco-title-lg">{featured.title}</h3>
          <p className="disco-meta-lg">{featured.type} • {featured.date}</p>
          <p className="disco-desc-lg">{featured.desc}</p>
        </div>
      </div>

      {/* 📱 วิดีโอรอง 3 คลิปด้านล่าง */}
      <div className="disco-grid">
        {others.map((item) => (
          <div key={item.id} className="disco-mini-card">
            <div className="disco-mini-img">
              <iframe 
                src={item.video} 
                title={item.title}
                allowFullScreen>
              </iframe>
            </div>
            <div className="disco-mini-body">
              <span className="disco-mini-tag">{item.type}</span>
              <h4 className="disco-mini-title">{item.title}</h4>
              <p className="disco-mini-date">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// src/App.jsx
function HighlightSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef(null);

  // ฟังก์ชันหยุด/เล่นวิดีโอ (ทำงานเฉพาะเมื่อกดปุ่มควบคุมเท่านั้น)
  const togglePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const command = isPlaying ? 'pauseVideo' : 'playVideo';
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: '' }),
        '*'
      );
      setIsPlaying(!isPlaying);
    }
    
  };
  const handleShieldClick = (e) => {
    if (window.innerWidth <= 767) {
      togglePlay(e);
    }
  };

  const mainVideoId = "PKpjhomsoHo";
  // เปิด controls=1 เพื่อให้ UI ยูทูปขึ้นตอนโหลด แต่จะหายไปเองเพราะมี shield บังเมาส์ไว้
  const mainVideoUrl = `https://www.youtube.com/embed/${mainVideoId}?autoplay=1&mute=1&loop=1&playlist=${mainVideoId}&controls=1&enablejsapi=1&modestbranding=1&rel=0`;

  return (
    <div className="hl-final-wrapper">
      <div className="pink-section-header">
        <h2>Highlight</h2>
        <div className="pink-line"></div>
      </div>

      {/* 🌟 วิดีโอหลัก (กรอบขาว + ไร้ขอบดำ) */}
      <div className="hl-final-main-card">
        <div className="hl-video-container">
          <iframe
            ref={iframeRef}
            src={mainVideoUrl}
            title="Main Highlight"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          ></iframe>
          
          {/* กระจกใส (Shield): ทำให้ UI YouTube หายไปเองเพราะไม่รู้ว่ามีเมาส์ชี้ และกันการกดหยุดตรงกลางจอ */}
          <div className="hl-final-shield" onClick={handleShieldClick}></div>

          {/* ปุ่มหยุด/เล่น (จุดเดียวที่กดหยุดได้) */}
          <button onClick={togglePlay} className="hl-final-play-btn">
            {isPlaying ? "⏸" : "▶"}
          </button>

          {/* แถบรายละเอียดดีไซน์ใหม่ (ชิดขอบล่าง ไม่บังคน) */}
          <div className="hl-final-info-bar">
            <div className="hl-final-text">
              <span className="hl-final-tag">★ NEW RELEASE</span>
              <h3 className="hl-final-title">Mail พาท่องโลก "สัตว์ป่า"</h3>
              <p className="hl-final-sub">Vlog</p>
            </div>
            <a href={`https://www.youtube.com/watch?v=${mainVideoId}`} target="_blank" rel="noreferrer" className="hl-final-link-btn">
              View Full Video ↗
            </a>
          </div>
        </div>
      </div>

      {/* 📱 วิดีโอรอง (รูป Thumbnail กดแล้วไป YouTube) */}
  
<div className="hl-final-sub-grid">
  {/* คลิปเล็ก 1 */}
  <a href="https://youtu.be/ogHVge7P84U" target="_blank" rel="noreferrer" className="hl-final-sub-card">
    <div className="hl-sub-img-wrapper">
      <img src="https://img.youtube.com/vi/ogHVge7P84U/maxresdefault.jpg" alt="THEN & NOW" />
    </div>
    <div className="hl-final-sub-label">THEN & NOW</div>
  </a>
  
  {/* คลิปเล็ก 2 */}
  <a href="https://youtu.be/rND5hs5vy44" target="_blank" rel="noreferrer" className="hl-final-sub-card">
    <div className="hl-sub-img-wrapper">
      <img src="https://img.youtube.com/vi/rND5hs5vy44/maxresdefault.jpg" alt="Fancam Mix" />
    </div>
    <div className="hl-final-sub-label">พี่ดูปากหนูนะคะ</div>
  </a>
</div>
    </div>
  );
}

// src/App.jsx

function SocialSection() {
  return (
    <div className="social-wrapper" style={{ width: "100%" }}>
      
      {/* เปลี่ยนหัวข้อให้เป็นสไตล์ชมพูพาสเทลเหมือน Discography */}
      <div className="pink-section-header">
        <h2>Social Media</h2>
        <p style={{ color: "#a07c89", fontSize: "0.95rem", margin: "8px 0 0", textAlign: "center", fontWeight: "500" }}>
         
        </p>
        <div className="pink-line"></div>
      </div>

      {/* บนสุด: IG + TikTok */}
      <div className="social-main-grid">
        
        {/* Instagram */}
        <article className="social-card">
          <a
            href="https://www.instagram.com/mail.bnk48official/#"
            target="_blank"
            rel="noopener noreferrer"
            className="social-banner social-banner--ig"
          >
            <div className="social-banner-left">
              <span className="social-platform">
                <img src="/igicon.png" alt="IG" className="social-icon" />
                <span>Instagram</span>
              </span>
              <span className="social-handle">@mail.bnk48official</span>
            </div>
            <span className="social-arrow">↗</span>
          </a>

          <div className="social-embed social-embed--ig">
            <FouitaInstagramFeed />
          </div>
        </article>

        {/* TikTok */}
        <article className="social-card">
          <a
            href="https://www.tiktok.com/@mail.bnk48official"
            target="_blank"
            rel="noopener noreferrer"
            className="social-banner social-banner--tt"
          >
            <div className="social-banner-left">
              <span className="social-platform">
                <img src="/tiktokicon.png" alt="TikTok" className="social-icon" />
                <span>TikTok</span>
              </span>
              <span className="social-handle">@mail.bnk48official</span>
            </div>
            <span className="social-arrow">↗</span>
          </a>

          <div className="social-embed social-embed--tt">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@mail.bnk48official"
              data-unique-id="mail.bnk48official"
              data-embed-type="creator"
              style={{ maxWidth: "780px", minWidth: "288px" }}
            >
              <section>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@mail.bnk48official?refer=creator_embed"
                >
                  @mail.bnk48official
                </a>
              </section>
            </blockquote>
          </div>
        </article>
      </div>
      

      {/* แถวล่าง: Facebook + iAM48 แบบแบนเนอร์เต็มๆ */}
      <div className="social-extra-row">
        <a
          href="https://www.facebook.com/mail.bnk48official"
          target="_blank"
          rel="noopener noreferrer"
          className="social-chip social-chip--fb"
        >
          <div className="social-chip-left">
            <img src="/fblogo2.png" alt="Facebook" className="social-chip-logo-fb" />
            <div className="social-chip-text">
              <span className="social-chip-label">Facebook</span>
              <span className="social-chip-handle">Mail BNK48 Official</span>
            </div>
          </div>
          <span className="social-chip-arrow">↗</span>
        </a>

        <a
          href="https://app.bnk48.com/member-profile/153"
          target="_blank"
          rel="noopener noreferrer"
          className="social-chip social-chip--iam"
        >
          <div className="social-chip-left">
            <img src="/iamlogo.png" alt="iAM48" className="social-chip-logo-iam" />
            <div className="social-chip-text">
              <span className="social-chip-label">iAM48</span>
              <span className="social-chip-handle">Mail</span>
            </div>
          </div>
          <span className="social-chip-arrow">↗</span>
        </a>
      </div>
      
    </div>
  );
}

function GallerySection() {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const items = [
    { id: 1, src: "/Mail-cover5.JPG", label: "PresssTour", credit: "Phoenixcz"}, 
    { id: 2, src: "/Jx1.JPG", label: "JapanExpo", credit: "BNK_Story" },
    { id: 3, src: "/Jx2.JPG", label: "JapanExpo", credit: "BNK_Story" },
    { id: 4, src: "/SMG1.JPG", label: "Shock Me Girls", credit: "" },
    { id: 5, src: "/SMG2.JPG", label: "Shock Me Girls", credit: "" },
    { id: 6, src: "/SMG3.JPG", label: "Shock Me Girls", credit: "" },
    { id: 7, src: "/hwpic5.JPG", label: "To be Update", credit: "" }, 
    // เพิ่มรูปที่ 8 เข้าไปเพื่อให้ตารางเต็ม 2 แถว แถวละ 4 พอดี
    { id: 8, src: "/hwpic1.JPG", label: "To be Update", credit: "" } 
  ];

  return (
    <section id="gallery" className="page-section page-section--tone1">
      <div className="page-section-inner">
        
        <div className="pink-section-header">
          <h2>Gallery</h2>
          <p style={{ color: "#a07c89", fontSize: "0.95rem", margin: "8px 0 0", textAlign: "center", fontWeight: "500" }}>
          
          </p>
          <div className="pink-line"></div>
        </div>

        <div className="gallery-home-grid">
          {items.map((item) => (
            <div key={item.id} className="gallery-home-cell">
              <div className="home-gallery-wrapper">
                <img
                  src={item.src}
                  alt=""
                  className="home-gallery-img"
                  onClick={() => setSelectedItem(item)}
                />
                {/* แถบสีดำตอน Hover ยังอยู่เหมือนเดิม */}
                <div className="home-gallery-overlay">
                  <h3>{item.label || "Coming Soon"}</h3>
                  <p>By {item.credit || "ระบุชื่อเจ้าของภาพ"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
        
        <div className="gallery-all-wrapper">
          {/* เปลี่ยนชื่อปุ่มตรงนี้ */}
          <a href="/gallery" className="gallery-all-btn">
            View More Photos
          </a>
        </div>
      </div>
    </section>
  );
}


/*Rollzy Bunny*/

// src/App.jsx ในส่วน function RollzyBunnySection()

function RollzyBunnySection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rollzy-split-layout">
      {/* ฝั่งซ้าย: เนื้อหาข้อความ */}
      <div className="rollzy-content-left">
        <div className="gradient-section-header left-align">
          <h2>Mail BNK48<br/>Supporters</h2>
        </div>
 <p className="rollzy-subtitle--left">
          มาร่วมเป็นส่วนหนึ่งในการ Support น้องเมลไปด้วยกันนน 💌
        </p>

       
        <div className="rollzy-actions--left">
          <a
            href="https://line.me/ti/g2/9XmcfZzUkbUwRZYcnDu-QWpmB4oO1gveVPVj1g?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
            target="_blank"
            rel="noopener noreferrer"
            className="rollzy-btn rollzy-btn--primary"
          >
            เข้าร่วม OpenChat
          </a>

          <button
            type="button"
            className="rollzy-btn rollzy-btn--ghost"
            onClick={() => setOpen(true)}
          >
            ช่องทางแฟนด้อมทั้งหมด
          </button>
        </div>
      </div>

      {/* ฝั่งขวา: รูปภาพที่ขยายเต็มขอบด้านขวา */}
      <div className="rollzy-image-right">
        <img src="/Mail-cover2.JPG" alt="Mail BNK48" />
        <div className="rollzy-image-gradient-overlay"></div>
      </div>

      {/* Modal (ส่วนนี้คงเดิม) */}
      {open && (
        <div className="rollzy-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="rollzy-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="rollzy-modal-title">ช่องทางติดตามแฟนด้อม</h3>
            <div className="rollzy-channel-list">
             {/* Facebook */}
              <a
                href="https://www.facebook.com/icecreamformail.thfc"
                target="_blank"
                rel="noopener noreferrer"
                className="rollzy-channel rollzy-channel--fb"
              >
                <span className="rollzy-channel-left">
                  <img
                    src="/fblogo2.png"
                    alt="Facebook"
                    className="rollzy-channel-logo-fb"
                  />
                  <span className="rollzy-channel-name">IceCream for Mail's - Mail BNK48 Thailand Fanclub </span>
                </span>
                <span className="rollzy-channel-arrow">↗</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/icecreamformail.thfc"
                target="_blank"
                rel="noopener noreferrer"
                className="rollzy-channel rollzy-channel--ig"
              >
                <span className="rollzy-channel-left">
                  <img
                    src="/igicon3.png"
                    alt="Instagram"
                    className="rollzy-channel-logo-ig"
                  />
                  <span className="rollzy-channel-name">icecreamformail.thfc</span>
                </span>
                <span className="rollzy-channel-arrow">↗</span>
              </a>

              {/* X */}
              <a
                href="https://x.com/icecreamformail"
                target="_blank"
                rel="noopener noreferrer"
                className="rollzy-channel rollzy-channel--x"
              >
                <span className="rollzy-channel-left">
                  <img
                    src="/xicon.png"
                    alt="X"
                    className="rollzy-channel-logo-x"
                  />
                  <span className="rollzy-channel-name">icecreamformail</span>
                </span>
                <span className="rollzy-channel-arrow">↗</span>
              </a>

              {/* Line OpenChat */}
              <a
                href="https://line.me/ti/g2/9XmcfZzUkbUwRZYcnDu-QWpmB4oO1gveVPVj1g?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                target="_blank"
                rel="noopener noreferrer"
                className="rollzy-channel rollzy-channel--line"
              >
                <span className="rollzy-channel-left">
                  <img
                    src="/opcicon.png"
                    alt="Line OpenChat"
                    className="rollzy-channel-logo-opc"
                  />
                  <span className="rollzy-channel-name">IceCream for Mail's - Mail BNK48 THFC 🐱💌 </span>
                </span>
                <span className="rollzy-channel-arrow">↗</span>
              </a>
            </div>
            <button className="rollzy-modal-close" onClick={() => setOpen(false)}>
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <>
    {/*  <footer className="footer-top">
        <p>Fansite Project made by RollzyBunny</p>
      </footer> */}

      <footer className="footer">
  <p className="footer-line1">-`♡´- Fansite Project made by BNK_Story </p>
  <p className="footer-line2">Original Content & Artist © by Independent Artist Management (iAM).</p>
</footer>
    </>
  );
}

function App() {
  // เลื่อนขึ้นบนสุดตอนเข้าเพจ
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // เอฟเฟกต์เลื่อนแล้วค่อยโผล่
  useEffect(() => {
  const elements = document.querySelectorAll(".section-reveal");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // ใส่คลาส visible → เล่นเอฟเฟกต์ครั้งเดียว
          entry.target.classList.add("visible");

          // เลิกสังเกต element นี้เพื่อไม่ให้เล่นซ้ำ
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.04 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <div className="app-root">
      <Navbar />
      <Hero />

      <PageSection id="about" tone="light">
        <AboutSection />
      </PageSection>

      <PageSection id="schedule" tone="purple">
        <EventsSection />
      </PageSection>

      <PageSection id="discography" tone="light">
        <DiscographySection />
      </PageSection>
      
      <PageSection id="highlight" tone="purple">
        <HighlightSection />
      </PageSection>

      <PageSection id="social" tone="light">
        <SocialSection />
      </PageSection>

      <PageSection id="gallery" tone="purple">
        <GallerySection />
      </PageSection>

      <PageSection id="rollzy" tone="light">
        <RollzyBunnySection />
      </PageSection>

      <Footer />
    </div>
  );
}

/*ของ Navbar */
window.addEventListener("load", () => {
  const { hash } = window.location;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100); // ดีเลย์เล็กน้อยให้ DOM โหลดให้ครบ
    }
  }
});

export default App;


