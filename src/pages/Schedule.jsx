const Schedule = () => {
  return (
    <section
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            color: "#fff",
            fontSize: "40px",
            marginBottom: "15px",
          }}
        >
          Schedule a Meeting with
        </h1>

        <h2
          style={{
            color: "#00A693",
            fontSize: "36px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Sky Lift Group
        </h2>

        <p
          style={{
            color: "#ccc",
            marginBottom: "50px",
            fontSize: "18px",
          }}
        >
          Select a time that works best for you. We look forward to connecting.
        </p>

        {/* Calendar Container */}
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 0 30px rgba(0, 166, 147, 0.3)",
            border: "2px solid #00A693",
            backgroundColor: "#111",
            padding: "10px",
          }}
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/Mi5gk5QCFKULntPciL7d"
            style={{
              width: "100%",
              height: "900px",
              border: "none",
              borderRadius: "15px",
              backgroundColor: "#fff",
            }}
            scrolling="no"
            title="Sky Lift Group Appointment Booking"
          />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
