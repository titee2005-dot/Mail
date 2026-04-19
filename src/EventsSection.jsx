// src/EventsSection.jsx
import { events } from "./events";

function EventsSection() {
  let activeEvents = events.filter(e => e.lastShowDate > new Date());
  if(activeEvents == null || activeEvents.length == 0) {
    activeEvents = [{
       title: "None",
       date: "TBA",
       place: "📍TBA",
    }];
  }

  return (
    <section id="schedule" className="page-section page-section--tone2">
      <div className="page-section-inner">

        {/* 1. เพิ่ม style={{ marginBottom: "40px" }} ตรงนี้ เพื่อเว้นระยะให้การ์ดไม่ชิดหัวข้อเกินไป */}
        <div className="events-header" style={{ marginBottom: "40px" }}>
          <div className="pink-section-header" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2 style={{ fontSize: "3rem", color: "#ffb6c1", textTransform: "uppercase", margin: 0, textAlign: "center", fontFamily: "'Space Grotesk', 'Mitr', sans-serif" }}>
              UPCOMING EVENTS
            </h2>
            
            <div className="pink-line"></div>
          </div>
        </div>

        <div className="card-row">
          {activeEvents.map((ev, index) => (
            <a 
              key={index} 
              href={ev.link}         
              target="_blank"
              rel="noopener noreferrer"
              className="event-card"
            >
              <div className="event-thumb">
                <img src={ev.image} alt={ev.title} className={`event-thumb--e${index+1}`} />
              </div>

              <div className="event-body">
                <div className="event-meta-row">
                  <span className="event-pill">Upcoming</span>
                  <span className="event-date">{ev.date}</span>
                </div>

                <h3 className="event-title">{ev.title}</h3>
                <p className="event-place">{ev.place}</p>
                <p className="event-desc">{ev.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* 2. ปุ่ม All Schedule จะอยู่ตรงนี้ (ใต้การ์ด) */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "35px", width: "100%" }}>
          
          {/* เพิ่มคลาส force-center-btn เข้าไปตรงนี้ 👇 */}
          <a href="/all-schedule" className="all-schedule-btn force-center-btn">
            All Schedule
          </a>
        </div>

      </div>
    </section>
  );
}

export default EventsSection;