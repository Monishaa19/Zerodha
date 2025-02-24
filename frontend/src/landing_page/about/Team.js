import React from "react";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="">
      <h2 className="p-5 text-center mb-5">People</h2>
      <div className="container">
        <div className="row">
          <div className="col-6 text-center me-0">
            <figure>
              <img
                src="media/images/nithinKamath.jpg"
                style={{ borderRadius: "50%", width: "50%" }}
              ></img>
            </figure>
            <figcaption>
              {" "}
              <span className="fs-5">Nithin Kamath</span> <br></br> <br></br>{" "}
              Founder, CEO
            </figcaption>
          </div>

          <div className="col-6 ms-0 text-start">
            <p style={{ fontSize: "1rem" }}>
              Nithin Kamath Founder, CEO Nithin bootstrapped and founded Zerodha
              in 2010 to overcome the hurdles he faced during his decade long
              stint as a trader. Today, Zerodha has changed the landscape of the
              Indian broking industry. <br></br> <br></br>He is a member of the
              SEBI Secondary Market Advisory Committee (SMAC) and the Market
              Data Advisory Committee (MDAC). <br></br> <br></br>Playing
              basketball is his zen. <br></br> <br></br>Connect on <Link to='/' style={{textDecoration:'none'}}>HomePage /</Link> 
              <a href='https://tradingqna.com/u/nithin/summary' style={{textDecoration:'none'}} >TradingQnA /</a> <a href='https://x.com/Nithin0dha' style={{textDecoration:'none'}}>Twitter</a> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
