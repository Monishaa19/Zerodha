import React from "react";
function Stats() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5">
          <h2 className="mb-5">Trust with confidence</h2>

          <h5>Customer-first always</h5>
          <p className="mb-5 text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h5>No spam or gimmicks</h5>
          <p className="mb-5 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h5>The Zerodha universe</h5>
          <p className="mb-5 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h5>Do better with money</h5>
          <p className="mb-5 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money
          </p>
        </div>

        <div className="col-6">
          <img
            src="media/images/ecosystem.png"
            className="mt-5 mb-3"
            width="90%"
            height="80%"
          ></img>
        <br></br>
          <a className="p-5 fs-5" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a> 
          <a className="p-5 fs-5" style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>

      <img
        src="media/images/pressLogos.png"
        className="mt-2 text-center items-center ml-5"
        style={{ margin: "0 auto",position:"relative",left:"25%" }}
        width="600px"
      ></img>
    </div>
  );
}

export default Stats;
