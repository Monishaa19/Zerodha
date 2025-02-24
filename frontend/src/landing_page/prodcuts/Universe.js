import React from "react";
function Universe() {
  return (
    <div className="text-center items-center mt-5">
      <h5 className="mb-5 p-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </h5>
      <h1 className="mt-5 mb-4">The Zerodha Universe</h1>
      <h6 className="mb-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </h6>

      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "60%" }}
            ></img>
            <p
              className="text-muted p-2"
              style={{
                fontSize: "smaller",
                width: "30ch",
                position: "relative",
                top: "10px",
                left: "50px",
              }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "60%" }}
            ></img>
            <p
              className="text-muted p-3"
              style={{
                fontSize: "smaller",
                width: "35ch",
                position: "relative",
                top: "10px",
                left: "50px",
              }}
            >
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4">
          <img
              src="media/images/tijori.png"
              style={{ width: "60%",position:'relative', bottom:'10px'}}
            ></img>
            <p
              className="text-muted p-2"
              style={{
                fontSize: "smaller",
                width: "30ch",
                position: "relative",
                top: "10px",
                left: "50px",
              }}
            >
           Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

            </p>
          </div>
        </div><br></br>

        <div className="row">
          <div className="col-4">
            <img
              src="media/images/streakLogo.png"
              style={{ width: "60%" }}
            ></img>
            <p
              className="text-muted p-2"
              style={{
                fontSize: "smaller",
                width: "30ch",
                position: "relative",
                top: "10px",
                left: "50px",
              }}
            >
             
Systematic trading platform
that allows you to create and backtest
strategies without coding.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "60%" }}
            ></img>
            <p
              className="text-muted p-3"
              style={{
                fontSize: "smaller",
                width: "35ch",
                position: "relative",
                top: "10px",
                left: "50px",
              }}
            >
           Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4">
          <img
              src="media/images/dittoLogo.png"
              style={{ width: "40%",position:'relative', bottom:'10px'}}
            ></img>
            <p
              className="text-muted p-2"
              style={{
                fontSize: "smaller",
                width: "30ch",
                position: "relative",
                top: "10px",
                left: "50px",
              }}
            >
        Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free

            </p>
          </div>
          </div>
      </div>

      <button className='btn btn-primary fs-5 mb-3 ' style={{width:'200px', margin:'0 auto'}}>
                Sign up for free
            </button>
    </div>
  );
}

export default Universe;
