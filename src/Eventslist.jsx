import { events } from "./events";

function EventsSection() {
  // กรองงานที่ยังไม่หมดเวลา
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

        <div className="events-header">
          {/* ส่วนหัวที่ปรับโครงสร้างให้เหมือน About 100% */}
          <div className="section-header">
            <h2>All Schedule</h2>
            <div className="pink-line"></div>
          </div>

          {/* ปุ่ม All Schedule */}
          <a 
            href="/" 
            className="all-schedule-btn"
          >
            Back
          </a>
        </div>

        <div className="card-row">
          {activeEvents.map((ev, index) => (
            <a 
              key={index} 
              href={ev.link} 
              target="_blank"
              className="event-card"
            >
              <div className="event-thumb">
                <img src={ev.image} alt={ev.title} />
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

      </div>
    </section>
  );
}

export default EventsSection;